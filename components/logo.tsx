import Image from "next/image";
import logo from "@/public/logo.svg";

const Logo = () => {
  return (
    <div className="text-center flex flex-col items-center gap-1 font-semibold text-neutralN700">
      <Image src={logo} alt="logo" />
      <p>TribHub</p>
    </div>
  );
};

export default Logo;
