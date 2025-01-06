import React from "react";
import Link from "next/link";
import { quicklinks } from "@/utils/static";

interface QuickLink {
  path: string;
  name: string;
}

const QuickLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <div className="flex flex-col gap-4">
        {quicklinks.map((link: QuickLink) => (
          <Link key={link.path} href={link.path}>
            <span className="text-sm font-medium hover:text-white text-[#D3D3D3]">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
