import {ChevronsUp, MailPlus} from "lucide-react";
import Banner from "./banner";
import BannerTwo from "./banner1";
import BannerOne from "./banner2";
import Search from "./search";
import {cn} from "@/lib/utils";

function Explore({className}: {className?: string}) {
  return (
    <aside
      className={cn(
        "right-0 fixed w-[480px] h-full border-l border-neutral-700 px-2 py-5 overflow-y-auto ",
        className
      )}
    >
      <Search />

      <Banner className="mx-10 my-4  rounded-xl border h-[150px]" />
      <BannerTwo className="mx-10 my-4  rounded-xl border h-fit" />
      <BannerOne className="mx-10 my-4  rounded-xl border h-fit" />
      <div className=" border h-[70px] rounded-t-xl ml-14 border-neutral-700 shadow-lg text-white mb-auto  my-4 fixed bottom-0  bg-black w-[380px] border-t-2 shadow-slate-200 ">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold">Messages</h2>
          <div className="flex items-center gap-x-3">
            <MailPlus className="h-6 w-6" />
            <ChevronsUp className="h-6 w-6" />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Explore;
