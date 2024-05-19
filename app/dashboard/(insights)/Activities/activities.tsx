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
    <div className="flex flex-col gap-6 border-t !border-neutralN30 pt-2">
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
          <Dropdown />
        </div>
      </div>
      {data.length < 1 ? <EmptyState /> : <Content data={data} />}
    </div>
  );
};

export default Activities;
