import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}
interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  required,
  ...props
}) => {
  return (
    <div className="mb-2">
      <label className="block text-gray-700 mb-2 text-sm">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        className="border border-gray-300 rounded-lg px-3 py-2.5 w-full hover:border-gray-400 focus:border-gray-500 focus:outline-none"
        {...props}
      />
    </div>
  );
};

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  required,
  ...props
}) => {
  return (
    <div className="mb-2">
      <label className="block text-gray-700 mb-2 text-sm">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        className="border border-gray-300 p-2 w-full rounded-lg hover:border-gray-400 focus:border-gray-500 focus:outline-none"
        {...props}
      ></textarea>
    </div>
  );
};
