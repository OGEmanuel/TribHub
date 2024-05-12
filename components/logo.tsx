import { GeistSans } from "geist/font/sans";
import LogoIcon from "@/public/logo";

const Logo = ({ className }: { className: string }) => {
  return (
    <div
      className={`flex items-center text-center font-semibold text-neutralN700 ${className} ${GeistSans.className}`}
    >
      <LogoIcon />
      <p>TribHub</p>
    </div>
  );
};

export default Logo;
