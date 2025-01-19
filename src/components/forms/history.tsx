import { useFieldArray, useFormContext } from "react-hook-form";
import InputField from "../ui/button/input/input";
import { BiX } from "react-icons/bi";
import { ApplicationFormType } from "@/validation/applicationSchema";

export const HistoryForm = () => {
  const { register, watch } = useFormContext<ApplicationFormType>();
  const {
    fields: histories,
    append: appendHistories,

    remove: removeHistories,
  } = useFieldArray({
    name: "experience.history",
  });
  const {
    fields: references,
    append: appendReference,

    remove: removeReference,
  } = useFieldArray({
    name: "experience.reference",
  });

  const watchHistoryFieldArray = watch("experience.history");
  const watchReferenceFieldArray = watch("experience.reference");
  const controlledHistoryFields = histories.map((field, index) => {
    return {
      ...field,
      ...watchHistoryFieldArray[index],
    };
  });
  const controlledReferenceFields = references.map((field, index) => {
    return {
      ...field,
      ...watchReferenceFieldArray[index],
    };
  });

  const addmoreHistory = () => {
    appendHistories({
      dateFrom: "",
      isCurrentWork: false,
      dateTo: "",
      jobTitle: "",
      nameOfEmployer: "",
    });
  };
  const addmoreReference = () => {
    appendReference({
      firstName: "",
      LastName: "",
      jobTitle: "",
      phoneNumber: "",
    });
  };

  const removeAddedHistory = (index: number) => {
    removeHistories(index);
  };
  const removeAddedReference = (index: number) => {
    removeReference(index);
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      <p className="font-bold text-lg">History</p>
      <div className="flex justify-end mb-12">
        <button
          onClick={addmoreHistory}
          className="rounded-xl px-3 py-1.5 text-white bg-black text-lg font-medium"
          type="button"
        >
          Add more
        </button>
      </div>
      <div className="flex flex-col space-y-14 w-full items-center">
        {controlledHistoryFields.map((history, index) => (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            key={index}
          >
            <div>
              <InputField
                type="date"
                label="Date From"
                {...register(`experience.history.${index}.dateFrom`)}
                required
              />
              <span className="flex space-x-2 items-center text-sm text-primary-text mt-2 ">
                <span>
                  <input
                    type="checkbox"
                    className=" accent-black"
                    {...register(`experience.history.${index}.isCurrentWork`)}
                  />
                </span>{" "}
                <p>I am currently doing this job</p>{" "}
              </span>
            </div>
            <InputField
              label="Date To"
              type="date"
              {...register(`experience.history.${index}.dateTo`)}
            />

            <InputField
              label="Name of Employer"
              required
              {...register(`experience.history.${index}.nameOfEmployer`)}
            />

            <InputField
              label="Job Title"
              {...register(`experience.history.${index}.jobTitle`)}
              required
            />
            {controlledHistoryFields.length > 1 && (
              <div className="col-span-2 flex justify-end mb-12 ">
                <button
                  onClick={() => removeAddedHistory(index)}
                  className=" text-white bg-black text-sm"
                  type="button"
                >
                  <BiX />
                </button>
              </div>
            )}
          </div>
        ))}
        <div className="w-4/5 border-t border-[#C0C0C0]"></div>
        <div className="flex flex-col space-y-4 w-full">
          <p className="font-bold text-lg">Reference</p>
          <div className="flex justify-end mb-12">
            <button
              onClick={addmoreReference}
              className="rounded-xl px-3 py-1.5 text-white bg-black text-lg font-medium"
              type="button"
            >
              Add more
            </button>
          </div>
          {controlledReferenceFields.map((_, index) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" key={index}>
              <InputField
                label="First Name"
                {...register(`experience.reference.${index}.firstName`)}
                required
              />

              <InputField
                label="Last Name"
                {...register(`experience.reference.${index}.lastName`)}
              />

              <InputField
                label="Job Title"
                {...register(`experience.reference.${index}.jobTitle`)}
                required
              />

              <InputField
                label="Phone Number"
                {...register(`experience.reference.${index}.phoneNumber`)}
                required
              />

              {controlledReferenceFields.length > 1 && (
                <div className="col-span-2 flex justify-end mb-12 ">
                  <button
                    onClick={() => removeAddedReference(index)}
                    className=" text-white bg-black text-sm"
                    type="button"
                  >
                    <BiX />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
