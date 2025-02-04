import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, phone, date, travellers, message } = await req.json();

        // Validate inputs
        if (!name || !email || !phone || !message) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",  // Gmail SMTP server
            port: 587, // Use 465 for SSL, 587 for TLS
            secure: false, // Must be false for port 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email message configuration
        const mailOptions = {
            from: `"Espindo Tours" <${process.env.EMAIL_USER}>`,
            to: "espindotour@gmail.com",
            subject: "New Enquiry",
            text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date || "N/A"}
Travellers: ${travellers || "N/A"}
Message: ${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
}
