"use client";

import { usePageStore } from "@/store/PageStore";
import AuthCard from "../AuthCard";
import SignupForm from "./SignupForm";
import VerifyEmail from "./VerifyEmail";
import CreatePassword from "./CreatePassword";

const Control = () => {
  const { currSignupPage } = usePageStore();

  return (
    <>
      {currSignupPage === 0 && (
        <AuthCard header="Create an account" className="gap-[2.125rem]">
          <SignupForm />
        </AuthCard>
      )}
      {currSignupPage === 1 && (
        <AuthCard header="Check your email" className="gap-2">
          <VerifyEmail />
        </AuthCard>
      )}
      {currSignupPage === 2 && (
        <AuthCard header="Create your Password" className="gap-[2.125rem]">
          <CreatePassword />
        </AuthCard>
      )}
    </>
  );
};

export default Control;
