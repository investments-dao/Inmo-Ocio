"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

function Logo({}: Props) {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <Image
        alt="logo"
        className="rounded-lg hidden md:block cursor-pointer"
        height="100"
        width="200"
        src="/logo.png"
      />
    </div>
  );
}

export default Logo;
