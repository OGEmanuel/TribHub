import { ActivitiesTypes } from "@/lib/types";
import { formatDate, formatTime } from "@/lib/utils";
import PaidIcon from "@/public/icons/PaidIcon";
import PaidMobileIcon from "@/public/icons/PaidMobileIcon";
import RemovedIcon from "@/public/icons/RemovedIcon";
import RemovedMobileIcon from "@/public/icons/RemovedMobileIcon";
import { faker } from "@faker-js/faker";

const Content = ({ data }: { data: ActivitiesTypes[] }) => {
  const groupedData: { [key: string]: ActivitiesTypes[] } = {};

  data.forEach((item) => {
    const dateKey = formatDate(item.created_at.toString());
    if (!groupedData[dateKey]) {
      groupedData[dateKey] = [];
    }
    groupedData[dateKey].push(item);
  });

  return (
    <div>
      {Object.keys(groupedData).map((date) => (
        <div key={date}>
          <p className="border-b !border-neutralN30 py-4 text-sm font-semibold text-neutralN700 md:text-base">
            {date}
          </p>
          {groupedData[date].map((item) => (
            <div
              key={item.id}
              className="flex w-full justify-between border-b border-dashed border-neutralN30 py-4 text-neutralN400 last:border-none"
            >
              <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:items-center">
                <div className="flex items-center justify-between">
                  {item.status === "joined" ? (
                    <>
                      <div className="hidden md:block">
                        <PaidIcon />{" "}
                      </div>
                      <div className="md:hidden">
                        <PaidMobileIcon />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block">
                        <RemovedIcon />
                      </div>
                      <div className="md:hidden">
                        <RemovedMobileIcon />
                      </div>
                    </>
                  )}
                  {/* The code below this comment is for mobile screens only */}
                  <div className="flex items-center gap-2 md:hidden">
                    {item.status === "joined" && item.new_member && (
                      <span className="rounded-3xl border border-primarys100 bg-primarys50 px-2 py-[6px] text-[10px] font-medium text-primarys400">
                        New member
                      </span>
                    )}
                    <p
                      className={`${item.status === "joined" && item.new_member && "border-l"} !border-neutralN30 pl-2 text-xs`}
                    >
                      {formatTime(item.created_at.toString())}
                    </p>
                  </div>
                  {/* The code above this comment is for mobile screens only */}
                </div>
                <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs md:text-base">
                  <span className="font-semibold text-neutralN700">
                    {item.name}
                  </span>{" "}
                  {item.status === "joined" ? (
                    <>
                      paid a{" "}
                      <span className="font-semibold text-neutralN700">
                        month subscription
                      </span>{" "}
                      for{" "}
                    </>
                  ) : (
                    <>was removed from </>
                  )}
                  <span className="font-semibold text-neutralN700">
                    {item.community_name}
                  </span>
                </p>
              </div>
              <div className="hidden w-full items-center justify-end gap-2 md:flex">
                {item.status === "joined" && item.new_member && (
                  <span className="rounded-3xl border border-primarys100 bg-primarys50 px-4 py-2 text-xs font-medium text-primarys400">
                    New member
                  </span>
                )}
                <p
                  className={`${item.status === "joined" && item.new_member && "border-l"} !border-neutralN30 pl-2`}
                >
                  {formatTime(item.created_at.toString())}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Content;
