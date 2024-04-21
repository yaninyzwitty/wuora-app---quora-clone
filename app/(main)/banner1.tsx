import {cn} from "@/lib/utils";
import BannerItem from "./banner-item";

function BannerTwo({className}: {className?: string}) {
  return (
    <div className={cn("border-neutral-700 p-3", className)}>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl">Explore</h2>
        <span className="bg-amber-900 text-white rounded-md text-sm px-1">
          Beta
        </span>
      </div>

      <BannerItem />
      <BannerItem />
      <BannerItem />
      <BannerItem />
      <p className="text-[14px] text-blue-500 my-2 cursor-pointer">Show more</p>
    </div>
  );
}

export default BannerTwo;
