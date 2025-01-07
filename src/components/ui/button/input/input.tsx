import React from "react";

interface InputFieldProps {
    label?: string;
    type?: string;
    icon?: React.ComponentType<{ className?: string }>;
    placeholder?: string;
    required?: boolean;

}

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", icon: Icon, placeholder, required = false }) => {
    return (
        <div className="flex flex-col space-y-1">
            <div className="flex gap-1">
                <label className="text-sm font-normal">{label}</label>
                {Icon && <Icon className="text-sm font-normal text-[#F1040A]" />}
            </div>
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                className="border rounded-lg border-[#A7A7A9] p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>
    );
};

export default InputField;
