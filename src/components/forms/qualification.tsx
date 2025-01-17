"use client";
import React from "react";
import InputField from "../ui/button/input/input";
import { ApplicationFormType } from "./formType";
import Dropdown from "../ui/button/dropdown/dropdown";
import FileUpload from "../ui/button/fileUpload/fileUpload";
import { useFormContext } from "react-hook-form";

export const QualificationForm = () => {
  const { register, setValue, getValues, watch } =
    useFormContext<ApplicationFormType>();

  const formValues = getValues();

  const cv = watch("qualification.cv");
  console.log({
    cv,
  });

  return (
    <div className="flex flex-col space-y-4 w-full">
      <p className="font-bold text-lg text-primary-text">Qualification</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Highest Qualification"
          {...register("qualification.highestQualification")}
        />
        <InputField
          label="Professional Certifcations"
          {...register("qualification.personalCertifications")}
        />

        <InputField
          label="Years of Experience"
          {...register("qualification.yearsOfExperience")}
        />

        <InputField
          label="Languages Spoken"
          {...register("qualification.spokenLanguages")}
        />
        <Dropdown
          defaultValue={formValues.qualification.ukWorkEligibility}
          label="Eligibility to Work in the UK"
          options={[
            {
              label: "Full Time",
              value: "Full Time",
            },
            {
              label: "Part Time",
              value: "Part Time",
            },
            {
              label: "Remote",
              value: "Remote",
            },
          ]}
          onChange={(value) => {
            setValue("qualification.ukWorkEligibility", value);
          }}
        />
        <InputField
          label="Specialised Skills or Training"
          {...register("qualification.skillsOrTraining")}
        />
      </div>

      <FileUpload
        formFile={cv}
        onFileSelect={(file) => {
          setValue("qualification.cv", file);
          console.log(file);
        }}
        label=" Upload CV (The file must not exceed 5MB and must be in the accepted formats:
              PDF, DOC, or DOCX)"
      />

      <FileUpload
        label="Upload Certification  (The file must not exceed 5MB and must be in the accepted formats: PDF, DOC, or DOCX)"
        formFile={formValues.qualification.certification}
        onFileSelect={(file) => {
          setValue("qualification.certification", file);
        }}
      />
      <FileUpload
        label="Other Document (The file must not exceed 5MB and must be in the accepted formats: PDF, DOC, or DOCX)"
        formFile={formValues.qualification.otherDocument}
        onFileSelect={(file) => {
          setValue("qualification.otherDocument", file);
        }}
      />
    </div>
  );
};
