"use client";

import { GeistSans } from "geist/font/sans";
import { ComponentProps } from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import avatar from "@/public/images/avatar.png";
import { useUserDataStore } from "@/store/SignupDataStore";
import ArrowDownIcon from "@/public/icons/ArrowDownIcon";
import InvertedImage from "./InvertedImage";
import DashboardIcon from "@/public/icons/DashboardIcon";
import CommunitiesIcon from "@/public/icons/CommunitiesIcon";
import ResourcesIcon from "@/public/icons/ResourcesIcon";
import WalletIcon from "@/public/icons/WalletIcon";

const Navbar = () => {
  const { firstName, lastName, email } = useUserDataStore();
  const pathname = usePathname();

  return (
    <nav className={`mx-2 flex items-center justify-between py-4 pl-12 pr-8`}>
      <Logo className="gap-2" />
      <div className="flex items-center gap-2 rounded-xl border !border-neutralN40 bg-neutralN10 p-1">
        <NavLink href={"/dashboard"}>
          <DashboardIcon
            stroke={`${pathname === "/dashboard" ? "#2A313F" : "#555A66"}`}
          />
          Dashboard
        </NavLink>
        <NavLink href={"/dashboard/communities"}>
          <CommunitiesIcon
            stroke={`${pathname === "/dashboard/communities" ? "#2A313F" : "#555A66"}`}
          />
          Communities
        </NavLink>
        <NavLink href={"/dashboard/resources"}>
          <ResourcesIcon
            stroke={`${pathname === "/dashboard/resources" ? "#2A313F" : "#555A66"}`}
          />
          Resources
        </NavLink>
        <NavLink href={"/dashboard/wallet"}>
          <WalletIcon
            stroke={`${pathname === "/dashboard/wallet" ? "#2A313F" : "#555A66"}`}
          />
          Wallet
        </NavLink>
      </div>
      <div className={`flex items-center gap-4`}>
        <div className="flex items-center gap-2">
          <InvertedImage src={avatar} />
          <div className="text-sm">
            <p
              className={`${GeistSans.className} font-medium text-neutralN700`}
            >
              {lastName.trim() === "" ? "Olunuga" : lastName}{" "}
              {firstName.trim() === "" ? "Abolaji" : firstName}
            </p>
            <p className="text-neutralN400">
              {email.trim() === "" ? "bojnuga@gmail.com" : email}
            </p>
          </div>
        </div>
        <button>
          <ArrowDownIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

export const NavLink = (
  props: Omit<ComponentProps<typeof Link>, "className">,
) => {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "flex items-center gap-2 border px-4 py-[10px] font-medium text-neutralN400 transition-all",
        pathname === props.href
          ? "rounded-lg !border-neutralN40 bg-neutralN0 text-neutralN700 shadow-[0px_4px_16px_0px_rgba(42,49,63,0.031),0px_8px_8px_0px_rgba(43,50,64,0.078)]"
          : "!border-transparent",
      )}
    />
  );
};
