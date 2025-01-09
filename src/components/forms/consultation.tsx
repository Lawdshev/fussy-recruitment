"use client";
import { useState } from "react";
import Button from "../ui/button/btn";
import Dropdown from "../ui/button/dropdown/dropdown";
import InputField from "../ui/button/input/input";
import TextAreaField from "../ui/button/textarea/textarea";
import { fetchAPI } from "@/utils/fetchApi";
import SuccessModal from "../modals/successModal";
const positionRequiredOptions = [
  { label: "Nurse", value: "nurse" },
  { label: "Care Assistant", value: "care assistant" },
  { label: "Support Worker(Adult)", value: "adult support worker" },
  { label: "Support Worker(Adult)", value: "children support worker" },
];

const urgencyOptions = [
  { label: "Low", value: "low" },
  { label: "Med", value: "med" },
  { label: "High", value: "high" },
];

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    industryType: "",
    name: "",
    email: "",
    phone: "",
    positionRequired: "",
    numberOfPositions: "",
    urgency: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetchAPI<{ message: string }>("api/consultation", {
        method: "POST",
        body: formData,
      });
      console.log(response.message);
      setIsModalOpen(true);
      setFormData({
        name: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
        industryType: "",
        positionRequired: "",
        numberOfPositions: "",
        urgency: "",
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 mb-6">
          <InputField
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <InputField
            label="Industry Type"
            name="industryType"
            value={formData.industryType}
            onChange={handleChange}
          />
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Dropdown
            label="Position Required"
            options={positionRequiredOptions}
            onChange={(value) =>
              handleDropdownChange("positionRequired", value)
            }
          />
          <InputField
            label="Number of Positions"
            name="numberOfPositions"
            value={formData.numberOfPositions}
            onChange={handleChange}
          />
          <div>
            <Dropdown
              label="Urgency"
              options={urgencyOptions}
              onChange={(value) => handleDropdownChange("urgency", value)}
            />
          </div>
        </div>

        <TextAreaField
          label="Message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
        />

        <div className="flex justify-end mt-6">
          <Button
            disabled={isLoading}
            text={isLoading ? "submitting" : "Sumbit Request"}
            bgColor="bg-[#000000]"
            size="p-2  text-lg"
            textColor="text-[#FEFEFE]"
          />
        </div>
      </form>
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
