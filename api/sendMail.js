import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { name, email, phone, message, date, travellers } = req.body;

        // Validate required fields for both forms
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ message: "Name, email, phone, and message are required" });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({ message: "Invalid phone number (must be 10 digits)" });
        }

        if (travellers && (isNaN(travellers) || travellers <= 0)) {
            return res.status(400).json({ message: "Travellers must be a positive number if provided" });
        }

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        // Determine the email subject based on the form type
        const subject = date || travellers ? "Espindo Enquiry Form (Full Form)" : "Espindo Enquiry Form (Basic Form)";

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "espindotour@gmail.com",
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n${date ? `Date: ${date}\n` : ""}${travellers ? `Travellers: ${travellers}\n` : ""}Message: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Email sent successfully" });

    } catch (error) {
        console.error("Error in api/sendMail:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
