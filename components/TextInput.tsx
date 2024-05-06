"use client";

import { Inter } from "next/font/google";
import { Input } from "./ui/input";
import { LegacyRef, forwardRef, useEffect, useState } from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import ViewIcon from "@/public/icons/ViewIcon";

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
      password,
    }: {
      password?: boolean;
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
    const [revealPassword, setRevealPassword] = useState(false);
    useEffect(() => {
      if (validated && (!field || !fieldState)) {
        throw new Error(
          "field and fieldState prop is required when validated is set to true"
        );
      }
    }, [validated, field, fieldState]);

    const handleRevealpassword = () => {
      setRevealPassword(!revealPassword);
    };

    return (
      <FormItem className={`space-y-[6px] ${inter.className}`}>
        <FormLabel className={`text-neutralN700`}>{label}</FormLabel>
        <div className="relative">
          <FormControl>
            <>
              {!password && (
                <Input
                  required={required}
                  placeholder={placeholder}
                  type={type}
                  className={`border rounded-xl focus:border- ${
                    fieldState?.invalid ? "border-red02" : `border-neutralN40`
                  } rounded-lg text-neutralN900`}
                  {...field}
                  ref={ref}
                />
              )}
              {password && (
                <Input
                  required={required}
                  placeholder={placeholder}
                  type={revealPassword ? "text" : "password"}
                  className={`border rounded-xl ${
                    fieldState?.invalid ? "border-red02" : `border-neutralN40`
                  } rounded-lg text-neutralN900`}
                  {...field}
                  ref={ref}
                />
              )}
            </>
          </FormControl>
          {password && (
            <button
              type="button"
              onClick={handleRevealpassword}
              className="absolute top-2.5 right-2.5"
            >
              <ViewIcon />
            </button>
          )}
        </div>
        <FormMessage />
      </FormItem>
    );
  }
);

export default TextInput;
