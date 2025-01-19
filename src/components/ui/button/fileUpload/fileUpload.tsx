"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import UploadIcon from "@/assets/svgs/uploadIcon.svg";
import { BiLoaderCircle, BiTrash } from "react-icons/bi";
import { CloudinaryFileInfo } from "./type";

interface FileUploadProps {
  onFileSelect?: (data: CloudinaryFileInfo) => void;
  label: string;
  defaultValue: CloudinaryFileInfo | null;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  label,
  defaultValue,
}) => {
  const [file, setFile] = useState<CloudinaryFileInfo | null>(defaultValue);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string>("");
  // const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;
    if (uploadedFile) {
      validateFile(uploadedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files?.[0];
    if (uploadedFile) {
      validateFile(uploadedFile);
    }
  };

  const validateFile = async (uploadedFile: File) => {
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

    const formData = new FormData();

    formData.append("file", uploadedFile);
    formData.append("upload_preset", "fussy recruitment");
    formData.append("cloud_name", "magnaibra");
    setIsUploading(true);
    const res = await fetch(
      " https://api.cloudinary.com/v1_1/magnaibra/auto/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const cloudImageData = await res.json();
    setFile(cloudImageData);
    setIsUploading(false);
    setError("");

    if (onFileSelect) {
      onFileSelect(cloudImageData);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
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
        onClick={handleClick}
      >
        {!file ? (
          <>
            {isUploading ? (
              <p>
                <BiLoaderCircle />
              </p>
            ) : (
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
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx"
                />
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col space-y-2 items-center">
            <div className="text-sm text-gray-700">
              <p>{file?.original_filename}</p>
              <p className="text-green-500">File uploaded successfully!</p>
            </div>
            <BiTrash onClick={() => setFile(null)} />
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FileUpload;
