import {cn} from "@/lib/utils";
import React from "react";
import {images, sidebarContent} from "@/lib/constants";
import SidebarItem from "./sidebar-item";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {PlusIcon} from "lucide-react";

function Sidebar({className}: {className?: string}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center lg:items-start space-y-1 pt-2",
        className
      )}
    >
      <Button className="bg-transparent rounded-full h-14 w-14 ">
        <Image
          src={"/images/twitter.svg"}
          alt="twitter"
          width={50}
          height={50}
        />
      </Button>
      {sidebarContent.map((item) => (
        <SidebarItem
          key={item.name}
          icon={item.icon}
          name={item.name}
          // @ts-ignore
          notifications={item.notifications}
          // @ts-ignore
          messages={item.messages}
        />
      ))}

      <Button className="rounded-full bg-sky-500 h-10 w-10 hover:bg-sky-600/75 lg:mx-4">
        <PlusIcon className="h-6 w-6 " />
      </Button>

      <Button className="h-10 w-10 rounded-full relative  lg:mx-4 mt-4">
        <Image
          src={images[0]}
          alt="image1"
          fill
          className="rounded-full  h-full object-cover"
        />
      </Button>
    </div>
  );
}

export default Sidebar;
