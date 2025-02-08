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
                user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
                pass: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL_OTP
            }
        })

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error)
                res.status(500).end("Failed to send the email")
            } else {
                console.log("Email sent:", info.response)
                res.status(200).end("Email sent successfully")
                return NextResponse.json({ message: "Email Sent Successfully!" }, { status: 200 });
            }
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
