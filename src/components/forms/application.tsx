"use client";
import React, { useState } from "react";
import { Step } from "../stepper/step";
import InputField from "../ui/button/input/input";
import Dropdown from "../ui/button/dropdown/dropdown";
import Button from "../ui/button/btn";
import FileUpload from "../ui/button/fileUpload/fileUpload";
import Image from "next/image";
import ImageUploadIcon from "@/assets/svgs/imageUploadIcon.svg";
import { Checkbox } from "../ui/button/checkbox/checkbox";
import { LegalLabel } from "./legalLabel";

const steps = [
  "Personal Details",
  "Qualification",
  "History",
  "Uniform & Legal",
];

export const ApplicationForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const renderFields = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="flex flex-col space-y-4">
            <p className="font-bold text-lg">Personal Details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="First Name"
                name="firstName"
                // value={formData.companyName}
                // onChange={handleChange}
              />
              <InputField
                label="Last Name"
                name="lastName"
                // value={formData.industryType}
                // onChange={handleChange}
              />
              <div>
                <InputField
                  label="Middle Name"
                  name="middleName"
                  // value={formData.companyName}
                  // onChange={handleChange}
                />
                <span className="flex space-x-2">
                  <p>1</p> <p>Leave blank if you have no middle name</p>{" "}
                </span>
              </div>
              <InputField
                label="Email"
                name="email"
                // value={formData.industryType}
                // onChange={handleChange}
              />
              <InputField
                label="Phone number"
                name="phoneNumber"
                // value={formData.industryType}
                // onChange={handleChange}
              />
              <InputField
                label="House Name or Number"
                name="email"
                // value={formData.industryType}
                // onChange={handleChange}
              />
              <InputField
                label="Street Address"
                name="email"
                // value={formData.industryType}
                // onChange={handleChange}
              />
              <InputField
                label="City"
                name="city"
                // value={formData.industryType}
                // onChange={handleChange}
              />
              <InputField
                label="PostCode"
                name="email"
                // value={formData.industryType}
                // onChange={handleChange}
              />
              <Dropdown
                label="Position of Interest"
                options={[
                  {
                    label: "Frontend Developer",
                    value: "Frontend Developer",
                  },
                  {
                    label: "Backend Developer",
                    value: "Backend Developer",
                  },
                  {
                    label: "Fullstack Developer",
                    value: "Fullstack Developer",
                  },
                ]}
                onChange={(value) => {}}
              />
              <Dropdown
                label="Availability"
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
                onChange={(value) => {}}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col space-y-4 w-full">
            <p className="font-bold text-lg">Qualification</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Highest Qualification"
                name="firstName"
                // value={formData.companyName}
                // onChange={handleChange}
              />
              <InputField
                label="Professional Certifcations"
                name="lastName"
                // value={formData.industryType}
                // onChange={handleChange}
              />

              <InputField
                label="Years of Experience"
                name="middleName"
                // value={formData.companyName}
                // onChange={handleChange}
              />

              <InputField
                label="Languages Spoken"
                name="email"
                // value={formData.industryType}
                // onChange={handleChange}
              />
              <Dropdown
                label="Availability"
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
                onChange={(value) => {}}
              />
              <InputField
                label="Specialised Skills or Training"
                name="email"
                // value={formData.industryType}
                // onChange={handleChange}
              />
            </div>
            <FileUpload
              label=" Upload CV (The file must not exceed 5MB and must be in the accepted formats:
          PDF, DOC, or DOCX)"
            />
            <FileUpload label="Upload Certification  (The file must not exceed 5MB and must be in the accepted formats: PDF, DOC, or DOCX)" />
            <FileUpload label="Other Document (The file must not exceed 5MB and must be in the accepted formats: PDF, DOC, or DOCX)" />
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col space-y-4 w-full">
            <p className="font-bold text-lg">History</p>
            <div className="flex justify-end mb-12">
              <button
                className="rounded-xl px-3 py-1.5 text-white bg-black text-lg font-medium"
                type="button"
              >
                Add more
              </button>
            </div>
            <div className="flex flex-col space-y-14 w-full items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div>
                  <InputField
                    label="Date From"
                    name="firstName"
                    required
                    // value={formData.companyName}
                    // onChange={handleChange}
                  />
                  <span className="flex space-x-2">
                    <p>1</p> <p>Leave blank if you have no middle name</p>{" "}
                  </span>
                </div>
                <InputField
                  label="Date To"
                  name="lastName"
                  // value={formData.industryType}
                  // onChange={handleChange}
                />

                <InputField
                  label="Name of Employer"
                  name="middleName"
                  required
                  // value={formData.companyName}
                  // onChange={handleChange}
                />

                <InputField
                  label="Job Title"
                  name="email"
                  required
                  // value={formData.industryType}
                  // onChange={handleChange}
                />
              </div>
              <div className="w-4/5 border-t border-[#C0C0C0]"></div>
              <div className="flex flex-col space-y-4 w-full">
                <p className="font-bold text-lg">Reference</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <InputField
                      label="First Name"
                      name="firstName"
                      required
                      // value={formData.companyName}
                      // onChange={handleChange}
                    />
                    <span className="flex space-x-2">
                      <p>1</p> <p>Leave blank if you have no middle name</p>{" "}
                    </span>
                  </div>
                  <InputField
                    label="Last Name"
                    name="lastName"
                    // value={formData.industryType}
                    // onChange={handleChange}
                  />

                  <InputField
                    label="Job Title"
                    name="middleName"
                    required
                    // value={formData.companyName}
                    // onChange={handleChange}
                  />

                  <InputField
                    label="Phone Number"
                    name="phoneNumber"
                    required
                    // value={formData.industryType}
                    // onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col space-y-16 w-full">
            <div className="border border-[#A7A7A9] p-8 rounded-lg flex flex-col space-y-10">
              <div className="flex flex-col space-t-3">
                <p className="font-bold text-lg text-primary-text">Photo</p>
                <p className=" text-sm text-primary-text">
                  Upload Your Passport for Identification (Ensure the file size
                  does not exceed 5MB)
                </p>
              </div>
              <div className="flex space-x-24 h-auto w-full">
                <div className="flex flex-col space-y-4 ">
                  <p className="font-bold text-lg text-primary-text ">Tips</p>
                  <ul className="list-disc pl-5 text-sm text-[#242424] flex flex-col space-y-1">
                    <li>
                      Ensure the photograph is recent (taken within the last 6
                      months)
                    </li>
                    <li>Use a plain, light-coloured background</li>
                    <li>
                      Your face should be clearly visible with no shadows or
                      reflection
                    </li>
                    <li>
                      Avoid wearing hats, sunglasses, or any obstructing your
                      face
                    </li>
                    <li>The file should be in JPG, PNG, PDF format</li>
                    <li>Ensure the image is high-quality and not blurry</li>
                  </ul>
                </div>{" "}
                <div
                  className={` bg-[#F5F5F5] max-w-[300px] rounded-lg h-96 flex flex-col items-center justify-center text-center px-14 flex-1
       `}
                >
                  {!file ? (
                    <>
                      <Image src={ImageUploadIcon} alt={"upload icon"} />

                      <p className="mt-2 text-xs text-black">
                        <span className="font-medium  cursor-pointer underline-offset-1 underline">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <input
                        type="file"
                        className="hidden"
                        onChange={() => {}}
                        accept=".pdf,.doc,.docx"
                      />
                    </>
                  ) : (
                    <div className="text-sm text-gray-700">
                      <p>{file.name}</p>
                      <p className="text-green-500">
                        File uploaded successfully!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="border border-[#A7A7A9] p-8 rounded-lg flex flex-col space-y-10">
              <div className="flex flex-col space-y-3">
                <p className="font-bold text-lg text-primary-text">Uniform</p>
                <p className=" text-sm text-primary-text">
                  Upload Your Measurements for Uniform Fitting
                </p>
              </div>
              <div className="flex space-x-16">
                <div className="flex flex-col space-y-6 ">
                  <p className="text-primary-text font-medium">Uniform Type</p>
                  <div className="flex space-x-4">
                    <Checkbox label="Male" />
                    <Checkbox label="Female" />
                  </div>
                </div>
                <div className="flex flex-col space-y-6">
                  <p className="text-primary-text font-medium">Uniform Size</p>
                  <div className="flex space-x-4">
                    <Checkbox label="Small" />
                    <Checkbox label="Medium" />
                    <Checkbox label="Large" />
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-[#A7A7A9] p-8 rounded-lg flex flex-col space-y-10">
              <p className="font-bold text-lg text-primary-text">
                Lega Declaration
              </p>
              <div className="flex flex-col space-y-8">
                <LegalLabel
                  label={
                    "Do you believe you are physically and mentally fit to perform the daily responsibilities of the role you are applying for?"
                  }
                >
                  <Checkbox label="Yes" />
                  <Checkbox label="No" />
                </LegalLabel>
                <LegalLabel
                  label={
                    "Have you ever been dismissed by an employer, received any formal warnings, or are you currently under investigation?"
                  }
                >
                  <Checkbox label="Yes" />
                  <Checkbox label="No" />
                </LegalLabel>
                <LegalLabel
                  label={
                    "Do you have any convictions, cautions, reprimands, or final warnings not covered by the protections of the Rehabilitation of Offenders Act 1974 (Exceptions) Order 1975, as amended in 2013?"
                  }
                >
                  <Checkbox label="Yes" />
                  <Checkbox label="No" />
                </LegalLabel>
                <LegalLabel
                  label={
                    "I declare that the information I have provided in this application is true, complete, and accurate to the best of my knowledge"
                  }
                >
                  <Checkbox label="Yes" />
                  <Checkbox label="No" />
                </LegalLabel>
                <LegalLabel
                  label={
                    "I understand and agree that my personal information will be processed in line with the organisation's privacy policy and used solely for recruitment purposes"
                  }
                >
                  <Checkbox label="Yes" />
                  <Checkbox label="No" />
                </LegalLabel>
                <p className="text-sm text-primary-text leading-6">
                  Please ensure you understand these declarations before
                  submitting your application. If you have any questions,
                  contact us for clarification
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <form>
      <div className="flex  items-center  space-x-10 w-full lg:mt-20 mb-[4.5em] ">
        {steps.map((step, index) => (
          <Step
            key={index}
            isActive={index === activeStep}
            isCompleted={activeStep > index}
            isLastChild={index === steps.length - 1}
            label={step}
            stepNumber={index + 1}
          />
        ))}
      </div>

      <div>{renderFields()}</div>

      {/* <div style={{ marginTop: "20px" }}>
        <button disabled={activeStep === 0}>Back</button>
        {activeStep === steps.length - 1 ? (
          <button>Submit</button>
        ) : (
          <button>Next</button>
        )}
      </div> */}
      <div
        className={`flex ${
          activeStep > 0 ? "justify-between" : "justify-end"
        } mt-14`}
      >
        {activeStep > 0 && (
          <Button
            onClick={() => setActiveStep(activeStep - 1)}
            type="button"
            text="Back"
            bgColor="bg-white"
            size="py-[6px] px-4  text-base"
            textColor="text-black"
            border={"border-2"}
            icon={<span>&#8592;</span>}
            flexPosition="flex-row-reverse"
          />
        )}
        {activeStep === steps.length - 1 ? (
          <Button
            onClick={() => {}}
            text="Submit"
            bgColor="bg-[#EBEBEB]"
            // "bg-[#000000]"
            type="submit"
            textColor="text-[#C0C0C0]"
            // "text-[#FEFEFE]"
            disabled
            size="py-[6px] px-4  text-base "
          />
        ) : (
          <div className="justify-self-end">
            <Button
              onClick={() => setActiveStep(activeStep + 1)}
              text="Next"
              bgColor="bg-[#000000]"
              type={"button"}
              textColor="text-[#FEFEFE]"
              icon={<span>&#8594;</span>}
              size="py-[6px] px-4  text-base"
            />
          </div>
        )}
      </div>
    </form>
  );
};
