import { GeistSans } from "geist/font/sans";
import { Button } from "@/components/ui/button";
import CommunityIcon from "@/public/icons/CommunityIcon";
import { PlusIcon } from "lucide-react";

const CommunityHeader = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutralN30 pb-[1.59375rem]">
      <div className="flex flex-wrap items-start gap-2">
        <CommunityIcon />
        <div className="flex flex-col gap-1">
          <p
            className={`font-medium leading-[1.24rem] tracking-[-0.02em] text-neutralN700 ${GeistSans.className}`}
          >
            Communities
          </p>
          <p className="text-sm leading-[1.24rem] tracking-[-0.02em] text-neutralN400">
            Create, maintain and secure your communities and resources.
          </p>
        </div>
      </div>
      <Button
        variant={"primary"}
        size={"lg"}
        className="hidden items-center gap-2 sm:flex"
      >
        <PlusIcon />
        Create community
      </Button>
      {/* The code below this comment is for mobile only */}
      <Button
        variant={"primary"}
        size={"sm"}
        className="flex items-center gap-2 sm:hidden"
      >
        <PlusIcon />
        Create community
      </Button>
      {/* The code above this comment is for mobile only */}
    </div>
  );
};

export default CommunityHeader;
