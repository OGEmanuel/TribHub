"use client";

import PrimaryButton from "@/components/PrimaryButton";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MinusIcon from "@/public/icons/MinusIcon";
import ValidCheck from "@/public/icons/ValidCheck";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";
import ViewIcon from "@/public/icons/ViewIcon";
import { useRouter } from "next/navigation";
import { usePageStore } from "@/store/PageStore";


const CreatePassword = () => {
  const { nextSignupPage } = usePageStore();
  const router = useRouter();
  const [formValid, setFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState<CheckedState>(false);
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealConfirmPassword, setRevealConfirmPassword] = useState(false);
  const [formInput, setFormInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleRevealpassword = () => {
    setRevealPassword(!revealPassword);
  };

  const handleRevealConfirmpassword = () => {
    setRevealConfirmPassword(!revealConfirmPassword);
  };

  const handleUserInput = (name: string, value: string | boolean) => {
    setFormInput({ ...formInput, [name]: value });
  };

  const isValidLength = (value: string): boolean => {
    return value.length >= 8;
  };

  const hasLowercase = (value: string): boolean => {
    return /[a-z]/.test(value);
  };

  const hasUppercase = (value: string): boolean => {
    return /[A-Z]/.test(value);
  };

  const hasNumberSymbolWhitespace = (value: string): boolean => {
    return /[\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]/.test(value);
  };

  useEffect(() => {
    if (
      formInput.confirmPassword.trim() !== "" &&
      formInput.password.trim() !== "" &&
      checked
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formInput.password, formInput.confirmPassword, checked]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let inputError = {
      password: "",
      confirmPassword: "",
    };

    if (formInput.password.trim() === "" || formInput.password.length < 8) {
      inputError.password = "Password should be at least 8 characters long";
    }

    if (formInput.password !== formInput.confirmPassword) {
      inputError.confirmPassword = "Passwords do not match";
    }

    setFormError(inputError);

    if (inputError.password || inputError.confirmPassword) {
      return;
    }

    router.push("/login");
    nextSignupPage(0);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col space-y-6`}
      >
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
        <div className="flex flex-col space-y-[6px]">
          <Label className={`text-neutralN700`}>Confirm password</Label>
          <div className="relative">
            <Input
              required
              type={revealConfirmPassword ? "text" : "password"}
              name={"confirmPassword"}
              className={`rounded-lg border text-neutralN900 ${formError.confirmPassword && "border-red01"}`}
              value={formInput.confirmPassword}
              onChange={({ target }) =>
                handleUserInput(target.name, target.value)
              }
            />
            <button
              type="button"
              onClick={handleRevealConfirmpassword}
              className="absolute right-2.5 top-3"
            >
              <ViewIcon />
            </button>
          </div>
          <p className="text-sm font-medium text-red01">
            {formError.confirmPassword}
          </p>
        </div>
        <div className="space-y-6 text-neutralN400">
          <div className="flex items-center gap-2 text-sm">
            <span>
              {isValidLength(formInput.password) ? (
                <ValidCheck />
              ) : (
                <MinusIcon />
              )}
            </span>
            <p>At least 8 characters</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>
              {hasLowercase(formInput.password) ? (
                <ValidCheck />
              ) : (
                <MinusIcon />
              )}
            </span>
            <p>One lowercase character</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>
              {hasUppercase(formInput.password) ? (
                <ValidCheck />
              ) : (
                <MinusIcon />
              )}
            </span>
            <p>One uppercase character</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>
              {hasNumberSymbolWhitespace(formInput.password) ? (
                <ValidCheck />
              ) : (
                <MinusIcon />
              )}
            </span>
            <p>One number, symbol or whitespace character</p>
          </div>
        </div>
        <PrimaryButton isLoading={isLoading} formValid={formValid} validated>
          Sign up
        </PrimaryButton>

        <div className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox
            required
            name="checkbox"
            checked={checked}
            onCheckedChange={setChecked}
            className={`rounded border-neutralN400 data-[state=checked]:border-green01`}
          />
          <div className="space-y-1 text-sm leading-none">
            <Label className="text-neutralN800">Terms and Conditions</Label>
            <p className="leading-5 text-neutralN400">
              By checking this box, you agree to Tribhub&apos;s{" "}
              <Link href="/" className="font-medium text-primarys300">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href={"/"} className="font-medium text-primarys300">
                Privacy Policy.
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePassword;
