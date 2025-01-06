import React from "react";
import NavBar from "./navbar/nav-bar";
import Footer from "./footer/footer";

interface IProp {
  children: React.ReactNode;
}

const AppLayout: React.FC<IProp> = ({ children }) => {
  return (
    <div className="">
      <NavBar />
      <main className="bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
