import { ComponentProps, ReactNode } from "react";
import { Button } from "./ui/button";

const SecondaryButton = ({
  children,
  className = "shadow-shadow-02 text-neutralN700 bg-neutralN0 !border-neutralN40",
  onClick,
}: {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Button
      size={"sm"}
      onClick={onClick}
      className={`rounded-lg border text-sm font-medium transition-all hover:bg-neutralN0 ${className}`}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
