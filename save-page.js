/**
 * save-page.js
 * Puppeteer scraper: rendert Seite, scrollt lazy-load, speichert HTML + CSS + Bilder
 *
 * Usage:
 *   node save-page.js "https://ihre-wochenangebote-prof-4hd8ogg.gamma.site" ./out
 */

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const fetch = require('node-fetch');
const crypto = require('crypto');
const puppeteer = require('puppeteer-core');

function safeFilename(url) {
  const u = new URL(url, 'http://example.com');
  let name = path.basename(u.pathname) || 'resource';
  // fallback: hash if name is too short or no extension
  if (!path.extname(name)) {
    const h = crypto.createHash('sha1').update(url).digest('hex').slice(0,10);
    name = `${name}-${h}`;
  }
  // remove query strings characters
  name = name.split('?')[0].split('#')[0];
  // sanitize
  return name.replace(/[^a-zA-Z0-9._-]/g, '-');
}

async function sleep(ms){ return new Promise(res=>setTimeout(res, ms)); }

async function scrollPage(page) {
  // scroll slowly to bottom to trigger lazy loading
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        total += distance;
        if(total >= scHeight - window.innerHeight){
          clearInterval(timer);
          resolve();
        }
      }, 300);
    });
  });
  // wait a bit for lazy loads
  await sleep(1000);
}

async function downloadFile(url, outDir) {
  try {
    const res = await fetch(url, {timeout: 20000});
    if (!res.ok) return null;
    const buffer = await res.buffer();
    const name = safeFilename(url);
    const filePath = path.join(outDir, name);
    fs.writeFileSync(filePath, buffer);
    return {url, filePath, name};
  } catch (e) {
    console.warn('download fail', url, e.message);
    return null;
  }
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.length < 1) {
    console.error('Usage: node save-page.js <url> [outDir]');
    process.exit(1);
  }
  const url = argv[0];
  const outDir = argv[1] || './out';
  const assetsDir = path.join(outDir, 'assets');
  mkdirp.sync(outDir);
  mkdirp.sync(assetsDir);

  // detect chromium path (try common locations)
  const execPaths = [
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/snap/bin/chromium',
    '/usr/bin/google-chrome-stable',
  ];
  let executablePath = execPaths.find(p=> fs.existsSync(p));
  if (!executablePath) {
    console.error('Kein system-chromium gefunden. Bitte installiere chromium und passe den Pfad an.');
    process.exit(2);
  }

  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const page = await browser.newPage();
  await page.setViewport({width: 1280, height: 900});

  // optional: set cookie acceptance or user agent
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115 Safari/537.36');

  console.log('Navigiere zu', url);
  await page.goto(url, {waitUntil:'networkidle2', timeout: 60000});

  // scroll to load lazy content
  await scrollPage(page);

  // extra wait if the page loads images lazy
  await sleep(800);

  // get full HTML
  let html = await page.content();

  // collect resources (images + stylesheets)
  const imgUrls = await page.evaluate(() => Array.from(document.querySelectorAll('img')).map(i => i.src).filter(Boolean));
  const cssUrls = await page.evaluate(() => Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href).filter(Boolean));
  const bgUrls = await page.evaluate(() => {
    // find url(...) in inline styles and stylesheets (simple approach)
    const urls = [];
    Array.from(document.querySelectorAll('*')).forEach(el=>{
      const s = getComputedStyle(el).backgroundImage || '';
      if (s && s !== 'none') {
        const m = s.match(/url\(["']?(.*?)["']?\)/);
        if (m && m[1]) urls.push(m[1]);
      }
    });
    return urls;
  });

  const uniqueResources = Array.from(new Set([...imgUrls, ...cssUrls, ...bgUrls])).filter(Boolean);
  console.log(`Gefundene Ressourcen: ${uniqueResources.length}`);

  const downloaded = [];
  for (const r of uniqueResources) {
    // resolve relative URLs
    let full;
    try { full = new URL(r, url).toString(); } catch(e) { continue; }
    const d = await downloadFile(full, assetsDir);
    if (d) {
      downloaded.push(d);
      // replace in HTML later
    }
  }

  // rewrite references in HTML to local assets folder
  for (const d of downloaded) {
    const rel = path.join('assets', d.name).replace(/\\/g,'/');
    // replace all occurrences of original url with relative path
    // escape special characters in regex:
    const esc = d.url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    html = html.replace(new RegExp(esc, 'g'), rel);
    // also try replacing without query string
    const noQuery = d.url.split('?')[0];
    const esc2 = noQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    html = html.replace(new RegExp(esc2, 'g'), rel);
  }

  // save index.html
  const indexPath = path.join(outDir, 'index.html');
  fs.writeFileSync(indexPath, html);
  console.log('Gespeichert:', indexPath, 'Assets:', downloaded.length);

  await browser.close();
  console.log('Fertig.');
}

main().catch(e => { console.error(e); process.exit(99); });
