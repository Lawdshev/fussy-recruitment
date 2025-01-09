import React, { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  icon?: React.ComponentType<{ className?: string }>;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  required = false,
  error = "",
  ...rest
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex gap-1">
        <label className="text-sm text-[#09090A] font-normal">{label}</label>
        {required && <p className="text-red-500 text-xs mt-1">*</p>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="border rounded-lg border-[#A7A7A9] p-2 w-full focus:outline-none focus:ring-2 focus:ring-black"
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
