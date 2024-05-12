import { ReactNode } from "react";
import { Button } from "./ui/button";

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
  return (
    <Button
      type={isLoading ? "button" : "submit"}
      size={"xl"}
      className={`${className} ${
        formValid
          ? "border border-primarys500 bg-primarys300 hover:bg-primarys300"
          : "bg-neutralN50 hover:bg-neutralN50"
      } w-full rounded-lg`}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
