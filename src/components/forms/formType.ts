export type ApplicationFormType = {
  personalDetails: {
    firstName: string;
    lastName: string;
    middleName?: string;
    email: string;
    phoneNumber: string;
    city: string;
    postCode?: string;
    streetAddress: string;
    availability: string;
    houseNameOrNumber: string | number;
    positionOfInterest: string;
  };
  qualification: {
    highestQualification: string;
    personalCertifications: string;
    yearsOfExperience: string;
    spokenLanguages: string | number;
    ukWorkEligibility: string;
    skillsOrTraining: string;
    cv: File | null;
    certification: File | null;
    otherDocument: File | null;
  };
  experience: {
    history: {
      dateFrom: string;
      dateTo: string;
      isCurrentWork: boolean;
      nameOfEmployer: string;
      jobTitle: string;
    }[];
    reference: {
      firstName: string;
      lastName: string;
      jobTitle: string;
      phoneNumber: string;
    }[];
  };
  uniformAndLegal: {
    photo: File | null;
    uniformType: string;
    uniformSize: string;
    fitness: string;
    dismissal: string;
    terms: string;
    agreeToAccurateInfo: string;
    conviction: string;
  };
};
