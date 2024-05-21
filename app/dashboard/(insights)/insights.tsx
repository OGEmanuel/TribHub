import { GeistSans } from "geist/font/sans";
import InsightIcon from "@/public/icons/InsightIcon";
import TabView from "./TabView";
import Metrics from "./metrics";
import Activities from "./Activities/activities";

const Insight = () => {
  return (
    <div className="mb-6 rounded-2xl border !border-neutralN40 bg-neutralN0 p-4">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="flex items-center gap-2">
          <InsightIcon />
          <p className={`${GeistSans.className} font-medium text-neutralN700`}>
            Insights
          </p>
        </div>
        <TabView />
      </div>
      <Metrics />
      <Activities />
    </div>
  );
};

export default Insight;
