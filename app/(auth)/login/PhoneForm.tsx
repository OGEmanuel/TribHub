import { Inter } from "next/font/google";
import avatar from "@/public/images/avatar-2.png";
import whatsapp from "@/public/whatsapp.svg";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormEvent, useEffect, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";

const inter = Inter({ subsets: ["latin"] });

const PhoneForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [formInput, setFormInput] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (formInput.length > 10) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formInput]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let inputError = "";

    // Check if first name is empty
    if (formInput.trim() === "") {
      // If first name is empty, set error message
      inputError = "Enter valid phone number";
    }

    // Set the form errors
    setFormError(inputError);

    // If any errors were found, return early
    if (inputError) {
      return;
    }
  }

  return (
    <div className="space-y-[2.125rem]">
      <div className="flex items-center justify-between gap-4 rounded-[2.25rem] bg-neutralN10 p-2">
        <div className="flex max-w-[18.375rem] items-center gap-2 font-semibold">
          <div className="relative h-10 w-10">
            <Image
              src={avatar}
              alt={"avatar of user"}
              fill
              className="rounded-full border border-[#0000001a]"
            />
          </div>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-neutralN700">
            Apex Gamers Club
          </p>
          <span
            className={`${inter.className} rounded-3xl border border-green02 bg-green03 px-[10px] py-2 text-xs text-green01 shadow-[inset_0px_3px_0px_0px_rgba(255,255,255,1)]`}
          >
            Paid
          </span>
        </div>
        <Image src={whatsapp} alt={"whatsapp logo"} />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <fieldset className={"space-y-2"}>
          <label className={`text-neutralN700 ${inter.className}`}>
            Enter your phone number
          </label>

          <PhoneInput
            inputClass={`!w-full !py-2.5 !rounded-lg !h-auto !pl-20 ${inter.className}`}
            dropdownClass="!rounded-lg"
            placeholder="7040000000"
            country={"ng"}
            value={formInput}
            onChange={setFormInput}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
              autoComplete: "none",
              "data-testid": "input-id",
            }}
            specialLabel=""
          />
          <p className="text-sm font-medium text-red01">{formError}</p>
        </fieldset>
        <PrimaryButton isLoading={isLoading} formValid={formValid} validated>
          Access profile
        </PrimaryButton>
      </form>
    </div>
  );
};

export default PhoneForm;
