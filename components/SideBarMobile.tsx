"use client";

import MenuIcon from "@/public/icons/MenuIcon";
import Hamburger from "./ui/hamburger";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import Logo from "./logo";
import CancelIcon from "@/public/icons/CancelIcon";
import { NavLink } from "./NavBar";
import DashboardIcon from "@/public/icons/DashboardIcon";
import CommunitiesIcon from "@/public/icons/CommunitiesIcon";
import ResourcesIcon from "@/public/icons/ResourcesIcon";
import WalletIcon from "@/public/icons/WalletIcon";
import { usePathname } from "next/navigation";
import ProfileBox from "./ProfileBox";
import { useState } from "react";

export default function SideBarMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <div className="rounded-lg border !border-neutralN40 p-2">
          <MenuIcon />
        </div>
        <span className="sr-only">Open</span>
      </SheetTrigger>
      <SheetContent side={"left"} className="h-full border-neutralN40">
        <SheetHeader className="flex items-center justify-between border-b !border-neutralN40 bg-neutralN0 px-4 py-[1.55rem]">
          <Logo className="gap-2" />
          <SheetClose>
            <CancelIcon />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>
        <div className="flex h-[calc(100%-4.640625rem)] flex-col justify-between bg-neutralN10 px-4 py-6">
          <div className="space-y-4">
            <NavLink href={"/dashboard"}>
              <button
                className="flex items-center gap-2"
                onClick={() => setOpen(!open)}
              >
                <DashboardIcon
                  stroke={`${pathname === "/dashboard" ? "#2A313F" : "#555A66"}`}
                />
                Dashboard
              </button>
            </NavLink>
            <NavLink href={"/dashboard/communities"}>
              <button
                className="flex items-center gap-2"
                onClick={() => setOpen(!open)}
              >
                <CommunitiesIcon
                  stroke={`${pathname === "/dashboard/communities" ? "#2A313F" : "#555A66"}`}
                />
                Communities
              </button>
            </NavLink>
            <NavLink href={"/dashboard/resources"}>
              <button
                className="flex items-center gap-2"
                onClick={() => setOpen(!open)}
              >
                <ResourcesIcon
                  stroke={`${pathname === "/dashboard/resources" ? "#2A313F" : "#555A66"}`}
                />
                Resources
              </button>
            </NavLink>
            <NavLink href={"/dashboard/wallet"}>
              <button
                className="flex items-center gap-2"
                onClick={() => setOpen(!open)}
              >
                <WalletIcon
                  stroke={`${pathname === "/dashboard/wallet" ? "#2A313F" : "#555A66"}`}
                />
                Wallet
              </button>
            </NavLink>
          </div>
          <SheetFooter className="justify-end self-end">
            <div className="">
              <ProfileBox />
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
