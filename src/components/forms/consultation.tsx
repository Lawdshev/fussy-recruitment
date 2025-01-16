"use client";
import { useState } from "react";
import Button from "../ui/button/btn";
import Dropdown from "../ui/button/dropdown/dropdown";
import InputField from "../ui/button/input/input";
import TextAreaField from "../ui/button/textarea/textarea";
import { fetchAPI } from "@/utils/fetchApi";
import SuccessModal from "../modals/successModal";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorModal from "../modals/errorModal";

const schema = yup.object().shape({
  companyName: yup.string().required("Company Name is required"),
  industryType: yup.string().required("Industry Type is required"),
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone Number is required"),
  positionRequired: yup.string().required("Position Required is required"),
  numberOfPositions: yup.number().required("Number of Positions is required"),
  urgency: yup.string().required("Urgency is required"),
  message: yup.string().required("Message is required"),
});

type FormData = yup.InferType<typeof schema>;

const positionRequiredOptions = [
  { label: "Nurse", value: "Nurse" },
  { label: "Care Assistant", value: "Care Assistant" },
  { label: "Support Worker(Adult)", value: "Support Worker(Adult)" },
  { label: "Support Worker(Children)", value: "Support Worker(Children)" },
];

const urgencyOptions = [
  { label: "Low", value: "Low" },
  { label: "Med", value: "Med" },
  { label: "High", value: "High" },
];

export const ConsultationForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      numberOfPositions: 1,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetchAPI<{ message: string }>("api/consultation", {
        method: "POST",
        body: data,
      });
      if (response.message) {
        setIsModalOpen(true);
      }
      reset();
    } catch (error) {
      setOpenError(true);
      console.log(`error:${error}`);
    }
  };

  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 mb-6">
          <InputField
            label="Company Name"
            {...register("companyName")}
            error={errors.companyName?.message}
          />
          <InputField
            label="Industry Type"
            {...register("industryType")}
            error={errors.industryType?.message}
          />
          <InputField
            label="Name"
            {...register("name")}
            error={errors.name?.message}
          />
          <InputField
            label="Email"
            {...register("email")}
            error={errors.email?.message}
          />
          <InputField
            label="Phone"
            {...register("phone")}
            error={errors.phone?.message}
          />
          <Dropdown
            label="Position Required"
            options={positionRequiredOptions}
            onChange={(value) => {
              clearErrors("positionRequired");
              setValue("positionRequired", value);
            }}
            error={errors.positionRequired?.message}
          />
          <InputField
            label="Number of Positions"
            {...register("numberOfPositions")}
            type="number"
            error={errors.numberOfPositions?.message}
          />
          <div>
            <Dropdown
              label="Urgency"
              options={urgencyOptions}
              onChange={(value) => {
                clearErrors("urgency");
                setValue("urgency", value);
              }}
              error={errors.urgency?.message}
            />
          </div>
        </div>

        <TextAreaField
          label="Message"
          rows={6}
          {...register("message")}
          error={errors.message?.message}
        />

        <div className="flex justify-end mt-6">
          <Button
            disabled={isSubmitting}
            text={isSubmitting ? "submitting" : "Submit Request"}
            bgColor="bg-[#000000]"
            size="p-2  text-lg"
            textColor="text-[#FEFEFE]"
          />
        </div>
      </form>
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
      <ErrorModal isOpen={openError} onClose={() => setOpenError(false)} />
    </div>
  );
};
