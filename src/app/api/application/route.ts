import { NextResponse } from "next/server";
import { transporter } from "../config/nodemailer";
import { base } from "../config/airtable";
import { Attachment, Error } from "airtable";

export async function POST(request: Request) {
  const body = await request.json();
  const { personalDetails, qualification, experience, uniformAndLegal } = body;

  const cvAttachment = [
    {
      filename: qualification?.cv?.original_filename,
      url: qualification?.cv?.url,
    },
  ];
  const certicationAttachment = [
    {
      filename: qualification?.certification?.original_filename,
      url: qualification?.certification?.url,
    },
  ];
  const otherDocumentAttachment = [
    {
      filename: qualification?.otherDocument?.original_filename,
      url: qualification?.otherDocument?.url,
    },
  ];
  const photoAttachment = [
    {
      filename: uniformAndLegal?.photo?.original_filename,
      url: uniformAndLegal?.photo?.url,
    },
  ];

  await base("Application").create(
    {
      email: personalDetails.email,
      name: `${personalDetails.firstName} ${personalDetails.lastName}`,
      middleName: personalDetails.middleName,
      phoneNumber: personalDetails.phoneNumber,
      city: personalDetails.city,
      postCode: personalDetails.postCode,
      availability: personalDetails.availability,
      streetAddress: personalDetails.streetAddress,
      houseNameOrNumber: personalDetails.houseNameOrNumber,
      positionOfInterest: personalDetails.positionOfInterest,
      highestQualification: qualification.highestQualification,
      personalCertification: qualification.personalCertifications,
      yearsOfExperience: qualification.yearsOfExperience,
      spokenLanguages: qualification.spokenLanguages,
      ukWorkEligibility: qualification.ukWorkEligibility,
      skillsOrTraining: qualification.skillsOrTraining,
      cv: cvAttachment as Attachment[],
      certification: certicationAttachment as Attachment[],
      otherDocument: otherDocumentAttachment as Attachment[],
      photo: photoAttachment as Attachment[],
      uniformType: uniformAndLegal.uniformType,
      uniformSize: uniformAndLegal.uniformSize,
      physicallyFit: uniformAndLegal.fitness,
      dismissal: uniformAndLegal.dismissal,
      conviction: uniformAndLegal.conviction,
      termsAndPolicy: uniformAndLegal?.terms,
      agreeToAccurateInfo: uniformAndLegal?.agreeToAccurateInfo,
      history: JSON.stringify(experience.history),
      reference: JSON.stringify(experience.reference),
    },
    (err: Error) => {
      console.error("Error creating record:", err);
      return NextResponse.json(500).json();
    }
  );

  const mailOptions = {
    from: `"Fussy Recruitment" <${personalDetails.email}>`,
    to: "ibrahimsaibu2010@gmail.com",
    subject: `New Message from ${personalDetails.firstName} ${personalDetails.lastName} - Application Request`,
    text: `
        New application from ${personalDetails.firstName} ${personalDetails.lastName} with ${qualification.yearsOfExperience} years experience in ${qualification.skillsOrTraining}  able to work ${qualification.ukWorkEligibility} in UK.
        Visit Airtable for more information on applicant.
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
