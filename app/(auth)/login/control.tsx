"use client";

import { usePageStore } from "@/store/PageStore";
import AuthCard from "../AuthCard";
import LoginForm from "./LoginForm";
import CommunityIdForm from "./CommunityIdForm";
import PhoneForm from "./PhoneForm";

const Control = () => {
  const { currLoginPage } = usePageStore();

  return (
    <>
      {currLoginPage === 0 && (
        <AuthCard header="Welcome back" className="gap-[2.125rem]">
          <LoginForm />
        </AuthCard>
      )}
      {currLoginPage === 1 && (
        <AuthCard
          header="Enter community ID"
          className="gap-[2.125rem]"
          subHeader="Enter community ID to view membership profile."
        >
          <CommunityIdForm />
        </AuthCard>
      )}
      {currLoginPage === 2 && (
        <AuthCard
          header="Enter your phone number"
          subHeader="Enter phone number to access into your membership profile."
          className="gap-[2.125rem]"
        >
          <PhoneForm />
        </AuthCard>
      )}
    </>
  );
};

export default Control;
