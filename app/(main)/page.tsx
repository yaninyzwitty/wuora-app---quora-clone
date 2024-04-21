import Image from "next/image";
import Explore from "./explore";
import Header from "./header";
import {images} from "@/lib/constants";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {Earth, ImageIcon, ImageUp, Network, SmileIcon} from "lucide-react";
// pl-[75px] lg:pl-36 xl:pl-[330px]

export default function Home() {
  return (
    <main className=" flex justify-start items-start   ">
      <div className="flex-col w-full lg:w-fit">
        <Header />
        <div className="p-4 space-y-3">
          <div className="flex items-center space-x-2">
            <Image
              src={images[0]}
              alt="image1"
              width={32}
              height={32}
              className="object-cover rounded-full h-10 w-10"
            />
            <Input
              className="w-full rounded-full bg-transparent  focus:ring-0 ring-offset-0 
              placeholder:text-neutral-700 text-xl
              
              focus-visible:ring-0 border-none focus-visible:ring-transparent focus-visible:ring-offset-0 "
              placeholder="What is happening?"
            />
          </div>
          <div className="flex  flex-col space-y-5">
            <p className="text-sky-600 text-sm font-bold flex gap-x-3 items-center px-12">
              <Earth className="text-sky-600" />
              Everyone can reply
            </p>
            <br className="w-full bg-rose-800 h-[3px]" />
            <div
              className="flex items-center space-x-4 text-sky-600  px-12
             mt-2"
            >
              <ImageIcon size={16} strokeWidth={2} />
              <ImageUp size={16} strokeWidth={2} />
              <SmileIcon size={16} strokeWidth={2} />
            </div>
          </div>
          <Separator className="border-b  border-neutral-700" />
        </div>
      </div>

      <Explore className="hidden lg:block" />
    </main>
  );
}
