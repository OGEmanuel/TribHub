import { GeistSans } from "geist/font/sans";
import EmptyActivityIcon from "@/public/icons/EmptyActivityIcon";

const EmptyState = () => {
  return (
    <div className="mx-auto my-16 flex max-w-[17.75rem] flex-col gap-2 text-center">
      <div className="mx-auto w-max">
        <EmptyActivityIcon />
      </div>
      <div>
        <h3 className={`${GeistSans.className} font-medium text-neutralN700`}>
          No activity
        </h3>
        <p className="text-sm text-neutralN400">
          It looks like there&apos;s no activity to display at the moment.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
