// pages/api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { name, email, phone, products, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "purefarmdung@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD, // App password from Google
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "purefarmdung@gmail.com",
      subject: "New Inquiry from Pure Farm Dung Website",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Products: ${products}
        Message: ${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
}