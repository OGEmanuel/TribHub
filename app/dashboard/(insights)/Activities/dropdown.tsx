"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Hamburger from "@/components/ui/hamburger";
import ArrowDownIcon from "@/public/icons/ArrowDownIcon";

const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-max">
        <div className="hidden md:block">
          <ArrowDownIcon />
        </div>
        <div className="h-max md:hidden">
          <Hamburger />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[12.5rem] -translate-x-8 translate-y-2 font-medium text-neutralN400 shadow-[shadow-03,shadow-035] md:-translate-x-[5.3rem]">
        <DropdownMenuItem>All</DropdownMenuItem>
        <DropdownMenuItem>New members</DropdownMenuItem>
        <DropdownMenuItem>Removed members</DropdownMenuItem>
        <DropdownMenuItem>Payment renewal</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
