import {Button} from "@/components/ui/button";
import Image from "next/image";

type Props = {
  icon: string;
  name: string;
  notifications: number;
  messages: number;
};

function SidebarItem({icon, name, notifications, messages}: Props) {
  return (
    <>
      <Button className="flex justify-center lg:justify-start items-center lg:space-x-5   bg-transparent rounded-full h-14 w-14 lg:w-5/6   relative text-xl">
        <Image
          src={icon}
          alt={name}
          className="object-contain invert relative "
          width={35}
          height={35}
        />
        <span className="hidden lg:block ">{name}</span>
        {notifications > 0 && (
          <span className="h-5 w-5 top-1 text-xs right-0 rounded-full lg:hidden bg-sky-500 absolute flex items-center justify-center">
            {notifications}
          </span>
        )}
        {messages > 0 && (
          <span className="h-5 w-5 top-1 text-xs right-0 lg:hidden rounded-full bg-sky-500 absolute flex items-center justify-center">
            {messages}
          </span>
        )}
      </Button>
    </>
  );
}

export default SidebarItem;
