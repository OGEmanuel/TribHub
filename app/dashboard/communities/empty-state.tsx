import { GeistSans } from "geist/font/sans";
import { Button } from "@/components/ui/button";
import EmptyCommunityIcon from "@/public/icons/empty-community-icon";

const CommunityEmptyState = () => {
  return (
    <div className="flex h-[calc(38.875rem-4.385625rem)] flex-col items-center justify-center text-center">
      <EmptyCommunityIcon />
      <div className="py-1"></div>
      <p
        className={`font-medium leading-[1.24rem] -tracking-[0.02em] text-neutralN700 ${GeistSans.className}`}
      >
        Create a community
      </p>
      <div className="py-0.5"></div>
      <p className="text-sm leading-5 -tracking-[0.02em] text-neutralN400">
        Start your community journey immediately with ease.
      </p>
      <div className="py-2"></div>
      <Button variant={"secondary"} size={"lg"} className="hidden sm:flex">
        Create new community
      </Button>
      {/* The code below this comment is for mobile only */}
      <Button variant={"secondary"} size={"sm"} className="sm:hidden">
        Create new community
      </Button>
      {/* The code above this comment is for mobile only */}
    </div>
  );
};

export default CommunityEmptyState;
