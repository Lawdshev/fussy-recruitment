import { NextResponse } from "next/server";
import { transporter } from "../config/nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    companyName,
    industryType,
    name,
    email,
    phone,
    positionRequired,
    numberOfPositions,
    urgency,
    message,
  } = body;

  const mailOptions = {
    from: `"Fussy Recruitment" <${email}>`,
    to: "ibrahimsaibu2010@gmail.com",
    subject: `New Message from ${name} - Request for Consultation`,
    text: `
          Name: ${name} 
          Email: ${email}
          Phone: ${phone ? phone : "N/A"}
          companyName: ${companyName}
          industryType: ${industryType}
          positionRequired: ${positionRequired}
          numberOfPositions: ${numberOfPositions}
          urgency: ${urgency}
          Message:
          ${message ? message : "N/A"}
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Submittion Successul" });
  } catch (error) {
    console.error("Error sending email:", error);
    NextResponse.json(500).json();
  }
}
