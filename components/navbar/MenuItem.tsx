"use client";

import React from "react";

type Props = {
  onClick: () => void;
  label: string;
};

function MenuItem({ onClick, label }: Props) {
  return (
    <div
      className=" px-4 py-3 text-black hover:bg-neutral-400 transition font-semibold"
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default MenuItem;
