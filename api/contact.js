// Vercel Serverless Function für Kontaktformular
// Sendet E-Mails über einen E-Mail-Service

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Nur POST-Anfragen sind erlaubt' 
    });
  }
  
  try {
    const { name, supermarkt, email, telefon, nachricht } = req.body;
    
    // Validierung
    if (!name || !supermarkt || !email || !nachricht) {
      return res.status(400).json({
        success: false,
        message: 'Bitte füllen Sie alle Pflichtfelder aus.'
      });
    }
    
    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
      });
    }
    
    // Vercel unterstützt verschiedene E-Mail-Services
    // Hier verwenden wir die Vercel Edge Config oder einen E-Mail-Service
    
    // OPTION 1: Mit Resend (empfohlen für Vercel)
    // Installiere: npm install resend
    // Dann verwende: const resend = new Resend(process.env.RESEND_API_KEY);
    
    // OPTION 2: Mit SendGrid
    // Installiere: npm install @sendgrid/mail
    
    // OPTION 3: Mit Nodemailer + Gmail
    // Installiere: npm install nodemailer
    
    // Für jetzt: Demo-Modus - logge die Anfrage
    console.log('📧 Neue Kontaktanfrage:', {
      name,
      supermarkt,
      email,
      telefon,
      nachricht,
      timestamp: new Date().toISOString()
    });
    
    // TODO: Hier E-Mail-Versand implementieren
    // Beispiel mit Fetch zu einem E-Mail-Service:
    /*
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: 'H.Ott@Ai-Solution-Ott.de' }],
          subject: `Neue Kontaktanfrage von ${name} (${supermarkt})`
        }],
        from: { email: 'noreply@your-domain.com' },
        reply_to: { email: email },
        content: [{
          type: 'text/plain',
          value: `
Neue Kontaktanfrage über die Webseite:

Name: ${name}
Supermarkt-Name: ${supermarkt}
E-Mail: ${email}
Telefon: ${telefon || 'Nicht angegeben'}

Nachricht:
${nachricht}
          `
        }]
      })
    });
    */
    
    // Erfolgreiche Antwort
    return res.status(200).json({
      success: true,
      message: 'Vielen Dank! Ihre Nachricht wurde erfolgreich empfangen. Wir melden uns schnellstmöglich bei Ihnen.'
    });
    
  } catch (error) {
    console.error('Fehler beim Verarbeiten der Kontaktanfrage:', error);
    return res.status(500).json({
      success: false,
      message: 'Es gab ein Problem beim Versenden Ihrer Nachricht. Bitte versuchen Sie es später erneut.'
    });
  }
}
