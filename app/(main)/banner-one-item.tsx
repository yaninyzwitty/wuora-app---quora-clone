import {Button} from "@/components/ui/button";
import {images} from "@/lib/constants";
import Image from "next/image";
import React from "react";

function BannerOneItem({
  image,
  name,
  nickname,
}: {
  image: string;
  name: string;
  nickname: string;
}) {
  return (
    <div className="mt-2 flex items-center">
      <Image
        src={image}
        alt=""
        width={32}
        height={32}
        className="object-contain rounded-full"
      />
      <div className="flex flex-col px-4">
        <h2 className="font-bold ">{name}</h2>
        <p className="text-neutral-500 text-sm font-medium">{nickname}</p>
      </div>
      <Button className="ml-auto rounded-full bg-white font-bold text-black h-8 ">
        Follow
      </Button>
    </div>
  );
}

export default BannerOneItem;
