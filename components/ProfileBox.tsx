'use client'

import { useUserDataStore } from "@/store/SignupDataStore";
import { GeistSans } from "geist/font/sans";
import InvertedImage from "./InvertedImage";
import ArrowDownIcon from "@/public/icons/ArrowDownIcon";
import avatar from "@/public/images/avatar.png";



const ProfileBox = () => {
    const { firstName, lastName, email } = useUserDataStore();

  return (
    <div className={`flex w-full items-center justify-end gap-4`}>
      <div className="flex items-center gap-2">
        <InvertedImage src={avatar} />
        <div className="text-sm">
          <p className={`${GeistSans.className} font-medium text-neutralN700`}>
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
  );
};

export default ProfileBox;
