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
      { name: "Temporary Staffing", path: "/services/temporary-staffing" },
      { name: "Permanent Staffing", path: "/services/permanent-staffing" },
      {
        name: "Recruitment Process Outsourcing",
        path: "/services/recruitment-process-outsourcing",
      },
      { name: "Consulting Services", path: "/services/consulting-services" },
    ],
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];
export const servicesRoutes = [
  { name: "Temporary Staffing", path: "/services/temporary-staffing" },
  { name: "Permanent Staffing", path: "/services/permanent-staffing" },
  {
    name: "Recruitment",
    path: "/services/recruitment-process-outsourcing",
  },
  { name: "Consultancy", path: "/services/consulting-services" },
];
export const quicklinks = [
  {
    name: "About us",
    path: "/about",
  },
  { name: "Contact Us", path: "/contact" },
  { name: "Blog", path: "/blog" },
];