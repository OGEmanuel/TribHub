"use client";

import { Inter } from "next/font/google";
import { Input } from "./ui/input";
import { LegacyRef, forwardRef, useEffect } from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

const inter = Inter({ subsets: ["latin"] });

const TextInput = forwardRef(
  (
    {
      type = "text",
      field,
      fieldState,
      validated,
      placeholder,
      required,
      label,
    }: {
      field?: ControllerRenderProps<any, any>;
      fieldState?: ControllerFieldState;
      validated?: boolean;
      type?: string;
      placeholder?: string;
      required?: boolean;
      label: string;
    },
    ref: LegacyRef<HTMLInputElement>
  ) => {
    useEffect(() => {
      if (validated && (!field || !fieldState)) {
        throw new Error(
          "field and fieldState prop is required when validated is set to true"
        );
      }
    }, [validated, field, fieldState]);

    return (
      <FormItem className={`space-y-[6px] ${inter.className}`}>
        <FormLabel className={`text-neutralN700`}>{label}</FormLabel>
        <FormControl>
          <Input
            required={required}
            placeholder={placeholder}
            type={type}
            className={`border rounded-xl ${
              fieldState?.invalid ? "border-red02" : `border-neutralN40`
            } rounded-lg text-neutralN900`}
            {...field}
            ref={ref}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }
);

export default TextInput;
