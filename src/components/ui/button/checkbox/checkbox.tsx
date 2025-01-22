import React, { InputHTMLAttributes } from "react";

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = ({ label, ...rest }: ICheckbox) => {
  return (
    <label className="flex items-center space-x-2  cursor-pointer text-primary-text accent-black ">
      <input type="checkbox" {...rest} />
      <span>{label}</span>
    </label>
  );
};
