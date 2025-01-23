"use client";
import { BiInfoCircle } from "react-icons/bi";
import InputField from "../ui/button/input/input";
import Dropdown from "../ui/button/dropdown/dropdown";
import { useFormContext } from "react-hook-form";
import { ApplicationFormType } from "@/validation/applicationSchema";
import { ApplicationFormErrorProps } from "./application";

export const PersonalDetailsForm = ({ error }: ApplicationFormErrorProps) => {
  const { register, setValue, getValues, clearErrors } =
    useFormContext<ApplicationFormType>();
  const formValues = getValues();

  return (
    <div className="flex flex-col space-y-4">
      <p className="font-bold text-lg text-primary-text">Personal Details</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="First Name"
          required
          {...register("personalDetails.firstName")}
          error={error?.personalDetails?.firstName?.message}
        />
        <InputField
          label="Last Name"
          required
          {...register("personalDetails.lastName")}
          error={error?.personalDetails?.lastName?.message}
        />
        <div>
          <InputField
            label="Middle Name"
            {...register("personalDetails.middleName")}
          />
          <span className="flex space-x-2 items-center text-xs text-[#3A3A3F]">
            <span>
              <BiInfoCircle />
            </span>{" "}
            <p>Leave blank if you have no middle name</p>{" "}
          </span>
        </div>
        <InputField
          label="Email"
          {...register("personalDetails.email")}
          required
          error={error?.personalDetails?.email?.message}
        />
        <InputField
          label="Phone number"
          {...register("personalDetails.phoneNumber")}
          required
          error={error?.personalDetails?.phoneNumber?.message}
        />
        <InputField
          label="House Name or Number"
          {...register("personalDetails.houseNameOrNumber")}
        />
        <InputField
          label="Street Address"
          {...register("personalDetails.streetAddress")}
          required
          error={error?.personalDetails?.streetAddress?.message}
        />
        <InputField label="City" {...register("personalDetails.city")} />
        <InputField
          label="PostCode"
          {...register("personalDetails.postCode")}
        />
        <Dropdown
          required
          label="Position of Interest"
          options={[
            {
              label: "Nurse",
              value: "nurse",
            },
            {
              label: "Care Assistant",
              value: "care assistant",
            },
            {
              label: "Support Worker(Adults)",
              value: "support worker(adults)",
            },
            {
              label: "Support Worker(Children)",
              value: "support worker(children)",
            },
          ]}
          onChange={(value) => {
            setValue("personalDetails.positionOfInterest", value);
            if (value) {
              clearErrors("personalDetails.positionOfInterest");
            }
          }}
          defaultValue={formValues.personalDetails.positionOfInterest}
          error={error?.personalDetails?.positionOfInterest?.message}
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
          onChange={(value) => {
            setValue("personalDetails.availability", value);
            if (value) {
              clearErrors("personalDetails.availability");
            }
          }}
          defaultValue={formValues.personalDetails.availability}
          required
          error={error?.personalDetails?.availability?.message}
        />
      </div>
    </div>
  );
};
