import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import React from "react";

function Banner({className}: {className?: string}) {
  return (
    <div className={cn("border-neutral-700 p-3", className)}>
      <div className=" flex flex-col items-start">
        <h2 className="text-xl font-bold">Subscribe to premium</h2>
        <p className="text-sm mt-2">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>

        <Button className="bg-sky-500 rounded-full my-2 hover:bg-sky-600 font-semibold ">
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default Banner;
