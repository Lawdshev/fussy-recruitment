'use client'
import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { blogs } from "@/utils/blogs";
import { useRouter } from "next/navigation";

interface IProps {
    params: { id: string };
}

const Page: React.FC<IProps> = ({ params }) => {
    const router = useRouter();
    const id = Number(params.id);

    if (isNaN(id)) {
        router.push('/blog');
        return <div>Redirecting...</div>;
    }

    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        return <div>Blog not found.</div>;
    }

    return (
        <div className="container bg-[#FFFFFF] pt-4 pb-12 px-6 lg:px-12 mx-auto">
            <div onClick={() => router.push('/blog')} className="flex text-[#333333] gap-1 mb-8 items-center cursor-pointer w-fit">
                <IoIosArrowBack className="text-lg" />
                <span className="font-medium">Back</span>
            </div>
            <h1 className="mb-8 text-3xl font-semibold text-[#0C0C0C]">
                {blog.mainTitle}
            </h1>
            <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="rounded-lg">
                    <Image
                        src={blog.image || ""}
                        alt={blog.alt || ""}
                        priority
                    />
                </div>
                <div className="lg:w-2/3">
                    <p className="text-[#09090A] mt-6 leading-[32px] lg:leading-[32px]">
                        {blog.introduction}
                    </p>
                </div>
            </div>
            <div className="mt-12 space-y-10">
                {blog.body.map((item) => (
                    <div key={item.id}>
                        <div>
                            <h2 className="text-xl font-medium text-[#0C0C0C] mb-4">
                                {item.title}
                            </h2>
                            <h4 className="text-[#0C0C0C] font-medium text-lg leading-[28px] lg:leading-[32px]">
                                {item.subTitle}
                            </h4>
                            {item.contents?.map((content, index) => (
                                <p key={index} className="text-[#09090A] leading-[28px] lg:leading-[32px] mb-6">
                                    {content}
                                </p>
                            ))}
                        </div>
                        <div className="space-y-6">
                            {item.list?.map((list, index) => (
                                <div key={list.id}>
                                    <h3 className="text-xl font-medium text-[#0C0C0C] mb-2">
                                        {index + 1}. {list.title}
                                    </h3>
                                    <p className="text-[#09090A] leading-[28px] lg:leading-[32px]">
                                        {list.contents}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
