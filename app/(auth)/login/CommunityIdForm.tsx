import PrimaryButton from "@/components/PrimaryButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePageStore } from "@/store/PageStore";
import { FormEvent, useEffect, useState } from "react";

const CommunityIdForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const { nextLoginPage } = usePageStore();

  const [formInput, setFormInput] = useState({
    communityID: "",
  });

  const [formError, setFormError] = useState({
    communityID: "",
  });

  const handleUserInput = (name: string, value: string) => {
    setFormInput({ ...formInput, [name]: value });
  };

  useEffect(() => {
    if (formInput.communityID.trim() !== "") {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formInput.communityID]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let inputError = {
      communityID: "",
    };

    // Check if first name is empty
    if (formInput.communityID.trim() === "") {
      // If first name is empty, set error message
      inputError.communityID = "Community ID should not be empty";
    }

    // Set the form errors
    setFormError(inputError);

    // If any errors were found, return early
    if (inputError.communityID) {
      return;
    }

    // If no errors, proceed with form submission
    nextLoginPage(1);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-[6px]">
          <Label className={`text-neutralN700`}>Community ID</Label>
          <Input
            required
            type={"text"}
            name={"communityID"}
            className={`rounded-lg border text-neutralN900 ${formError.communityID && "border-red01"}`}
            value={formInput.communityID}
            onChange={({ target }) =>
              handleUserInput(target.name, target.value)
            }
          />
          <p className="text-sm font-medium text-red01">
            {formError.communityID}
          </p>
        </div>
        <PrimaryButton isLoading={isLoading} formValid={formValid} validated>
          Continue
        </PrimaryButton>
      </form>
    </div>
  );
};

export default CommunityIdForm;
