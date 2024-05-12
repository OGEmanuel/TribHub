"use client";

import Image from "next/image";
import email from "@/public/images/email.png";
import { useUserDataStore } from "@/store/SignupDataStore";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { FormEvent, useEffect, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import FormNote from "../FormNote";
import { usePageStore } from "@/store/PageStore";


const VerifyEmail = () => {
  const { email: emailAddress } = useUserDataStore();
  const { nextSignupPage } = usePageStore();
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (value.length === 5) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [value]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formValid) nextSignupPage(1);
  }

  return (
    <div>
      <div className="mx-auto mb-2 w-max">
        <Image src={email} alt="envelope with a papaer plane" />
      </div>
      <div className="mb-[2.125rem]">
        <p className="text-center text-sm text-neutralN400">
          Please enter the verification code we sent to:
        </p>
        <span className="block text-center text-sm font-medium text-neutralN700">
          {emailAddress}
        </span>
      </div>
      <form onSubmit={onSubmit} className="space-y-6">
        <InputOTP
          maxLength={5}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup
            className={`flex w-full justify-between font-bold text-neutralN500`}
          >
            <InputOTPSlot
              className={`${
                value.length >= 1 ? "border-neutralN500" : "border-neutralN40"
              } rounded-xl rounded-l-xl border bg-neutralN10`}
              index={0}
            />
            <InputOTPSlot
              className={`${
                value.length >= 2 ? "border-neutralN500" : "border-neutralN40"
              } rounded-xl border bg-neutralN10`}
              index={1}
            />
            <InputOTPSlot
              className={`${
                value.length >= 3 ? "border-neutralN500" : "border-neutralN40"
              } rounded-xl border bg-neutralN10`}
              index={2}
            />
            <InputOTPSlot
              className={`${
                value.length >= 4 ? "border-neutralN500" : "border-neutralN40"
              } rounded-xl border bg-neutralN10`}
              index={3}
            />
            <InputOTPSlot
              className={`${
                value.length >= 5 ? "border-neutralN500" : "border-neutralN40"
              } rounded-xl rounded-r-xl border bg-neutralN10`}
              index={4}
            />
          </InputOTPGroup>
        </InputOTP>
        <PrimaryButton isLoading={isLoading} formValid={formValid} validated>
          Continue
        </PrimaryButton>
      </form>
      <FormNote
        className="mt-6"
        question="Didn't get the email?"
        linkTo="Resend mail"
        link="/"
      />
    </div>
  );
};

export default VerifyEmail;
