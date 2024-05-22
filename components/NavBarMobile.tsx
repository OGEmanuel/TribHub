"use client";

import { usePathname } from "next/navigation";
import InvertedImage from "./InvertedImage";
import avatar from "@/public/images/avatar.png";
import SideBarMobile from "./SideBarMobile";

const NavBarMobile = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <SideBarMobile />
        <p className="font-medium capitalize text-neutralN700">
          {pathname.substring(1).includes("/")
            ? pathname.substring(11)
            : pathname.substring(1)}
        </p>
      </div>
      <InvertedImage src={avatar} />
    </nav>
  );
};

export default NavBarMobile;
