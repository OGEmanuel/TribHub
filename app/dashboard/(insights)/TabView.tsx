"use client";

import FilterSelector from "@/components/FilterSelector";
import { Suspense } from "react";

const Tabs = [
  { id: "1", name: "all" },
  { id: "2", name: "1y" },
  { id: "3", name: "1m" },
  { id: "4", name: "7d" },
  { id: "5", name: "24h" },
];

const TabView = () => {
  return (
    <div className="gap-2 rounded-xl border !border-neutralN40 bg-neutralN10 p-1">
      <Suspense fallback={null}>
        <FilterSelector filterTabs={Tabs} />
      </Suspense>
    </div>
  );
};

export default TabView;
