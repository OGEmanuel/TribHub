"use client";

import { GeistSans } from "geist/font/sans";
import Logo from "@/components/logo";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import ArrowRightIcon from "@/public/icons/ArrowRightIcon";
import { usePathname } from "next/navigation";
import { usePageStore } from "@/store/PageStore";

const AuthCard = ({
  children,
  header,
  className,
  subHeader,
}: {
  children: ReactNode;
  header: string;
  className?: string;
  subHeader?: string;
}) => {
  const pathname = usePathname();
  const { nextLoginPage, currLoginPage } = usePageStore();

  return (
    <section className="relative z-50 flex min-h-screen flex-col justify-between gap-10 before:absolute before:top-0 before:-z-10 before:h-full before:w-full before:opacity-5 md:before:bg-[url('/images/auth-bg.png')]">
      <div
        className={`mx-auto mt-10 w-full max-w-[28rem] rounded-3xl border-neutralN40 bg-neutralN0 opacity-100 md:w-[28rem] md:border md:shadow-shadow-02`}
      >
        <div className={`flex flex-col p-4 md:p-6 ${className}`}>
          <div className="flex flex-col gap-2">
            <Logo className="flex-col gap-1" />
            <h1
              className={`text-center text-xl font-bold text-neutralN700 md:text-2xl ${GeistSans.className}`}
            >
              {header}
            </h1>
            {subHeader && (
              <p className={`text-center text-sm text-neutralN400`}>
                {subHeader}
              </p>
            )}
          </div>
          {children}
        </div>
        {pathname.includes("login") && currLoginPage === 0 && (
          <div className="border-t border-neutralN40 p-6">
            <Button
              onClick={() => nextLoginPage(1)}
              className={`flex w-full gap-2 rounded-lg border border-primarys100 bg-primarys50 font-medium text-primarys400 hover:bg-primarys50`}
              size={"xl"}
            >
              I am a member of a community
              <ArrowRightIcon />
            </Button>
          </div>
        )}
      </div>
      <p className="mb-12 text-center text-sm text-neutralN100">
        Copyright © 2024 Tribhub Inc.
      </p>
    </section>
  );
};

export default AuthCard;
