import { Input } from "@/components/ui/input";
import ArrowDownIcon from "@/public/icons/ArrowDownIcon";
import EmptyActivityIcon from "@/public/icons/EmptyActivityIcon";
import SearchIcon from "@/public/icons/SearchIcon";
import { GeistSans } from "geist/font/sans";

const Activities = () => {
  return (
    <div className="border-t !border-neutralN30 pt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 p-2">
          <h3
            className={`${GeistSans.className} border-r !border-neutralN30 pr-4 font-medium text-neutralN700`}
          >
            Activities
          </h3>
          <div className="flex items-center gap-2">
            <SearchIcon />
            <Input
              placeholder="search by name and community"
              className="min-w-[14.5625rem] border-none p-0 placeholder:text-neutralN80"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 p-2">
          <p className="font-medium text-neutralN700">All</p>
          <button>
            <ArrowDownIcon />
          </button>
        </div>
      </div>
      <div className="mx-auto my-16 flex w-[17.75rem] flex-col gap-2 text-center">
        <div className="mx-auto w-max">
          <EmptyActivityIcon />
        </div>
        <div>
          <h3 className={`${GeistSans.className} font-medium text-neutralN700`}>
            No activity
          </h3>
          <p className="text-sm text-neutralN400">
            It looks like there's no activity to display at the moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
