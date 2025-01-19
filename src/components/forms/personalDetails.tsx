"use client";
import { BiInfoCircle } from "react-icons/bi";
import InputField from "../ui/button/input/input";
import Dropdown from "../ui/button/dropdown/dropdown";
import { useFormContext } from "react-hook-form";
import { ApplicationFormType } from "./formType";

export const PersonalDetailsForm = () => {
  const { register, setValue, getValues } =
    useFormContext<ApplicationFormType>();
  const formValues = getValues();
  return (
    <div className="flex flex-col space-y-4">
      <p className="font-bold text-lg">Personal Details</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="First Name"
          {...register("personalDetails.firstName")}
        />
        <InputField
          label="Last Name"
          {...register("personalDetails.lastName")}
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
        <InputField label="Email" {...register("personalDetails.email")} />
        <InputField
          label="Phone number"
          {...register("personalDetails.phoneNumber")}
        />
        <InputField
          label="House Name or Number"
          {...register("personalDetails.houseNameOrNumber")}
        />
        <InputField
          label="Street Address"
          {...register("personalDetails.streetAddress")}
        />
        <InputField label="City" {...register("personalDetails.city")} />
        <InputField
          label="PostCode"
          {...register("personalDetails.postCode")}
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
          onChange={(value) => {
            setValue("personalDetails.positionOfInterest", value);
          }}
          defaultValue={formValues.personalDetails.positionOfInterest}
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
          }}
          defaultValue={formValues.personalDetails.availability}
        />
      </div>
    </div>
  );
};
