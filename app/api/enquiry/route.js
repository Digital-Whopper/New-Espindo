import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import "dotenv/config"; // Ensure env variables load

export async function POST(req) {
    try {
        console.log("EMAIL_USER:", process.env.EMAIL_USER ?? "Not Loaded");
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");

        const { name, email, phone, date, travellers, message } = await req.json();
        console.log("Form Data:", { name, email, phone, date, travellers, message });

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

        // Verify SMTP Connection
        try {
            await transporter.verify();
            console.log("SMTP Server is ready to send emails");
        } catch (error) {
            console.error("SMTP Verification Failed:", error);
            return NextResponse.json({ message: "SMTP Configuration Error", error: error.message }, { status: 500 });
        }

        // Send email
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



