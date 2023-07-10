"use client";

import Image from "next/image";
import React from "react";

type Props = {
  src: string | null | undefined;
  userName?: string | null | undefined;
};

function Avatar({ src, userName }: Props) {
  return (
    <div>
      {src ? (
        <Image
          className="rounded-full"
          height="30"
          width="30"
          alt=""
          src={src}
        />
      ) : userName ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="rounded-full h-[30px] w-[30px]"
          alt=""
          src={`https://ui-avatars.com/api/?name=${userName}`}
        />
      ) : (
        <Image
          className="rounded-full"
          height="30"
          width="30"
          alt=""
          src="/assets/avatar.png"
        />
      )}
    </div>
  );
}

export default Avatar;
