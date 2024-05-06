"use client";

import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import google from "@/public/google-logo.svg";
import Image from "next/image";
import { usePageStore } from "@/store/SignupPageStore";
import { useUserDataStore } from "@/store/SignupDataStore";
import PrimaryButton from "@/components/PrimaryButton";
import FormNote from "../FormNote";
import TextInput from "@/components/TextInput";

const inter = Inter({ subsets: ["latin"] });

const FormSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name not long enough.",
  }),
  lastName: z.string().min(1, {
    message: "Last name not long enough.",
  }),
  email: z.string().email(),
});

const SignupForm = () => {
  const { nextPage } = usePageStore();
  const { userData } = useUserDataStore();
  const [isLoading, setIsLoading] = useState(false);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [formValid, setFormValid] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  useEffect(() => {
    if (firstNameRef.current && lastNameRef.current && emailRef.current) {
      if (
        firstNameRef.current.value.trim() !== "" &&
        lastNameRef.current.value.trim() !== "" &&
        emailRef.current.value.includes("@")
      ) {
        setFormValid(true);
      }
    }
  }, [
    firstNameRef.current?.value,
    lastNameRef.current?.value,
    emailRef.current?.value,
  ]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    nextPage(1);
    userData(data.firstName, data.lastName, data.email);
    // setIsLoading(true);
    // console.log(data);
    // scrollToTop();
    // try {
    //   await axios.post("https://formspree.io/f/xzbnygev", data);
    //   onSetPage();
    // } catch (error) {
    //   if (error instanceof AxiosError) {
    //     const errorData = error.response?.data;
    //     toast({
    //       variant: "destructive",
    //       title: `${errorData.errors}!`,
    //     });
    //   } else {
    //     toast({
    //       title: "An Error Occurred!",
    //       variant: "destructive",
    //       description: "Something went wrong! Please try again.",
    //     });
    //   }
    // } finally {
    //   setLoading(false);
    // }
  }

  return (
    <Form {...form}>
      <div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field, fieldState }) => (
              <TextInput
                label="First name"
                field={field}
                fieldState={fieldState}
                validated
                required
                ref={firstNameRef}
              />
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field, fieldState }) => (
              <TextInput
                label="Last name"
                field={field}
                fieldState={fieldState}
                validated
                required
                ref={lastNameRef}
              />
            )}
          />{" "}
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <TextInput
                type="email"
                label="Enter email address"
                field={field}
                fieldState={fieldState}
                validated
                required
                ref={emailRef}
              />
            )}
          />
          <PrimaryButton isLoading={isLoading} formValid={formValid}>
            Verify email
          </PrimaryButton>
        </form>
        <div className="space-y-6">
          <div
            className={"flex items-center gap-[1.625rem] text-neutralN400 pt-6"}
          >
            <hr className="flex-grow border border-neutralN40" />
            OR
            <hr className="flex-grow border border-neutralN40" />
          </div>
          <Button
            size={"lg"}
            className={`rounded-lg w-full font-medium ${inter.className} flex gap-2`}
          >
            <Image src={google} alt="google-logo" />
            Sign up with Google
          </Button>
          <FormNote
            question="Already have an account?"
            linkTo="Log in"
            link="/"
          />
        </div>
      </div>
    </Form>
  );
};

export default SignupForm;
