import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";
import { Form, FormField } from "@/components/ui/form";
import { usePageStore } from "@/store/PageStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  communityId: z.string().min(1, {
    message: "Community ID not long enough.",
  }),
});

const CommunityIdForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { nextPage } = usePageStore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      communityId: "",
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
            name="communityId"
            render={({ field, fieldState }) => (
              <TextInput
                label="Enter community ID"
                field={field}
                fieldState={fieldState}
                validated
                required
              />
            )}
          />
          <PrimaryButton isLoading={isLoading}>Login</PrimaryButton>
        </form>
      </div>
    </Form>
  );
};

export default CommunityIdForm;
