import Image, { StaticImageData } from "next/image";
import Button from "@/components/ui/button/btn";

interface SectionWithImageProps {
    title: string;
    onClick: () => void;
    description: string;
    buttonText: string;
    buttonBgColor: string;
    buttonTextColor: string;
    buttonSize: string;
    imageSrc: string | StaticImageData;
    imageAlt: string;
    containerBgColor?: string;
}

export default function SectionWithImage({
    title,
    description,
    buttonText,
    buttonBgColor,
    buttonTextColor,
    buttonSize,
    imageSrc,
    imageAlt,
    onClick,
    containerBgColor = "bg-[#FDC653]",
}: SectionWithImageProps) {
    return (
        <div className={`${containerBgColor} px-6 sm:px-12 md:px-16 lg:px-20`}>
            <div className="container flex flex-col lg:flex-row items-center justify-between lg:justify-center mx-auto pt-8 sm:pt-12 lg:pt-18 lg:gap-12">
                <div className="text-center lg:max-w-[521px]">
                    <h1 className="text-2xl sm:2xl font-medium text-[#0C0C0C] leading-snug">
                        {title}
                    </h1>
                    <p className="font-normal leading-[30px] sm:leading-[30px] lg:leading-[30px] text-[#0C0C0C] mt-4">
                        {description}
                    </p>
                    <div className="flex items-center mx-auto justify-center lg:justify-center my-6">
                        <Button
                        onClick={onClick}
                            text={buttonText}
                            bgColor={buttonBgColor}
                            size={buttonSize}
                            textColor={buttonTextColor}
                        />
                    </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:max-w-[50%] flex justify-center">
                    <Image src={imageSrc} alt={imageAlt} />
                </div>
            </div>
        </div>
    );
}
