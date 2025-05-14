import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, date, travellers, message } = req.body;

    if (!name || !email || !phone || !date || !travellers || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'espindotour@gmail.com',
        pass: 'mrvd ohbc sdzb opyg', // App password
      },
    });

    const mailOptions = {
      from: 'espindotour@gmail.com',
      to: 'espindotour@gmail.com',
      subject: 'New Travel Enquiry Received',
      text: `
New Enquiry Details:

Name       : ${name}
Email      : ${email}
Phone      : ${phone}
Travel Date: ${date}
Travellers : ${travellers}
Message    : ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
