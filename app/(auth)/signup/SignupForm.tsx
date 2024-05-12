"use client";

import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";
import google from "@/public/google-logo.svg";
import Image from "next/image";
import { usePageStore } from "@/store/PageStore";
import { useUserDataStore } from "@/store/SignupDataStore";
import PrimaryButton from "@/components/PrimaryButton";
import FormNote from "../FormNote";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const inter = Inter({ subsets: ["latin"] });

const SignupForm = () => {
  const { nextPage } = usePageStore();
  const { userData } = useUserDataStore();
  const [isLoading, setIsLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleUserInput = (name: string, value: string) => {
    setFormInput({ ...formInput, [name]: value });
  };

  useEffect(() => {
    if (
      formInput.firstName.trim() !== "" &&
      formInput.lastName.trim() !== "" &&
      formInput.email.includes("@")
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formInput.email, formInput.firstName, formInput.lastName]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let inputError = {
      firstName: "",
      lastName: "",
      email: "",
    };

    // Check if first name is empty
    if (formInput.firstName.trim() === "") {
      // If first name is empty, set error message
      inputError.firstName = "First name should not be empty";
    }

    // Check if last name is empty
    if (formInput.lastName.trim() === "") {
      // If last name is empty, set error message
      inputError.lastName = "Last name should not be empty";
    }

    // Check if email is invalid
    if (!formInput.email.includes("@")) {
      // If email is invalid, set error message
      inputError.email = "Email is invalid";
    }

    // Set the form errors
    setFormError(inputError);

    // If any errors were found, return early
    if (inputError.firstName || inputError.lastName || inputError.email) {
      return;
    }

    // If no errors, proceed with form submission
    userData(formInput.firstName, formInput.lastName, formInput.email);
    nextPage(1);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col space-y-6 ${inter.className}`}
      >
        <div className="flex flex-col space-y-[6px]">
          <Label className={`text-neutralN700`}>First name</Label>
          <Input
            required
            type={"text"}
            name={"firstName"}
            className={`rounded-lg border text-neutralN900 ${formError.firstName && "border-red01"}`}
            value={formInput.firstName}
            onChange={({ target }) =>
              handleUserInput(target.name, target.value)
            }
          />
          <p className="text-sm font-medium text-red01">
            {formError.firstName}
          </p>
        </div>
        <div className="flex flex-col space-y-[6px]">
          <Label className={`text-neutralN700`}>Last name</Label>
          <Input
            required
            type={"text"}
            name={"lastName"}
            className={`rounded-lg border text-neutralN900 ${formError.lastName && "border-red01"}`}
            value={formInput.lastName}
            onChange={({ target }) =>
              handleUserInput(target.name, target.value)
            }
          />
          <p className="text-sm font-medium text-red01">{formError.lastName}</p>
        </div>
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
        <PrimaryButton isLoading={isLoading} formValid={formValid} validated>
          Verify email
        </PrimaryButton>
      </form>
      <div className="space-y-6">
        <div
          className={`flex items-center gap-[1.625rem] pt-6 text-neutralN400`}
        >
          <hr className="flex-grow border border-neutralN40" />
          <span>OR</span>
          <hr className="flex-grow border border-neutralN40" />
        </div>
        <Button
          size={"lg"}
          className={`flex w-full gap-2 rounded-lg font-medium`}
        >
          <Image src={google} alt="google-logo" />
          Sign up with Google
        </Button>
        <FormNote
          question="Already have an account?"
          linkTo="Log in"
          link="/login"
        />
      </div>
    </div>
  );
};

export default SignupForm;
