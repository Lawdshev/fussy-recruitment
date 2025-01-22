import React from "react";
// import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerInputProps {
  label: string;
  required?: boolean;
  error?: string;
  onChange: (date: Date | null) => void;
  selected: Date | null;
}

export const DatePickerInput = ({
  label,
  required,
  error,
  onChange,
  selected,
}: DatePickerInputProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex space-x-1">
        <label className="text-sm text-[#09090A] font-normal">{label}</label>
        {required && <span className="text-red-500">*</span>}
      </div>
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat={"dd/MM/yyyy"}
        placeholderText=" "
        className="border rounded-lg border-[#A7A7A9] p-2 w-full focus:outline-none focus:ring-2 focus:ring-black text-primary-text mt-0"
      />
      {error && <p className="text-red-500 text-xs md:mt-1">{error}</p>}
    </div>
  );
};
