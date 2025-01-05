"use client";
import React from 'react';
import Link from 'next/link';

interface IFooterRoute {
    name: string;
    path?: string;
    subRoutes?: {
        name: string;
        path: string;
    }[];
}

const FooterLink: React.FC<{ footerroute: IFooterRoute }> = ({ footerroute }) => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">{footerroute.name}</h3>
            {footerroute.subRoutes && footerroute.subRoutes.map((subRoute) => (
                <div key={subRoute.path}>
                    <Link href={subRoute.path}>
                        <span className="text-sm text-white hover:text-gray-500">{subRoute.name}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default FooterLink;