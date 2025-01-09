import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/app-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fussy Recruitment - Healthcare Recruitment Agency - Nursing Jobs, Medical Jobs, and More",
  description:
    "Fussy Recruitment is a leading healthcare recruitment agency providing permanent and temporary staffing solutions to the healthcare sector. Find your next nursing job, medical job, or healthcare job with us.",
  keywords:
    "healthcare recruitment agency, nursing jobs, medical jobs, healthcare jobs, temporary staffing, permanent staffing, recruitment agency, healthcare recruitment, medical recruitment, nursing recruitment",
  openGraph: {
    title: "Fussy Recruitment - Healthcare Recruitment Agency",
    description:
      "Fussy Recruitment is a leading healthcare recruitment agency providing permanent and temporary staffing solutions to the healthcare sector. Find your next nursing job, medical job, or healthcare job with us.",
    url: "https://fussy-recruitment.vercel.app/",
    siteName: "Fussy Recruitment",
    images: [
      {
        url: "https://fussy-recruitment.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fussy Recruitment logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
