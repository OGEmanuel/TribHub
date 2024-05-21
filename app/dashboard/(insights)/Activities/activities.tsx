import { Input } from "@/components/ui/input";
import ArrowDownIcon from "@/public/icons/ArrowDownIcon";
import SearchIcon from "@/public/icons/SearchIcon";
import { GeistSans } from "geist/font/sans";
import EmptyState from "./EmptyState";
import Content from "./content";
import { ActivitiesTypes } from "@/lib/types";
import { faker } from "@faker-js/faker";
import Dropdown from "./dropdown";

const Activities = () => {
  const data: ActivitiesTypes[] = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      community_name: faker.company.name(),
      created_at: faker.date.recent(),
      new_member: Math.random() < 0.3,
      status: Math.random() < 0.2 ? "removed" : "joined",
    });
  }
  return (
    <div className="flex flex-col border-t !border-neutralN30 pt-4 md:gap-6 md:pt-2">
      <div className="flex w-full justify-between md:items-center">
        <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:gap-4 md:p-2">
          <div className="flex items-center justify-between">
            {" "}
            <h3
              className={`${GeistSans.className} !border-neutralN30 pr-4 font-medium text-neutralN700 md:border-r`}
            >
              Activities
            </h3>
            {/* The code below this comment is for mobile view only */}
            <div className="md:hidden">
              <Dropdown />
            </div>
            {/* The code above this comment is for mobile view only */}
          </div>

          <div className="flex w-full items-center gap-2 md:w-auto">
            <SearchIcon />
            <Input
              placeholder="search by name and community"
              className="border-none p-0 text-sm placeholder:text-neutralN80 md:min-w-[15rem] md:text-base"
            />
          </div>
        </div>
        <div className="hidden items-center gap-2 p-2 md:flex">
          <p className="font-medium text-neutralN700">All</p>
          <Dropdown />
        </div>
      </div>
      {data.length < 1 ? <EmptyState /> : <Content data={data} />}
    </div>
  );
};

export default Activities;
