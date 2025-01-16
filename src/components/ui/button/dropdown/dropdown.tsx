"use client";

import useOutsideClick from "@/hooks/use-outside-click";
import React, { useState } from "react";
import { CgChevronUp } from "react-icons/cg";

interface DropdownProps {
  label: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  defaultValue?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onChange,
  required,
  defaultValue,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const callback = () => {
    setIsOpen(false);
  };
  const ref = useOutsideClick<HTMLDivElement>(callback);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };
  //   border rounded-lg border-[#A7A7A9] p-2 w-full focus:outline-none focus:ring-2 focus:ring-black
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex gap-1">
        <label className="text-sm text-[#09090A] font-normal">{label}</label>
        {required && <p className="text-red-500 text-xs mt-1">*</p>}
      </div>
      <div className="relative w-full">
        <button
          type="button"
          className="text-left border border-[#A7A7A9] w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black text-primary-text "
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption
            ? options.find((option) => option.value === selectedOption)?.label
            : defaultValue}
          <span className="float-right">
            <CgChevronUp size={24} />
          </span>
        </button>
        {isOpen && (
          <div
            ref={ref}
            className="absolute left-0 w-full mt-2 border border-gray-300 rounded-lg bg-blue-50 shadow-lg z-50"
          >
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center px-4 py-2 cursor-pointer text-primary-text hover:bg-gray-100"
              >
                <input
                  type="radio"
                  name="dropdown-options"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={() => handleOptionChange(option.value)}
                  className="mr-2 text-primary-text"
                />
                {option.label}
              </label>
            ))}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Dropdown;
