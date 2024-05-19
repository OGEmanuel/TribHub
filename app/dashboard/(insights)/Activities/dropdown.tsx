"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ArrowDownIcon from "@/public/icons/ArrowDownIcon";

const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ArrowDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[12.5rem] -translate-x-[5.3rem] translate-y-2 font-medium text-neutralN400 shadow-[shadow-03,shadow-035]">
        <DropdownMenuItem>All</DropdownMenuItem>
        <DropdownMenuItem>New members</DropdownMenuItem>
        <DropdownMenuItem>Removed members</DropdownMenuItem>
        <DropdownMenuItem>Payment renewal</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
