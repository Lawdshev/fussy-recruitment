"use client";
import React from "react";
import Link from "next/link";
import { servicesRoutes } from "@/utils/static";

const FooterLink: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Services</h3>
      <div className="flex flex-col gap-4">
        {servicesRoutes.map((subRoute) => (
          <Link key={subRoute.path} href={subRoute.path}>
            <span className="text-sm font-medium hover:text-white text-[#D3D3D3]">
              {subRoute.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLink;
