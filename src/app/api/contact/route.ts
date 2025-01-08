import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, phoneNumber, message } = body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ibrahimsaibu2010@gmail.com",
      pass: "zyci nmtu kdqu ldgk",
    },
  });

  const mailOptions = {
    from: email,
    to: "ibrahimsaibu2010@gmail.com",
    subject: `New Message from ${firstName} ${lastName}`,
    text: `
          Name: ${firstName} ${lastName}
          Email: ${email}
          Phone: ${phoneNumber ? phoneNumber : "N/A"}
  
          Message:
          ${message ? message : "N/A"}
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    NextResponse.json(500).json();
  }
}
