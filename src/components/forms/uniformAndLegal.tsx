"use client";
import Image from "next/image";
import { Checkbox } from "../ui/button/checkbox/checkbox";
import { LegalLabel } from "./legalLabel";
import ImageUploadIcon from "@/assets/svgs/imageUploadIcon.svg";
import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { BiLoaderCircle, BiX } from "react-icons/bi";
import { ApplicationFormType } from "@/validation/applicationSchema";

export const UniformAndLegalForm = () => {
  const { setValue, watch } = useFormContext<ApplicationFormType>();
  const photo = watch("uniformAndLegal.photo");
  const [error, setError] = useState<string>("");

  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      validateFile(uploadedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files?.[0];
    if (uploadedFile) {
      validateFile(uploadedFile);
    }
  };

  const validateFile = async (uploadedFile: File) => {
    const allowedTypes = [, "image/png", "image/jpeg"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(uploadedFile.type)) {
      setError("Only PDF, PNG, and JPG formats are allowed.");
      // setFile(null);
      return;
    }

    if (uploadedFile.size > maxSize) {
      setError("File size must not exceed 5MB.");
      // setFile(null);
      return;
    }
    const formData = new FormData();

    formData.append("file", uploadedFile);
    formData.append("upload_preset", "fussy recruitment");
    formData.append("cloud_name", "magnaibra");
    setIsUploading(true);

    const res = await fetch(
      " https://api.cloudinary.com/v1_1/magnaibra/auto/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const cloudImageData = await res.json();
    setError("");
    setValue("uniformAndLegal.photo", cloudImageData);
    setIsUploading(false);
    // setFile(cloudImageData);

    // setFile(uploadedFile);
  };

  const uniformTypeForm = watch("uniformAndLegal.uniformType");
  const uniformSizeForm = watch("uniformAndLegal.uniformSize");
  const fitnessForm = watch("uniformAndLegal.fitness");
  const dismissalForm = watch("uniformAndLegal.dismissal");
  const convictionForm = watch("uniformAndLegal.conviction");
  const agreeToAccurateInfoForm = watch("uniformAndLegal.agreeToAccurateInfo");
  const termsForm = watch("uniformAndLegal.terms");

  const handleUniformTypeChange = (value: string) => {
    setValue(
      "uniformAndLegal.uniformType",
      uniformTypeForm === value ? "" : value
    );
  };
  const handleUniformSizeChange = (value: string) => {
    setValue(
      "uniformAndLegal.uniformSize",
      uniformSizeForm === value ? "" : value
    );
  };
  const handleFitnessChange = (value: string) => {
    setValue("uniformAndLegal.fitness", fitnessForm === value ? "" : value);
  };
  const handleDismissalChange = (value: string) => {
    setValue("uniformAndLegal.dismissal", dismissalForm === value ? "" : value);
  };
  const handleConvictionChange = (value: string) => {
    setValue(
      "uniformAndLegal.conviction",
      convictionForm === value ? "" : value
    );
  };
  const handleAgreeToAccurateInfoChange = (value: string) => {
    setValue(
      "uniformAndLegal.agreeToAccurateInfo",
      agreeToAccurateInfoForm === value ? "" : value
    );
  };
  const handleTermsChange = (value: string) => {
    setValue("uniformAndLegal.terms", termsForm === value ? "" : value);
  };
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col space-y-16 w-full">
      <div className="border border-[#A7A7A9] p-8 rounded-lg flex flex-col space-y-10">
        <div className="flex flex-col space-t-3">
          <p className="font-bold text-lg text-primary-text">Photo</p>
          <p className=" text-sm text-primary-text">
            Upload Your Passport for Identification (Ensure the file size does
            not exceed 5MB)
          </p>
        </div>
        <div className="flex space-x-24 h-auto w-full">
          <div className="flex flex-col space-y-4 ">
            <p className="font-bold text-lg text-primary-text ">Tips</p>
            <ul className="list-disc pl-5 text-sm text-[#242424] flex flex-col space-y-1">
              <li>
                Ensure the photograph is recent (taken within the last 6 months)
              </li>
              <li>Use a plain, light-coloured background</li>
              <li>
                Your face should be clearly visible with no shadows or
                reflection
              </li>
              <li>
                Avoid wearing hats, sunglasses, or any obstructing your face
              </li>
              <li>The file should be in JPG, PNG, PDF format</li>
              <li>Ensure the image is high-quality and not blurry</li>
            </ul>
          </div>
          <div
            className={`relative  bg-[#F5F5F5] max-w-[300px] rounded-lg h-96 flex flex-col items-center justify-center text-center px-14 flex-1
       `}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            {photo && (
              <BiX
                onClick={() => setValue("uniformAndLegal.photo", null)}
                size={24}
                className="absolute -top-0 -right-0 z-50 cursor-pointer"
              />
            )}
            {!photo ? (
              <>
                {isUploading ? (
                  <p>
                    <BiLoaderCircle />
                  </p>
                ) : (
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
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/png, image/jpeg"
                    />
                  </>
                )}
              </>
            ) : (
              <div className=" flex flex-col space-y-2 items-center">
                <div className="text-sm text-gray-700">
                  <Image
                    src={photo.url}
                    alt="Uploaded preview"
                    fill
                    className="mb-4 rounded w-full h-full"
                  />

                  {/* <p>{file.name}</p>
                  <p className="text-green-500">File uploaded successfully!</p> */}
                </div>
              </div>
            )}
          </div>
        </div>
        {error && (
          <p className="mt-2 text-sm text-center text-red-500">{error}</p>
        )}
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
              <Checkbox
                label="Male"
                value={"male"}
                checked={uniformTypeForm === "male"}
                onChange={() => handleUniformTypeChange("male")}
                // {...register("uniformAndLegal.uniformType")}
              />
              <Checkbox
                label="Female"
                value="female"
                checked={uniformTypeForm === "female"}
                onChange={() => handleUniformTypeChange("female")}
                // {...register("uniformAndLegal.uniformType")}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <p className="text-primary-text font-medium">Uniform Size</p>
            <div className="flex space-x-4">
              <Checkbox
                label="Small"
                checked={uniformSizeForm === "small"}
                onChange={() => handleUniformSizeChange("small")}
                value="small"
              />
              <Checkbox
                label="Medium"
                onChange={() => handleUniformSizeChange("medium")}
                checked={uniformSizeForm === "medium"}
                value="medium"
              />
              <Checkbox
                label="Large"
                onChange={() => handleUniformSizeChange("large")}
                checked={uniformSizeForm === "large"}
                value="large"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#A7A7A9] p-8 rounded-lg flex flex-col space-y-10">
        <p className="font-bold text-lg text-primary-text">Lega Declaration</p>
        <div className="flex flex-col space-y-8">
          <LegalLabel
            label={
              "Do you believe you are physically and mentally fit to perform the daily responsibilities of the role you are applying for?"
            }
          >
            <Checkbox
              label="Yes"
              value={"yes"}
              checked={fitnessForm === "yes"}
              onChange={() => handleFitnessChange("yes")}
            />
            <Checkbox
              label="No"
              value={"no"}
              checked={fitnessForm === "no"}
              onChange={() => handleFitnessChange("no")}
            />
          </LegalLabel>
          <LegalLabel
            label={
              "Have you ever been dismissed by an employer, received any formal warnings, or are you currently under investigation?"
            }
          >
            <Checkbox
              label="Yes"
              value={"yes"}
              checked={dismissalForm === "yes"}
              onChange={() => handleDismissalChange("yes")}
            />
            <Checkbox
              label="No"
              value={"no"}
              checked={dismissalForm === "no"}
              onChange={() => handleDismissalChange("no")}
            />
          </LegalLabel>
          <LegalLabel
            label={
              "Do you have any convictions, cautions, reprimands, or final warnings not covered by the protections of the Rehabilitation of Offenders Act 1974 (Exceptions) Order 1975, as amended in 2013?"
            }
          >
            <Checkbox
              label="Yes"
              value={"yes"}
              checked={convictionForm == "yes"}
              onChange={() => handleConvictionChange("yes")}
            />
            <Checkbox
              label="No"
              value={"no"}
              checked={convictionForm == "no"}
              onChange={() => handleConvictionChange("no")}
            />
          </LegalLabel>
          <LegalLabel
            label={
              "I declare that the information I have provided in this application is true, complete, and accurate to the best of my knowledge"
            }
          >
            <Checkbox
              label="Yes"
              value={"yes"}
              checked={agreeToAccurateInfoForm == "yes"}
              onChange={() => handleAgreeToAccurateInfoChange("yes")}
            />
            <Checkbox
              label="No"
              value={"no"}
              checked={agreeToAccurateInfoForm == "no"}
              onChange={() => handleAgreeToAccurateInfoChange("no")}
            />
          </LegalLabel>
          <LegalLabel
            label={
              "I understand and agree that my personal information will be processed in line with the organisation's privacy policy and used solely for recruitment purposes"
            }
          >
            <Checkbox
              label="Yes"
              value={"yes"}
              checked={termsForm === "yes"}
              onChange={() => handleTermsChange("yes")}
            />
            <Checkbox
              label="No"
              value={"no"}
              checked={termsForm === "no"}
              onChange={() => handleTermsChange("no")}
            />
          </LegalLabel>
          <p className="text-sm text-primary-text leading-6">
            Please ensure you understand these declarations before submitting
            your application. If you have any questions, contact us for
            clarification
          </p>
        </div>
      </div>
    </div>
  );
};
