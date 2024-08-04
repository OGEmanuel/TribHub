import Card from "@/components/card";
import { Metadata } from "next";
import CommunityHeader from "./header";
import CommunityEmptyState from "./empty-state";

export const metadata: Metadata = {
  title: "TribHub - Communities",
};
const CommuinitesHomePage = () => {
  return (
    <Card className="min-h-[38.875rem]">
      <CommunityHeader />
      <CommunityEmptyState />
    </Card>
  );
};

export default CommuinitesHomePage;
