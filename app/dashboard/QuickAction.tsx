import { GeistSans } from "geist/font/sans";
import SecondaryButton from "@/components/SecondaryButton";
import PayoutCardIcon from "@/public/icons/PayoutCardIcon";
import CommunityIcon from "@/public/icons/CommunityIcon";

const QuickAction = () => {
  return (
    <div className="mb-6 rounded-2xl border !border-neutralN40 bg-neutralN0">
      <h2
        className={`${GeistSans.className} border-b border-b-neutralN30 py-6 pl-4 text-lg font-medium text-neutralN700`}
      >
        Get started
      </h2>
      <div className="p-4">
        <div className="flex items-center justify-between border-b !border-neutralN40 pb-4">
          <div className="flex gap-2">
            <CommunityIcon />
            <div>
              <h3
                className={`${GeistSans.className} font-medium text-neutralN700`}
              >
                Create a new community
              </h3>
              <p className="text-sm text-neutralN400">
                Start your community journey immediately with ease.
              </p>
            </div>
          </div>
          <SecondaryButton>Create community</SecondaryButton>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div className="flex gap-2">
            <PayoutCardIcon />
            <div>
              <h3
                className={`${GeistSans.className} font-medium text-neutralN700`}
              >
                Set up payout card
              </h3>
              <p className="text-sm text-neutralN400">
                Connect your payout account and monetize your community
                effortlessly.
              </p>
            </div>
          </div>
          <SecondaryButton>Add account</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default QuickAction;
