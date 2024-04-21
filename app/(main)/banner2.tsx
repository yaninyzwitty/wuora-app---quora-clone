import {cn} from "@/lib/utils";
import BannerOneItem from "./banner-one-item";
import {images} from "@/lib/constants";

function BannerOne({className}: {className?: string}) {
  return (
    <div className={cn("border-neutral-700 p-3", className)}>
      <div className="flex flex-col space-y-3">
        <h2 className="text-xl font-bold">Who to follow</h2>

        <BannerOneItem
          image={images[0]}
          name={"Teslarati"}
          nickname={"@Teslarati"}
        />
        <BannerOneItem
          image={images[1]}
          name={"Attack on titan"}
          nickname={"@AOShots"}
        />
        <BannerOneItem
          image={images[2]}
          name={"King romulus"}
          nickname={"@King_PRomulus"}
        />

        <p className="cursor-pointer text-blue-500 text-sm">show more</p>
      </div>
    </div>
  );
}

export default BannerOne;
