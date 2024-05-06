"use client";

import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import MinusIcon from "@/public/icons/MinusIcon";
import ValidCheck from "@/public/icons/ValidCheck";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z
  .object({
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters",
      })
      .trim(),
    confirmPassword: z.string().trim(),
    terms: z.boolean({ message: "Accept terms to continue" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const CreatePassword = () => {
  const [formValid, setFormValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const checkBoxRef = useRef<HTMLButtonElement>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const checkPassword = (value: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]).{8,}$/;
    setPasswordIsValid(regex.test(value));
  };

  useEffect(() => {
    if (confirmPasswordRef.current) {
      checkPassword(confirmPasswordRef.current.value);
    }

    if (confirmPasswordRef.current) {
      if (
        confirmPasswordRef.current?.value.length >= 8 &&
        checkBoxRef.current?.ariaChecked
      ) {
        setFormValid(true);
      } else {
        setFormValid(false);
      }
    }
  }, [confirmPasswordRef.current?.value, checkBoxRef.current?.ariaChecked]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
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
            name="password"
            render={({ field, fieldState }) => (
              <TextInput
                label="Password"
                field={field}
                fieldState={fieldState}
                validated
                required
                password
                ref={passwordRef}
              />
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field, fieldState }) => (
              <TextInput
                label="Confirm Password"
                field={field}
                fieldState={fieldState}
                validated
                required
                password
                ref={confirmPasswordRef}
              />
            )}
          />{" "}
          <div className="space-y-6 text-neutralN400">
            <div className="flex gap-2 items-center text-sm">
              <span>{passwordIsValid ? <ValidCheck /> : <MinusIcon />}</span>
              <p>At least 8 characters</p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <span>{passwordIsValid ? <ValidCheck /> : <MinusIcon />}</span>
              <p>One lowercase character</p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <span>{passwordIsValid ? <ValidCheck /> : <MinusIcon />}</span>
              <p>One uppercase character</p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <span>{passwordIsValid ? <ValidCheck /> : <MinusIcon />}</span>
              <p>One number, symbol or whitespace character</p>
            </div>
          </div>
          <PrimaryButton isLoading={isLoading} formValid={formValid} validated>
            Sign up
          </PrimaryButton>
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    required
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className={`border-neutralN400 data-[state=checked]:border-green01 rounded`}
                    ref={checkBoxRef}
                  />
                </FormControl>
                <div className="space-y-1 leading-none text-sm">
                  <FormLabel className="text-neutralN800">
                    Terms and Conditions
                  </FormLabel>
                  <FormDescription className="text-neutralN400">
                    By checking this box, you agree to Tribhub's{" "}
                    <Link href="/" className="font-medium text-primarys300">
                      Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link href={"/"} className="font-medium text-primarys300">
                      Privacy Policy.
                    </Link>
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </div>
    </Form>
  );
};

export default CreatePassword;
