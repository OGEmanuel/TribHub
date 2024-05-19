import QuickAction from "./QuickAction";
import Insight from "./(insights)/insights";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soucity - Home",
};

const DashboardHomePage = () => {
  return (
    <>
      <QuickAction />
      <Insight />
    </>
  );
};

export default DashboardHomePage;
