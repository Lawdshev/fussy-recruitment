import React from 'react';
import Link from 'next/link';
import { quicklinks } from '@/utils/quicklinks';

interface QuickLink {
    path: string;
    name: string;
}

const QuickLinks: React.FC = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            {quicklinks.map((link: QuickLink) => (
            <div key={link.path}>
                <Link href={link.path}>
                <span className="text-sm text-white hover:text-gray-500">{link.name}</span>
                </Link>
            </div>
            ))}
        </div>
    );
};

export default QuickLinks;