"use client";

import { GeistSans } from "geist/font/sans";
import { useUserDataStore } from "@/store/SignupDataStore";

const Header = () => {
  const { firstName } = useUserDataStore();

  return (
    <div className="pb-6 pl-[6.25rem]">
      <h1
        className={`${GeistSans.className} text-2xl font-medium text-neutralN700`}
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
