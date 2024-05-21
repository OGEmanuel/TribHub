import Navbar from "@/components/NavBar";
import { ReactNode } from "react";
import Header from "./DashboardHeader";
import NavBarMobile from "@/components/NavBarMobile";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="min-h-screen">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden">
        <NavBarMobile />
      </div>
      <section className="h-[calc(100vh-4.583125rem)] w-full md:h-[calc(100vh-5.416875rem)] md:px-2 md:pb-2">
        <div className="scrollbar h-full w-full overflow-auto rounded-t-3xl border border-b-0 !border-neutralN40 bg-neutralN10 md:rounded-3xl">
          <div className="mx-auto max-w-[58.125rem] px-4 pb-[1.625rem] pt-6 md:w-[58.125rem] md:pt-10">
            <Header />
            {children}
          </div>
        </div>
      </section>
    </section>
  );
};

export default DashboardLayout;
