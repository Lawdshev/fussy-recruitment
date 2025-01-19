"use client";
import React, { useState } from "react";
import { Step } from "../stepper/step";
import Button from "../ui/button/btn";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { PersonalDetailsForm } from "./personalDetails";
import { QualificationForm } from "./qualification";
import { HistoryForm } from "./history";
import { UniformAndLegalForm } from "./uniformAndLegal";
import { fetchAPI } from "@/utils/fetchApi";
import SuccessModal from "../modals/successModal";
import ErrorModal from "../modals/errorModal";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ApplicationFormType,
  applicationFormValidationSchema,
} from "@/validation/applicationSchema";

const steps = [
  "Personal Details",
  "Qualification",
  "History",
  "Uniform & Legal",
];

export const ApplicationForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const applicationFormData = useForm<ApplicationFormType>({
    resolver: yupResolver(applicationFormValidationSchema),
    defaultValues: {
      personalDetails: {
        positionOfInterest: "",
        availability: "",
        email: "",
      },
      qualification: {
        ukWorkEligibility: "",
        cv: null,
        otherDocument: null,
        certification: null,
      },
      experience: {
        history: [
          {
            dateFrom: "",
            isCurrentWork: false,
            dateTo: "",
            nameOfEmployer: "",
            jobTitle: "",
          },
        ],
        reference: [
          {
            firstName: "",
            lastName: "",
            jobTitle: "",
            phoneNumber: "",
          },
        ],
      },
      uniformAndLegal: {
        photo: null,
        uniformType: "",
        uniformSize: "",
        fitness: "",
        dismissal: "",
        terms: "",
        agreeToAccurateInfo: "",
        conviction: "",
      },
    },
    mode: "all",
  });
  const {
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = applicationFormData;

  const isStepValid = () => {
    const currentStepFields = steps[activeStep];
    const currentStepErrors =
      errors[currentStepFields as keyof ApplicationFormType];
    return !currentStepErrors;
  };

  const onSubmit: SubmitHandler<ApplicationFormType> = async (data) => {
    try {
      const response = await fetchAPI<{ message: string }>("api/application", {
        method: "POST",
        body: data,
      });
      if (response.message) {
        setIsModalOpen(true);
      }
      applicationFormData.reset();
    } catch (error) {
      setOpenError(true);
      console.log(`error:${error}`);
    }
  };

  const renderFields = () => {
    switch (activeStep) {
      case 0:
        return <PersonalDetailsForm />;
      case 1:
        return <QualificationForm />;
      case 2:
        return <HistoryForm />;
      case 3:
        return <UniformAndLegalForm />;
      default:
        return null;
    }
  };
  return (
    <FormProvider {...applicationFormData}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  items-center flex-wrap md:flex-nowrap gap-4 md:gap-0  md:space-x-4 xl:space-x-10 w-full lg:mt-20 mb-[4.5em] ">
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
        <div
          className={`flex  items-center ${
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
              icon={<FaArrowLeftLong />}
              flexPosition="flex-row-reverse"
            />
          )}
          {activeStep === steps.length - 1 ? (
            <Button
              text={isSubmitting ? "Submitting" : "Submit"}
              bgColor={!isValid ? "bg-[#EBEBEB]" : "bg-black"}
              type="submit"
              textColor={!isValid ? "text-[#C0C0C0]" : "text-white"}
              disabled={!isValid}
              size="py-[6px] px-4 text-base"
            />
          ) : (
            <div className="justify-self-end">
              <Button
                onClick={() => {
                  if (isStepValid()) {
                    setActiveStep(activeStep + 1);
                  }
                }}
                text="Next"
                bgColor={!isStepValid() ? "bg-[#EBEBEB]" : "bg-black"}
                type="button"
                textColor={!isStepValid() ? "text-[#C0C0C0]" : "text-white"}
                disabled={!isStepValid()}
                icon={<FaArrowRightLong />}
                size="py-[6px] px-4 outline outline-2 outline-black  text-base"
              />
            </div>
          )}
        </div>
      </form>
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
      <ErrorModal isOpen={openError} onClose={() => setOpenError(false)} />
    </FormProvider>
  );
};
