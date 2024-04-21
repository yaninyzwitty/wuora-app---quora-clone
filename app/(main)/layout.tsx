import React, {PropsWithChildren} from "react";
import Sidebar from "./sidebar";

export default function MainLayout({children}: PropsWithChildren<{}>) {
  return (
    <div className="bg-black h-full text-white  ">
      <div className="flex h-full ">
        <Sidebar className="w-[75px] lg:w-36  xl:w-[330px] border-r  border-neutral-700 " />
        <div className="  w-full">{children}</div>
      </div>
    </div>
  );
}
