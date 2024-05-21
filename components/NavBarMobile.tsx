"use client";

import MenuIcon from "@/public/icons/MenuIcon";
import { usePathname } from "next/navigation";
import InvertedImage from "./InvertedImage";
import avatar from "@/public/images/avatar.png";
import Hamburger from "./ui/hamburger";

const NavBarMobile = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <Hamburger/>
        <p className="font-medium capitalize text-neutralN700">
          {pathname.substring(1)}
        </p>
      </div>
      <InvertedImage src={avatar} />
    </nav>
  );
};

export default NavBarMobile;
