import Navbar from "@/components/NavBar";
import { ReactNode } from "react";
import Header from "./DashboardHeader";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="min-h-screen">
      <Navbar />
      <section className="h-[calc(100vh-5.416875rem)] w-full px-2 pb-2">
        <div className="scrollbar h-full w-full overflow-auto rounded-3xl border !border-neutralN40 bg-neutralN10">
          <div className="mx-auto w-[58.125rem] pt-10">
            <Header />
            {children}
          </div>
        </div>
      </section>
    </section>
  );
};

export default DashboardLayout;
