import { Button } from "@/components/ui/button";
import { Bell, Plus, User } from "lucide-react";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="p-2 flex justify-between border-b border-gray-100 shadow-sm ">
      <div className="flex items-center">
        <Image src={"/logo.png"} alt={"logo"} width={60} height={60} />
        <h2 className="text-4xl ml-2">LawMate</h2>
      </div>

      <div className="flex items-center gap-5">
        <Button className="ml-auto bg-[#FB923C]">
          <Plus size={24} className="mr-2" />
          Ask a Question
        </Button>
        <Bell size={30} className="ml-2 cursor-pointer" />
        <Image src={"/profile.png"} alt={"avatar"} width={50} height={50} />
      </div>
    </div>
  );
}

export default Header;
