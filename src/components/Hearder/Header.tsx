import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[70px] py-[20px] flex justify-center items-center text-[15px] bg-white">
      <div className="flex gap-4">
        <Link href={"box-shadow"}> Box shadow</Link>
        <Link href={"text-shadow"}> Text shadow</Link>
        <Link href={"border"}> Border</Link>
        <Link href={"box-shadow"}> Tranforms</Link>
        <Link href={"box-shadow"}> Gradient</Link>
      </div>
    </div>
  );
};

export default Header;
