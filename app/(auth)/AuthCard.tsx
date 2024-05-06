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
    <>
      <div
        className={`border border-neutralN40 opacity-100 rounded-3xl w-[28rem] mx-auto my-[7.3125rem] shadow-shadow-02 bg-neutralN0`}
      >
        <div className={`p-6 flex flex-col ${className}`}>
          <div className="flex flex-col gap-2">
            <Logo />
            <h1
              className={`text-center font-bold text-neutralN700 text-2xl ${GeistSans.className}`}
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
    </>
  );
};

export default AuthCard;
