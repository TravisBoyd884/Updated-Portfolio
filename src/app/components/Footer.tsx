import React from "react";
import { IconCopyright } from "@tabler/icons-react";

export default function Footer() {
  return (
    <div className="w-screen h-10 bg-gray-700 absolute bottom-0 flex justify-center items-center text-white gap-5">
      <IconCopyright />
      Travis Boyd
    </div>
  );
}
