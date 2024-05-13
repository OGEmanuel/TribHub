"use client";

import SecondaryButton from "@/components/SecondaryButton";
import { useTabStore } from "@/store/TabSelectorStore";

enum Tab {
  all = "all",
  year = "1y",
  month = "1m",
  week = "7d",
  day = "24h",
}

const TabView = () => {
  const { currTab, nextTab } = useTabStore();
  return (
    <div className="gap-2 rounded-xl border !border-neutralN40 bg-neutralN10 p-1">
      <SecondaryButton
        onClick={() => nextTab(Tab.all)}
        className={`bg-transparent text-neutralN700 hover:bg-transparent ${currTab === Tab.all ? "!border-neutralN40 text-neutralN700 shadow-[0px_8px_8px_0px_rgba(42,49,63,0.08),0px_4px_16px_0px_rgba(42,49,63,0.03)]" : "!border-transparent text-neutralN400"}`}
      >
        All
      </SecondaryButton>
      <SecondaryButton
        onClick={() => nextTab(Tab.year)}
        className={`bg-transparent text-neutralN700 hover:bg-transparent ${currTab === Tab.year ? "!border-neutralN40 text-neutralN700 shadow-[0px_8px_8px_0px_rgba(42,49,63,0.08),0px_4px_16px_0px_rgba(42,49,63,0.03)]" : "!border-transparent text-neutralN400"}`}
      >
        1y
      </SecondaryButton>
      <SecondaryButton
        onClick={() => nextTab(Tab.month)}
        className={`bg-transparent text-neutralN700 hover:bg-transparent ${currTab === Tab.month ? "!border-neutralN40 text-neutralN700 shadow-[0px_8px_8px_0px_rgba(42,49,63,0.08),0px_4px_16px_0px_rgba(42,49,63,0.03)]" : "!border-transparent text-neutralN400"}`}
      >
        1m
      </SecondaryButton>
      <SecondaryButton
        onClick={() => nextTab(Tab.week)}
        className={`bg-transparent text-neutralN700 hover:bg-transparent ${currTab === Tab.week ? "!border-neutralN40 text-neutralN700 shadow-[0px_8px_8px_0px_rgba(42,49,63,0.08),0px_4px_16px_0px_rgba(42,49,63,0.03)]" : "!border-transparent text-neutralN400"}`}
      >
        7d
      </SecondaryButton>
      <SecondaryButton
        onClick={() => nextTab(Tab.day)}
        className={`bg-transparent text-neutralN700 hover:bg-transparent ${currTab === Tab.day ? "!border-neutralN40 text-neutralN700 shadow-[0px_8px_8px_0px_rgba(42,49,63,0.08),0px_4px_16px_0px_rgba(42,49,63,0.03)]" : "!border-transparent text-neutralN400"}`}
      >
        24h
      </SecondaryButton>
    </div>
  );
};

export default TabView;
