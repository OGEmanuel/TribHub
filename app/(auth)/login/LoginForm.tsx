"use client";

import { Inter } from "next/font/google";
import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import Image from "next/image";
import FormNote from "../FormNote";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePageStore } from "@/store/PageStore";
import { useUserDataStore } from "@/store/SignupDataStore";
import google from "@/public/google-logo.svg";
import { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const FormSchema = z.object({
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters",
    })
    .trim(),
  email: z.string().email(),
});

const LoginForm = () => {
  const { nextPage } = usePageStore();
  const [isLoading, setIsLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    nextPage(1);
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
            name="email"
            render={({ field, fieldState }) => (
              <TextInput
                type="email"
                label="Enter email address"
                field={field}
                fieldState={fieldState}
                validated
                required
              />
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <TextInput
                label="Password"
                field={field}
                fieldState={fieldState}
                validated
                required
                password
              />
            )}
          />
          <PrimaryButton isLoading={isLoading}>Login</PrimaryButton>
        </form>
        <div className="space-y-6">
          <div
            className={
              "flex items-center gap-[1.625rem] text-neutralN400 pt-6"
            }
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
            Login with Google
          </Button>
          <FormNote
            question="Don’t have an account?"
            linkTo="Sign up for free"
            link="/signup"
          />
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
