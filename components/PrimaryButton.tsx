import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Button } from "./ui/button";

const inter = Inter({ subsets: ["latin"] });

const PrimaryButton = ({
  children,
  isLoading,
  formValid,
}: {
  children: ReactNode;
  isLoading: boolean;
  formValid: boolean;
}) => {
  return (
    <Button
      type={isLoading ? "button" : "submit"}
      size={"lg"}
      className={`${inter.className} ${
        formValid
          ? "bg-primarys300 border-primarys500 border hover:bg-primarys300"
          : "bg-neutralN50 hover:bg-neutralN50"
      } rounded-lg w-full`}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
