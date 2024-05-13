import MinusIcon from "@/public/icons/MinusIcon";
import { GeistSans } from "geist/font/sans";

const Metrics = () => {
  return (
    <div className="mb-6 flex justify-between">
      <div className="w-full">
        <div
          className={`${GeistSans.className} flex items-center justify-between font-medium`}
        >
          <div className="flex items-center gap-1">
            <div className="h-3 w-0.5 rounded-[13px] bg-purple01"></div>
            <h3 className="text-neutralN700">All members</h3>
          </div>
          <span className="flex items-center text-xs text-neutralN400">
            <MinusIcon />
            0%
          </span>
        </div>
        <p className="text-[1.75rem] font-semibold text-neutralN700">0</p>
      </div>
      <div className="mx-4 my-[5.5px] border border-neutralN30"></div>
      <div className="w-full">
        <div
          className={`${GeistSans.className} flex items-center justify-between font-medium`}
        >
          <div className="flex items-center gap-1">
            <div className="h-3 w-0.5 rounded-[13px] bg-orange01"></div>
            <h3 className="text-neutralN700">Communities</h3>
          </div>
          <span className="flex items-center text-xs text-neutralN400">
            <MinusIcon />
            0%
          </span>
        </div>
        <p className="text-[1.75rem] font-semibold text-neutralN700">0</p>
      </div>
      <div className="mx-4 my-[5.5px] border border-neutralN30"></div>
      <div className="w-full">
        <div
          className={`${GeistSans.className} flex items-center justify-between font-medium`}
        >
          <div className="flex items-center gap-1">
            <div className="h-3 w-0.5 rounded-[13px] bg-green01"></div>
            <h3 className="text-neutralN700">Resources</h3>
          </div>
          <span className="flex items-center text-xs text-neutralN400">
            <MinusIcon />
            0%
          </span>
        </div>
        <p className="text-[1.75rem] font-semibold text-neutralN700">0</p>
      </div>
      <div className="mx-4 my-[5.5px] border border-neutralN30"></div>
      <div className="w-full">
        <div
          className={`${GeistSans.className} flex items-center justify-between font-medium`}
        >
          <div className="flex items-center gap-1">
            <div className="h-3 w-0.5 rounded-[13px] bg-purple01"></div>
            <h3 className="text-neutralN700">Total link clicks</h3>
          </div>
          <span className="flex items-center text-xs text-neutralN400">
            <MinusIcon />
            0%
          </span>
        </div>
        <p className="text-[1.75rem] font-semibold text-neutralN700">-- --</p>
      </div>
    </div>
  );
};

export default Metrics;
