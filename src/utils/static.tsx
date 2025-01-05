import path from "path";

export const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About us",
    path: "/about",
  },
  {
    name: "Services",
    subRoutes: [
      { name: "Temporary Staffing",path: "/services/temporary-staffing" },
      { name: "Permanent Staffing",path: "/services/permanent-staffing" },
      { name: "Recruitment Process Outsourcing",path: "/services/recruitment-process-outsourcing" },
      { name: "Consulting Services",path: "/services/consulting-services" },
    ],
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];
