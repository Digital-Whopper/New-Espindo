import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Manually load .env file

export async function POST(req) {
    try {
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

        const { name, email, phone, date, travellers, message } = await req.json();

        if (!name || !email || !phone || !message) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Espindo Tours" <${process.env.EMAIL_USER}>`,
            to: "espindotour@gmail.com",
            subject: "New Enquiry",
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date || "N/A"}\nTravellers: ${travellers || "N/A"}\nMessage: ${message}`,
        });

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
}
