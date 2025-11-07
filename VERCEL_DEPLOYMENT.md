# 🚀 Vercel Deployment - Anleitung

## Problem gelöst: 404 Error

Der 404-Fehler trat auf, weil Vercel die Dateien im `/out` Verzeichnis nicht finden konnte.

## ✅ Lösung implementiert:

### 1. Vercel-Konfiguration (`vercel.json`)
- Rewrites konfiguriert für `/out` Verzeichnis
- API-Route für Kontaktformular: `/contact.php` → `/api/contact`
- CORS-Headers für API-Aufrufe

### 2. Serverless Function (`/api/contact.js`)
- Ersetzt das PHP-Backend
- Verarbeitet Kontaktformular-Anfragen
- Läuft als Vercel Serverless Function

## 📝 Nächste Schritte:

### Schritt 1: Git Push
```bash
git add .
git commit -m "Vercel-Konfiguration hinzugefügt"
git push origin main
```

### Schritt 2: Vercel Re-Deploy
Nach dem Git Push wird Vercel automatisch neu deployen.

Oder manuell:
1. Gehe zu deinem Vercel Dashboard
2. Klicke auf "Redeploy"

### Schritt 3: E-Mail-Service konfigurieren (wichtig!)

Da Vercel kein PHP unterstützt, musst du einen E-Mail-Service einrichten.

#### Option A: Resend (empfohlen für Vercel)

1. Registriere dich bei [Resend](https://resend.com)
2. Hole deinen API-Key
3. Füge ihn in Vercel hinzu:
   - Vercel Dashboard → Dein Projekt → Settings → Environment Variables
   - Name: `RESEND_API_KEY`
   - Value: Dein API-Key

4. Installiere Resend:
```bash
npm install resend
```

5. Aktualisiere `/api/contact.js`:
```javascript
import { Resend } from 'resend';

export default async function handler(req, res) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  const { name, supermarkt, email, telefon, nachricht } = req.body;
  
  await resend.emails.send({
    from: 'noreply@your-domain.com', // Deine verifizierte Domain
    to: 'H.Ott@Ai-Solution-Ott.de',
    replyTo: email,
    subject: `Neue Kontaktanfrage von ${name} (${supermarkt})`,
    text: `
Name: ${name}
Supermarkt: ${supermarkt}
E-Mail: ${email}
Telefon: ${telefon || 'Nicht angegeben'}

Nachricht:
${nachricht}
    `
  });
  
  return res.status(200).json({ success: true, message: '...' });
}
```

#### Option B: SendGrid

1. Registriere dich bei [SendGrid](https://sendgrid.com)
2. Hole deinen API-Key
3. Füge ihn in Vercel Environment Variables hinzu:
   - Name: `SENDGRID_API_KEY`
4. Installiere SendGrid:
```bash
npm install @sendgrid/mail
```

5. Aktualisiere `/api/contact.js`:
```javascript
import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  const { name, supermarkt, email, telefon, nachricht } = req.body;
  
  await sgMail.send({
    to: 'H.Ott@Ai-Solution-Ott.de',
    from: 'noreply@your-domain.com', // Verifizierte Absenderadresse
    replyTo: email,
    subject: `Neue Kontaktanfrage von ${name} (${supermarkt})`,
    text: `...`
  });
  
  return res.status(200).json({ success: true, message: '...' });
}
```

#### Option C: Weiterhin PHP auf anderem Server

Wenn du lieber PHP verwendest:
1. Hoste das PHP-Backend auf einem PHP-Server (z.B. Shared Hosting)
2. Ändere in `/out/index.html` die Form-Action:
```javascript
fetch('https://dein-php-server.com/contact.php', { ... })
```

## 🧪 Testen

Nach dem Deployment:
1. Öffne deine Vercel-URL
2. Scrolle zum Kontaktformular
3. Sende eine Test-Nachricht
4. Überprüfe die Vercel Logs: Dashboard → Functions → Logs

## ⚠️ Wichtige Hinweise:

1. **Domain für E-Mails**: Die meisten E-Mail-Services erfordern eine verifizierte Domain
2. **Umgebungsvariablen**: Stelle sicher, dass alle API-Keys in Vercel Environment Variables gesetzt sind
3. **CORS**: Die CORS-Header sind bereits in `vercel.json` konfiguriert

## 🆘 Problembehebung:

### Fehler: "Module not found"
- Stelle sicher, dass alle Dependencies in `package.json` sind
- Führe `npm install` lokal aus und pushe `package-lock.json`

### Fehler: "API route nicht gefunden"
- Überprüfe, dass `/api/contact.js` existiert
- Prüfe die `vercel.json` Rewrites

### E-Mails kommen nicht an:
- Überprüfe Vercel Function Logs
- Stelle sicher, dass API-Keys korrekt gesetzt sind
- Verifiziere deine E-Mail-Domain beim Provider

## 📚 Weitere Ressourcen:

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions/serverless-functions)
- [Resend Documentation](https://resend.com/docs)
- [SendGrid Documentation](https://docs.sendgrid.com)
