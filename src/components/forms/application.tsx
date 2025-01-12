"use client";
import React, { useState } from "react";
import { Step } from "../stepper/step";
import InputField from "../ui/button/input/input";
import Dropdown from "../ui/button/dropdown/dropdown";
import Button from "../ui/button/btn";

const steps = [
  "Personal Details",
  "Qualification",
  "History",
  "Uniform & Legal",
];

export const ApplicationForm = () => {
  const [activeStep, setActiveStep] = useState(0);

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
            {/* <label>
              Name:
              <input
                type="text"
                value={formData.personalDetails.name}
                onChange={(e) =>
                  handleChange("personalDetails", "name", e.target.value)
                }
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                value={formData.personalDetails.email}
                onChange={(e) =>
                  handleChange("personalDetails", "email", e.target.value)
                }
              />
            </label> */}
          </div>
        );
      case 1:
        return (
          <div>
            {/* <label>
              Degree:
              <input
                type="text"
                value={formData.qualification.degree}
                onChange={(e) =>
                  handleChange("qualification", "degree", e.target.value)
                }
              />
            </label>
            <br />
            <label>
              University:
              <input
                type="text"
                value={formData.qualification.university}
                onChange={(e) =>
                  handleChange("qualification", "university", e.target.value)
                }
              />
            </label> */}
          </div>
        );
      case 2:
        return (
          <div>
            {/* <label>
              Experience:
              <input
                type="text"
                value={formData.history.experience}
                onChange={(e) =>
                  handleChange("history", "experience", e.target.value)
                }
              />
            </label>
            <br />
            <label>
              Company:
              <input
                type="text"
                value={formData.history.company}
                onChange={(e) =>
                  handleChange("history", "company", e.target.value)
                }
              />
            </label> */}
          </div>
        );
      case 3:
        return (
          <div>
            {/* <label>
              ID Number:
              <input
                type="text"
                value={formData.legal.idNumber}
                onChange={(e) =>
                  handleChange("legal", "idNumber", e.target.value)
                }
              />
            </label>
            <br />
            <label>
              Accept Terms:
              <input
                type="checkbox"
                checked={formData.legal.termsAccepted}
                onChange={(e) =>
                  handleChange("legal", "termsAccepted", e.target.checked)
                }
              />
            </label> */}
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
      <div className="flex justify-between mt-14">
        <Button
          text="Back"
          bgColor="bg-[#000000]"
          size="p-2  text-lg"
          textColor="text-[#FEFEFE]"
        />
        <Button
          text="Next"
          bgColor="bg-[#000000]"
          size="p-2  text-lg"
          textColor="text-[#FEFEFE]"
        />
      </div>
    </form>
  );
};
