import { GeistSans } from "geist/font/sans";
import Logo from "@/components/logo";
import { ReactNode } from "react";

const AuthCard = ({
  children,
  header,
  className,
}: {
  children: ReactNode;
  header: string;
  className: string;
}) => {
  return (
    <>
      <div
        className={`border border-neutralN40 rounded-3xl p-6 w-[28rem] mx-auto flex flex-col my-[7.3125rem] ${className}`}
      >
        <div className="flex flex-col gap-2">
          <Logo />
          <h1
            className={`text-center font-bold text-neutralN700 text-2xl ${GeistSans.className}`}
          >
            {header}
          </h1>
        </div>
        {children}
      </div>
      <p className="text-center text-sm text-neutralN100 mb-12">
        Copyright © 2024 Tribhub Inc.
      </p>
    </>
  );
};

export default AuthCard;
