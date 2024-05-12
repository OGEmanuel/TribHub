import LogoIcon from "@/public/logo";

const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-1 text-center font-semibold text-neutralN700">
      <LogoIcon />
      <p>TribHub</p>
    </div>
  );
};

export default Logo;
