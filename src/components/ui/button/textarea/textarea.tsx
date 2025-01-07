import React from "react";

interface TextAreaFieldProps {
  label?: string;
  rows?: number;
  required?: boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  rows = 4,
  required = false,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex gap-1">
        <label className="text-sm text-[#09090A] font-normal">{label}</label>
        {required && <p className="text-red-500 text-sm mt-1">*</p>}
      </div>
      <textarea
        rows={rows}
        required={required}
        className="border rounded-lg border-[#A7A7A9] p-6 w-full focus:outline-none focus:ring-2 focus:ring-black"
      ></textarea>
    </div>
  );
};

export default TextAreaField;
