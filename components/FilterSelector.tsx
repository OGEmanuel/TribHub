import { FilterTabs } from "@/lib/types";
import SecondaryButton from "./SecondaryButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "@/lib/utils";

const FilterSelector = ({ filterTabs }: { filterTabs: FilterTabs[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Convert filterTabs to a map for easy access by name
  const filterTabsMap = new Map<string, FilterTabs>();
  filterTabs.forEach((tab) => {
    filterTabsMap.set(tab.name, tab);
  });

  // Check if there are no query parameters, then select the first button
  if (searchParams.toString() === "") {
    const firstTab = filterTabs[0];
    const initialParams = new URLSearchParams();
    initialParams.set(firstTab.name, firstTab.name);
    const initialUrl = createUrl(pathname, initialParams);
    router.replace(initialUrl, { scroll: false });
  }

  return filterTabs.map((tab) => {
    const filterTabParams = new URLSearchParams(searchParams.toString());

    // Clear all existing filter parameters if this is not the initial rendering
    if (searchParams.toString() !== "") {
      filterTabs.forEach((tab) => {
        filterTabParams.delete(tab.name);
      });
    }

    // Set the parameter for the clicked button
    filterTabParams.set(tab.name, "");

    const tabUrl = createUrl(pathname, filterTabParams);

    const isActive = searchParams.has(tab.name);

    return (
      <SecondaryButton
        onClick={() => {
          router.replace(tabUrl, { scroll: false });
        }}
        className={`bg-transparent text-neutralN700 hover:bg-transparent ${isActive ? "!border-neutralN40 text-neutralN700 shadow-[0px_8px_8px_0px_rgba(42,49,63,0.08),0px_4px_16px_0px_rgba(42,49,63,0.03)]" : "!border-transparent text-neutralN400"}`}
      >
        {tab.name}
      </SecondaryButton>
    );
  });
};

export default FilterSelector;
