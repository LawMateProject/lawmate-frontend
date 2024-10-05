import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="p-3 flex items-center">
      <Image src={"/logo.png"} alt={"logo"} width={80} height={80} />
      <h2 className="text-4xl ml-2">LawMate</h2>
    </div>
  );
}

export default Header;
