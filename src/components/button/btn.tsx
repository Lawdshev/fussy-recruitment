import React from "react";

interface ButtonProps {
    text: string;
    bgColor?: string;
    textColor?: string;
    border?: string;
    size?: string;
    borderColor?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
    text,
    bgColor = "bg-white",
    textColor = "text-black",
    border = "border-none",
    borderColor = "border-black",
    size = "px-4 py-2 text-lg",
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`rounded-lg ${bgColor}  ${borderColor} ${textColor} ${border} ${size}`}
        >
            {text}
        </button>
    );
};

export default Button;
