import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import React from "react";

function Search() {
  return (
    <div className="flex items-center justify-center relative  group rounded-full mx-10 h-11 ">
      <Input
        className="w-full rounded-full bg-neutral-800 px-10 focus:ring-0 ring-offset-0   focus-visible:ring-0 border-none focus-visible:ring-transparent focus-visible:ring-offset-0 "
        placeholder="Search"
      />
      <SearchIcon className="h-4 w-4 pointer-events-none group-active:text-blue-500 absolute left-3 mx-1" />
    </div>
  );
}

export default Search;
