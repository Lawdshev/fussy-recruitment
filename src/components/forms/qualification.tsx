"use client";
import React from "react";
import InputField from "../ui/button/input/input";

import Dropdown from "../ui/button/dropdown/dropdown";
import FileUpload from "../ui/button/fileUpload/fileUpload";
import { useFormContext } from "react-hook-form";
import { ApplicationFormType } from "@/validation/applicationSchema";
import { ApplicationFormErrorProps } from "./application";

export const QualificationForm = ({ error }: ApplicationFormErrorProps) => {
  const { register, setValue, watch, clearErrors } =
    useFormContext<ApplicationFormType>();

  const cvValue = watch("qualification.cv");
  const certificationValue = watch("qualification.certification");
  const otherDocumentValue = watch("qualification.otherDocument");
  const ukWorkEligibilityValue = watch("qualification.ukWorkEligibility");

  return (
    <div className="flex flex-col space-y-4 w-full">
      <p className="font-bold text-lg text-primary-text">Qualification</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Highest Qualification"
          {...register("qualification.highestQualification")}
          required
          error={error?.qualification?.highestQualification?.message}
        />
        <InputField
          label="Professional Certifcations"
          {...register("qualification.personalCertifications")}
          required
          error={error?.qualification?.personalCertifications?.message}
        />

        <InputField
          label="Years of Experience"
          {...register("qualification.yearsOfExperience")}
          required
          error={error?.qualification?.yearsOfExperience?.message}
        />

        <InputField
          label="Languages Spoken"
          {...register("qualification.spokenLanguages")}
          required
          error={error?.qualification?.spokenLanguages?.message}
        />
        <Dropdown
          defaultValue={ukWorkEligibilityValue}
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
            if (value) {
              clearErrors("qualification.ukWorkEligibility");
            }
          }}
          required
          error={error?.qualification?.ukWorkEligibility?.message}
        />
        <InputField
          label="Specialised Skills or Training"
          {...register("qualification.skillsOrTraining")}
          required
          error={error?.qualification?.skillsOrTraining?.message}
        />
      </div>

      <FileUpload
        required
        defaultValue={cvValue}
        formError={error?.qualification?.cv?.url?.message}
        onFileSelect={(file) => {
          setValue("qualification.cv", file);
          if (file) {
            clearErrors("qualification.cv");
          }
        }}
        label=" Upload CV (The file must not exceed 5MB and must be in the accepted formats:
              PDF, DOC, or DOCX)"
      />

      <FileUpload
        required
        defaultValue={certificationValue}
        formError={error?.qualification?.certification?.url?.message}
        label="Upload Certification  (The file must not exceed 5MB and must be in the accepted formats: PDF, DOC, or DOCX)"
        onFileSelect={(file) => {
          setValue("qualification.certification", file);
          if (file) {
            clearErrors("qualification.certification");
          }
        }}
      />
      <FileUpload
        formError={error?.qualification?.otherDocument?.url?.message}
        defaultValue={otherDocumentValue}
        label="Other Document (The file must not exceed 5MB and must be in the accepted formats: PDF, DOC, or DOCX)"
        onFileSelect={(file) => {
          setValue("qualification.otherDocument", file);
          if (file) {
            clearErrors("qualification.otherDocument");
          }
        }}
      />
    </div>
  );
};
