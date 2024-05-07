import { Inter } from "next/font/google";
import avatar from "@/public/images/avatar.png";
import whatsapp from "@/public/whatsapp.svg";
import Image from "next/image";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";

const inter = Inter({ subsets: ["latin"] });

const FormSchema = z.object({
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

const PhoneForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // nextPage(1);
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
    <div className="space-y-[2.125rem]">
      <div className="flex justify-between items-center bg-neutralN10 p-2 rounded-[2.25rem] gap-4">
        <div className="flex items-center gap-2 font-semibold max-w-[18.375rem]">
          <Image
            src={avatar}
            alt={"avatar of user"}
            className="rounded-full border border-[#0000001a]"
          />
          <p className="text-neutralN700 whitespace-nowrap overflow-hidden text-ellipsis">
            Apex Gamers Club
          </p>
          <span
            className={`${inter.className} text-green01 text-xs py-2 px-[10px] border border-green02 rounded-3xl bg-green03 shadow-[inset_0px_3px_0px_0px_rgba(255,255,255,1)]`}
          >
            Paid
          </span>
        </div>
        <Image src={whatsapp} alt={"whatsapp logo"} />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <fieldset className={"space-y-2"}>
            <label className={`text-neutralN700 ${inter.className}`}>
              Enter your phone number
            </label>
            <Controller
              name="phone"
              control={form.control}
              render={({ field }) => (
                <PhoneInput
                  inputClass={`!w-full !py-2 !rounded-lg !h-auto ${inter.className}`}
                  dropdownClass="!rounded-lg"
                  placeholder="7040000000"
                  country={"ng"}
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                    autoComplete: "none",
                    "data-testid": "input-id",
                  }}
                  specialLabel=""
                />
              )}
            />
            {form.formState.errors.phone ? (
              <p className="text-red-500">Phone number is required</p>
            ) : null}
          </fieldset>
          <PrimaryButton isLoading={isLoading}>Access profile</PrimaryButton>
        </form>
      </Form>
    </div>
  );
};

export default PhoneForm;
