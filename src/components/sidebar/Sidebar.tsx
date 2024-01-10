import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

const Sidebar = (): JSX.Element => {
  return (
    <div className="h-[4.5rem] w-full bg-dark500 rounded-none flex flex-row justify-between items-center md:w-[6.438rem] md:h-screen md:flex-col md:rounded-e-2xl z-50 duration-100 ease-in-out">
      <Header />
      <Footer />
    </div>
  );
};

export default Sidebar;
