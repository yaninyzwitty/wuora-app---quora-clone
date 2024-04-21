// pl-[75px] lg:pl-36 xl:pl-[330px]

import {Separator} from "@/components/ui/separator";
import {Settings} from "lucide-react";

function Header() {
  return (
    <div className=" lg:w-[675px] sticky top-0 z-50  h-full w-full border-b border-neutral-700 ">
      <div className="flex  pr-5 h-16">
        <div className=" w-1/3 hover:bg-neutral-800 transition-all duration-100 cursor-pointer text-center font-bold pt-5 flex-col flex relative ">
          For you
          <Separator
            className="absolute bottom-0 w-2/3
          mx-10 bg-sky-500 h-[2px]"
          />
        </div>
        <div className="  w-2/3 flex items-center">
          <span className="flex-1  h-full hover:bg-neutral-800 transition-all duration-100 text-center text-gray-600 text-sm font-medium  pt-5">
            Following
          </span>
          <span className="p-10 cursor-pointer">
            <Settings
              strokeWidth={2}
              className="h-6 w-6 transition-all duration-100 cursor-pointer "
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
