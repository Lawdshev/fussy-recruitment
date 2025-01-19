import * as Yup from "yup";

export const applicationFormValidationSchema = Yup.object().shape({
  personalDetails: Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    middleName: Yup.string(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    city: Yup.string(),
    postCode: Yup.string(),
    streetAddress: Yup.string().required("Street address is required"),
    availability: Yup.string().required("Availability is required"),
    houseNameOrNumber: Yup.mixed().test(
      "is-valid",
      "House name or number must be a string or a number",
      (value) => typeof value === "string" || typeof value === "number"
    ),
    positionOfInterest: Yup.string().required(
      "Position of interest is required"
    ),
  }),
  qualification: Yup.object().shape({
    highestQualification: Yup.string().required(
      "Highest qualification is required"
    ),
    personalCertifications: Yup.string().required(
      "Personal certifications are required"
    ),
    yearsOfExperience: Yup.string().required("Years of experience is required"),
    spokenLanguages: Yup.mixed()
      .required("Spoken languages are required")
      .test(
        "is-valid",
        "Spoken languages must be a string or a number",
        (value) => typeof value === "string" || typeof value === "number"
      ),
    ukWorkEligibility: Yup.string().required("UK work eligibility is required"),
    skillsOrTraining: Yup.string().required("Skills or training is required"),
    cv: Yup.object()
      .nullable()
      .shape({
        url: Yup.string().url("Invalid CV URL").required("CV URL is required"),
        original_filename: Yup.string().required("CV public ID is required"),
      }),
    certification: Yup.object()
      .nullable()
      .shape({
        url: Yup.string()
          .url("Invalid certification URL")
          .required("Certification URL is required"),
        original_filename: Yup.string().required(
          "Certification public ID is required"
        ),
      }),
    otherDocument: Yup.object()
      .nullable()
      .shape({
        url: Yup.string()
          .url("Invalid document URL")
          .required("Document URL is required"),
        original_filename: Yup.string().required(
          "Document public ID is required"
        ),
      }),
  }),
  experience: Yup.object().shape({
    history: Yup.array()
      .of(
        Yup.object().shape({
          dateFrom: Yup.string().required("Date from is required"),
          dateTo: Yup.string().required("Date to is required"),
          isCurrentWork: Yup.boolean().required(
            "Current work status is required"
          ),
          nameOfEmployer: Yup.string().required("Name of employer is required"),
          jobTitle: Yup.string().required("Job title is required"),
        })
      )
      .min(1, "At least one work history is required")
      .required(),
    reference: Yup.array()
      .of(
        Yup.object().shape({
          firstName: Yup.string().required("Reference first name is required"),
          lastName: Yup.string().required("Reference last name is required"),
          jobTitle: Yup.string().required("Reference job title is required"),
          phoneNumber: Yup.string().required(
            "Reference phone number is required"
          ),
        })
      )
      .min(1, "At least one reference is required")
      .required(),
  }),
  uniformAndLegal: Yup.object().shape({
    photo: Yup.object()
      .nullable()
      .shape({
        url: Yup.string()
          .url("Invalid photo URL")
          .required("Photo URL is required"),
        original_filename: Yup.string().required("Photo public ID is required"),
      }),
    uniformType: Yup.string().required("Uniform type is required"),
    uniformSize: Yup.string().required("Uniform size is required"),
    fitness: Yup.string().required("Fitness information is required"),
    dismissal: Yup.string().required("Dismissal information is required"),
    terms: Yup.string().required("Terms agreement is required"),
    agreeToAccurateInfo: Yup.string().required(
      "Agreement to accurate info is required"
    ),
    conviction: Yup.string().required("Conviction information is required"),
  }),
});

export type ApplicationFormType = Yup.InferType<
  typeof applicationFormValidationSchema
>;
