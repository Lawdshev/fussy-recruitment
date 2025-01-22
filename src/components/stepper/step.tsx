import { FaCheckCircle } from "react-icons/fa";

interface IStep {
  stepNumber: number;
  label: string;
  isLastChild: boolean;
  isActive: boolean;
  isCompleted: boolean;
}

export const Step = ({
  stepNumber,
  label,
  isActive,
  isLastChild,
  isCompleted,
}: IStep) => {
  return (
    <div
      className={`flex items-center md:space-x-4 xl:space-x-8 ${
        isActive ? "text-primary-text" : "text-[#A1A1A1]"
      }  font-medium text-base w-full`}
    >
      <div className={`flex space-x-1 items-center`}>
        {isCompleted ? (
          <FaCheckCircle color="#B3831C" size={24} />
        ) : (
          <div
            className={`w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full ${
              isActive ? "bg-[#008080]" : "bg-[#A1A1A1]"
            } text-white `}
          >
            {stepNumber}
          </div>
        )}
        <span className="whitespace-nowrap ">{label}</span>
      </div>
      {!isLastChild && (
        <div className="hidden md:block h-[1px] md:w-6 xl:w-16  bg-[#C0C0C0] "></div>
      )}
    </div>
  );
};
