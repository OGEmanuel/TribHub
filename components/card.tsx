import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mb-6 rounded-2xl border !border-neutralN40 bg-neutralN0 p-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
