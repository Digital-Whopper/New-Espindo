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
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "espindotour@gmail.com",
            subject: "New Enquiry",
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date || "N/A"}\nTravellers: ${travellers || "N/A"}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
}
