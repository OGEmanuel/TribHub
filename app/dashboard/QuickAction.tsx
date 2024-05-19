"use client";

import { GeistSans } from "geist/font/sans";
import SecondaryButton from "@/components/SecondaryButton";
import PayoutCardIcon from "@/public/icons/PayoutCardIcon";
import CommunityIcon from "@/public/icons/CommunityIcon";
import BlueCheckIcon from "@/public/icons/BlueCheckIcon";
import { useState } from "react";

const QuickAction = () => {
  const [communityStatus, setCommunityStatus] = useState(false);
  const [payoutStatus, setPayoutStatus] = useState(false);

  // for (let i = 0; i < 3; i++) {
  //   data.push({
  // id: faker.string.uuid(),
  //     // status: Math.random() < 0.5 ? "Checked" : "Unchecked",
  //     commuintyStatus: "unchecked",
  //     payoutStatus: "unchecked",
  //   });
  // }

  return (
    <>
      {!payoutStatus && !communityStatus && (
        <div className="mb-6 rounded-2xl border !border-neutralN40 bg-neutralN0">
          <h2
            className={`${GeistSans.className} border-b border-b-neutralN30 py-6 pl-4 text-lg font-medium text-neutralN700`}
          >
            Get started
          </h2>
          <div className="flex flex-col gap-4 p-4">
            {!communityStatus && (
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
                {communityStatus ? (
                  <BlueCheckIcon />
                ) : (
                  <SecondaryButton onClick={() => setCommunityStatus(true)}>
                    Create community
                  </SecondaryButton>
                )}
              </div>
            )}
            {!payoutStatus && (
              <div className="flex items-center justify-between">
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
                {payoutStatus ? (
                  <BlueCheckIcon />
                ) : (
                  <SecondaryButton onClick={() => setPayoutStatus(true)}>
                    Add account
                  </SecondaryButton>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default QuickAction;
