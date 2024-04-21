import {images} from "@/lib/constants";
import Image from "next/image";
import React from "react";

function BannerItem() {
  return (
    <div className="mt-2 border-b border-neutral-700">
      <h2 className="px-2 text-sm font-semibold ">
        Elon Musk Strikes Back: Accounts Involved in Engagement Farming to Be
        Suspended
      </h2>
      <div className="text-xs text-neutral-500 px-2 flex items-center mt-2 gap-x-3  py-2   ">
        <span className="flex -space-x-1 overflow-hidden">
          <Image
            className="inline-block h-6 w-6 rounded-full  "
            width={24}
            height={24}
            src={images[0]}
            alt=""
          />
          <Image
            className="inline-block h-6 w-6 rounded-full "
            width={24}
            height={24}
            src={images[1]}
            alt=""
          />
          <Image
            className="inline-block h-6 w-6 rounded-full  "
            width={24}
            height={24}
            src={images[2]}
            alt=""
          />
        </span>
        8 hrs ago .Technology
      </div>
    </div>
  );
}

export default BannerItem;
