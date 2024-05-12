"use client";

import { Inter } from "next/font/google";
import PrimaryButton from "@/components/PrimaryButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FormNote from "../FormNote";
import { usePageStore } from "@/store/PageStore";
import google from "@/public/google-logo.svg";
import { FormEvent, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ViewIcon from "@/public/icons/ViewIcon";

const inter = Inter({ subsets: ["latin"] });

const LoginForm = () => {
  const { nextPage } = usePageStore();
  const [isLoading, setIsLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (formInput.email.includes("@") && formInput.password.trim() !== "") {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formInput.password, formInput.email]);

  const handleRevealpassword = () => {
    setRevealPassword(!revealPassword);
  };

  const handleUserInput = (name: string, value: string) => {
    setFormInput({ ...formInput, [name]: value });
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let inputError = {
      email: "",
      password: "",
    };

    if (formInput.password.trim() === "" || formInput.password.length < 8) {
      inputError.password = "Password should be at least 8 characters long";
    }

    if (!formInput.email.includes("@")) {
      // If email is invalid, set error message
      inputError.email = "Email is invalid";
    }

    // Set the form errors
    setFormError(inputError);

    // If any errors were found, return early
    if (inputError.email || inputError.password) {
      return;
    }

    nextPage(1);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-[6px]">
          <Label className={`text-neutralN700`}>Enter email address</Label>
          <Input
            required
            type={"email"}
            name={"email"}
            className={`rounded-lg border text-neutralN900 ${formError.email && "border-red01"}`}
            value={formInput.email}
            onChange={({ target }) =>
              handleUserInput(target.name, target.value)
            }
          />
          <p className="text-sm font-medium text-red01">{formError.email}</p>
        </div>
        <div className="flex flex-col space-y-[6px]">
          <Label className={`text-neutralN700`}>Password</Label>
          <div className="relative">
            <Input
              required
              type={revealPassword ? "text" : "password"}
              name={"password"}
              className={`rounded-lg border text-neutralN900 ${formError.password && "border-red01"}`}
              value={formInput.password}
              onChange={({ target }) =>
                handleUserInput(target.name, target.value)
              }
            />
            <button
              type="button"
              onClick={handleRevealpassword}
              className="absolute right-2.5 top-3"
            >
              <ViewIcon />
            </button>
          </div>
          <p className="text-sm font-medium text-red01">{formError.password}</p>
        </div>
        <PrimaryButton isLoading={isLoading} formValid={formValid} validated>
          Verify email
        </PrimaryButton>
      </form>
      <div className="space-y-6">
        <div
          className={"flex items-center gap-[1.625rem] pt-6 text-neutralN400"}
        >
          <hr className="flex-grow border border-neutralN40" />
          OR
          <hr className="flex-grow border border-neutralN40" />
        </div>
        <Button
          size={"lg"}
          className={`w-full rounded-lg font-medium ${inter.className} flex gap-2`}
        >
          <Image src={google} alt="google-logo" />
          Login with Google
        </Button>
        <FormNote
          question="Don’t have an account?"
          linkTo="Sign up for free"
          link="/signup"
        />
      </div>
    </div>
  );
};

export default LoginForm;
