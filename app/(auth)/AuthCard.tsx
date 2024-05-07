"use client";

import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import Logo from "@/components/logo";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import ArrowRightIcon from "@/public/icons/ArrowRightIcon";
import { usePathname } from "next/navigation";
import { usePageStore } from "@/store/PageStore";

const inter = Inter({ subsets: ["latin"] });

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
  const { nextPage, currPage } = usePageStore();

  return (
    <section className="before:absolute h-screen before:w-full before:top-0 before:h-full md:before:bg-[url('/images/auth-bg.png')] before:opacity-5 before:-z-10 z-50 relative flex flex-col justify-between gap-10">
      <div
        className={`md:border border-neutralN40 opacity-100 rounded-3xl w-full md:w-[28rem] mx-auto md:shadow-shadow-02 bg-neutralN0 mt-10`}
      >
        <div className={`md:p-6 p-4 flex flex-col ${className}`}>
          <div className="flex flex-col gap-2">
            <Logo />
            <h1
              className={`text-center font-bold text-neutralN700 text-xl md:text-2xl ${GeistSans.className}`}
            >
              {header}
            </h1>
            {subHeader && (
              <p
                className={`${inter.className} text-sm text-neutralN400 text-center`}
              >
                {subHeader}
              </p>
            )}
          </div>
          {children}
        </div>
        {pathname.includes("login") && currPage === 0 && (
          <div className="border-t border-neutralN40 p-6">
            <Button
              onClick={() => nextPage(1)}
              className={`w-full rounded-lg border border-primarys100 bg-primarys50 text-primarys400 font-medium hover:bg-primarys50 flex gap-2 ${inter.className}`}
              size={"lg"}
            >
              I am a member of a community
              <ArrowRightIcon />
            </Button>
          </div>
        )}
      </div>
      <p className="text-center text-sm text-neutralN100 mb-12">
        Copyright © 2024 Tribhub Inc.
      </p>
    </section>
  );
};

export default AuthCard;
