"use client";
import React, { useState } from "react";
import { Step } from "../stepper/step";
import Button from "../ui/button/btn";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ApplicationFormType } from "./formType";
import { PersonalDetailsForm } from "./personalDetails";
import { QualificationForm } from "./qualification";
import { HistoryForm } from "./history";
import { UniformAndLegalForm } from "./uniformAndLegal";
import { fetchAPI } from "@/utils/fetchApi";
import SuccessModal from "../modals/successModal";
import ErrorModal from "../modals/errorModal";

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
    defaultValues: {
      personalDetails: {
        positionOfInterest: "",
        availablity: "",
      },
      qualification: {
        ukWorkEligibility: "",
        cv: null,
        otherDocument: null,
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
  });

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
      <form onSubmit={applicationFormData.handleSubmit(onSubmit)}>
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
              text="Submit"
              bgColor="bg-[#EBEBEB]"
              type="submit"
              textColor="text-[#C0C0C0]"
              // disabled
              size="py-[6px] px-4  text-base "
            />
          ) : (
            <div className="justify-self-end">
              <Button
                onClick={() => {
                  setActiveStep(activeStep + 1);
                }}
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
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
      <ErrorModal isOpen={openError} onClose={() => setOpenError(false)} />
    </FormProvider>
  );
};
