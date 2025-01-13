import { Message } from "./../../../../node_modules/react-hook-form/dist/types/errors.d";
import { NextResponse } from "next/server";
import { transporter } from "../config/nodemailer";
import { base } from "../config/airtable";

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

  base("Consultation").create(
    {
      "Company Name": companyName,
      Email: email,
      "Industry Type": industryType,
      Name: name,
      Message: message,
      Urgency: urgency,
      "Position Required": positionRequired,
      "Number of Position": numberOfPositions,
      "Phone Number": phone,
    },
    (err: any) => {
      if (err) {
        console.error("Error creating record:", err);
        NextResponse.json(500).json();
      }
    }
  );

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
