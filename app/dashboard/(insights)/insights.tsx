import { GeistSans } from "geist/font/sans";
import InsightIcon from "@/public/icons/InsightIcon";
import TabView from "./TabView";
import Metrics from "./metrics";
import Activities from "./activities";

const Insight = () => {
  return (
    <div className="mb-6 rounded-2xl border !border-neutralN40 p-4">
      <div className="mb-6 flex items-center justify-between">
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
