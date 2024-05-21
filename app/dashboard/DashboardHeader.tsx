"use client";

import { GeistSans } from "geist/font/sans";
import { useUserDataStore } from "@/store/SignupDataStore";

const Header = () => {
  const { firstName } = useUserDataStore();

  return (
    <div className="pb-4 md:pb-6 md:pl-[6.25rem]">
      <h1
        className={`${GeistSans.className} text-lg font-medium text-neutralN700 md:text-2xl`}
      >
        Hi, {firstName === "" ? "Abolaji" : firstName}
      </h1>
      <p className="text-sm text-neutralN400">
        Create, maintain and secure your communities and resources.
      </p>
    </div>
  );
};

export default Header;
