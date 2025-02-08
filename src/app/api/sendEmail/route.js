import { NextResponse } from 'next/server';
const nodemailer = require("nodemailer");

export async function POST(req, res) {
    try {
        const form = await req.json();
        
        const mailOptions = {
            from: "davidjsandovalservices@gmail.com",
            to: "davidsandoval596@gmail.com",
            subject: `New Portfolio Message from ${form.name}`,
            text: `${form.email}: ${form.message}`
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            requireTLS: true,
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_EMAIL_OTP
            }
        })

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
        return NextResponse.json({ message: "Email Sent Successfully!" }, { status: 200 });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
