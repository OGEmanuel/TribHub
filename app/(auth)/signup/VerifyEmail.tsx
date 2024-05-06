"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import email from "@/public/images/email.png";
import { useUserDataStore } from "@/store/SignupDataStore";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  FormEvent,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";
import FormNote from "../FormNote";
import { usePageStore } from "@/store/SignupPageStore";

const inter = Inter({ subsets: ["latin"] });

const VerifyEmail = () => {
  const { email: emailAddress } = useUserDataStore();
  const { nextPage } = usePageStore();
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
    if (formValid) nextPage(1);

    // console.log("OTP form data:", data.pin);

    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <div>
      <div className="w-max mx-auto mb-2">
        <Image src={email} alt="envelope with a papaer plane" />
      </div>
      <div className="mb-[2.125rem]">
        <p className="text-neutralN400 text-sm text-center">
          Please enter the verification code we sent to:
        </p>
        <span className="text-sm text-center font-medium text-neutralN700 block">
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
            className={`flex justify-between w-full ${inter.className} font-bold text-neutralN500`}
          >
            <InputOTPSlot
              className={`${
                value.length >= 1 ? "border-neutralN500" : "border-neutralN40"
              } border rounded-xl rounded-l-xl bg-neutralN10`}
              index={0}
            />
            <InputOTPSlot
              className={`${
                value.length >= 2 ? "border-neutralN500" : "border-neutralN40"
              } border rounded-xl bg-neutralN10`}
              index={1}
            />
            <InputOTPSlot
              className={`${
                value.length >= 3 ? "border-neutralN500" : "border-neutralN40"
              } border rounded-xl bg-neutralN10`}
              index={2}
            />
            <InputOTPSlot
              className={`${
                value.length >= 4 ? "border-neutralN500" : "border-neutralN40"
              } border rounded-xl bg-neutralN10`}
              index={3}
            />
            <InputOTPSlot
              className={`${
                value.length >= 5 ? "border-neutralN500" : "border-neutralN40"
              } border rounded-xl rounded-r-xl bg-neutralN10`}
              index={4}
            />
          </InputOTPGroup>
        </InputOTP>
        <PrimaryButton isLoading={isLoading} formValid={formValid}>
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
