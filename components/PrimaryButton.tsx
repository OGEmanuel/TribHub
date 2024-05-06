import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Button } from "./ui/button";

const inter = Inter({ subsets: ["latin"] });

const PrimaryButton = ({
  children,
  isLoading,
  formValid,
  className,
  validated,
}: {
  validated?: boolean;
  className?: string;
  children: ReactNode;
  isLoading: boolean;
  formValid?: boolean;
}) => {
  if (validated) {
    return (
      <Button
        type={isLoading ? "button" : "submit"}
        size={"lg"}
        className={`${inter.className} ${className} ${
          formValid
            ? "bg-primarys300 border-primarys500 border hover:bg-primarys300"
            : "bg-neutralN50 hover:bg-neutralN50"
        } rounded-lg w-full`}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      type={isLoading ? "button" : "submit"}
      size={"lg"}
      className={`${inter.className} bg-primarys300 border-primarys500 border hover:bg-primarys300 rounded-lg w-full`}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
