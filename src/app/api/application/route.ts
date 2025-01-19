import { NextResponse } from "next/server";
import { transporter } from "../config/nodemailer";
import { base } from "../config/airtable";
import { Error } from "airtable";

export async function POST(request: Request) {
  const body = await request.json();
  const { personalDetails, qualification, experience, uniformAndLegal } = body;

  const getCreatedAT = (): string => {
    const date = new Date();
    return date.toISOString().split("T")[0];
  };

  const applicationRecord = await base("Application").create(
    {
      email: personalDetails.email,
      name: `${personalDetails.firstName} ${personalDetails.lastName}`,
      middleName: personalDetails.middleName,
      createdAt: getCreatedAT(),
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
      cv: qualification.cv,
      otherDocument: qualification.otherDocument,
      photo: uniformAndLegal.photo,
      uniformType: uniformAndLegal.uniformType,
      uniformSize: uniformAndLegal.uniformSize,
      physicallyFit: uniformAndLegal.fitness,
      dismissal: uniformAndLegal.dismissal,
      conviction: uniformAndLegal.conviction,
      termsAndPolicy: uniformAndLegal.terms,
      agreeToAccurateInfo: uniformAndLegal.agreeToAccurateInfo,
      history: JSON.stringify(experience.history),
      reference: JSON.stringify(experience.reference),
    },
    (err: Error) => {
      if (err) {
        console.error("Error creating record:", err);
        return NextResponse.json(500).json();
      }
    }
  );

  console.log({
    applicationRecord,
  });

  // const applicationRecordId = applicationRecord.id;

  // // Step 2: Create a record in the "Experience" table linked by Application ID
  // const experienceRecords = applicationData.experience.map(exp => ({
  //   fields: {
  //     email: [applicationRecordId], // Link to the Application table
  //     dateFrom: exp.dateFrom,
  //     dateTo: exp.dateTo,
  //     isCurrentWork: exp.isCurrentWork,
  //     nameOfEmployer: exp.nameOfEmployer,
  //     jobTitle: exp.jobTitle,
  //   },
  // }));

  // await base('Experience').create(experienceRecords);

  // // Step 3: Create a record in the "Qualification" table linked by Application ID
  // const qualificationRecords = applicationData.qualification.map(qual => ({
  //   fields: {
  //     email: [applicationRecordId], // Link to the Application table
  //     highestQualification: qual.highestQualification,
  //     personalCertifications: qual.personalCertifications,
  //     yearsOfExperience: qual.yearsOfExperience,
  //     spokenLanguages: qual.spokenLanguages,
  //     ukWorkEligibility: qual.ukWorkEligibility,
  //     skillsOrTraining: qual.skillsOrTraining,
  //   },
  // }));

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
