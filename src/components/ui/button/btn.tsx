import React from "react";

interface ButtonProps {
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  bgColor?: string;
  textColor?: string;
  border?: string;
  size?: string;
  borderColor?: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  bgColor = "bg-white",
  textColor = "text-black",
  border = "border-none",
  borderColor = "border-black",
  size = "px-4 py-2 text-lg",
  icon = null,
  type = "submit",
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`rounded-lg flex justify-center items-center gap-2 ${bgColor} ${borderColor} ${textColor} ${border} ${size}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
