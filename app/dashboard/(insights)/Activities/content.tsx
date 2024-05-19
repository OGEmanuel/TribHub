import { ActivitiesTypes } from "@/lib/types";
import { formatDate, formatTime } from "@/lib/utils";
import PaidIcon from "@/public/icons/PaidIcon";
import RemovedIcon from "@/public/icons/RemovedIcon";
import { faker } from "@faker-js/faker";

const Content = ({data}:{data: ActivitiesTypes[]}) => {
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
          <p className="border-b !border-neutralN30 py-4 font-semibold text-neutralN700">
            {date}
          </p>
          {groupedData[date].map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b border-dashed border-neutralN30 py-4 text-neutralN400 last:border-none"
            >
              <div className="flex items-center gap-2">
                {item.status === "joined" ? <PaidIcon /> : <RemovedIcon />}
                <p>
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
              <div className="flex items-center gap-2">
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
