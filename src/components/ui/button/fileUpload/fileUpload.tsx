import Image from "next/image";
import React, { useState } from "react";
import UploadIcon from "@/assets/svgs/uploadIcon.svg";

interface FileUploadProps {
  onFileSelect?: (file: File) => void;
  label: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, label }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      validateFile(uploadedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files?.[0];
    if (uploadedFile) {
      validateFile(uploadedFile);
    }
  };

  const validateFile = (uploadedFile: File) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(uploadedFile.type)) {
      setError("Only PDF, DOC, and DOCX formats are allowed.");
      setFile(null);
      return;
    }

    if (uploadedFile.size > maxSize) {
      setError("File size must not exceed 5MB.");
      setFile(null);
      return;
    }

    setError("");
    setFile(uploadedFile);

    // Trigger the callback if provided
    if (onFileSelect) {
      onFileSelect(uploadedFile);
    }
  };

  return (
    <div className="w-full">
      <label className="block text-[#09090A] text-sm mb-3">{label}</label>
      <div
        className={`border bg-[#F7F7F7] rounded-lg py-12 flex flex-col items-center justify-center text-center ${
          error ? "border-red-500" : "border-[#A7A7A9]"
        }`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {!file ? (
          <>
            <Image src={UploadIcon} alt={"upload icon"} />

            <p className="mt-2 text-xs text-black">
              <span className="font-medium  cursor-pointer underline-offset-1 underline">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx"
            />
          </>
        ) : (
          <div className="text-sm text-gray-700">
            <p>{file.name}</p>
            <p className="text-green-500">File uploaded successfully!</p>
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FileUpload;
