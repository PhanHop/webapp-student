import React from "react";
import { Avatar as AvatarMui } from "@mui/material";
import clsx from "clsx";

type Props = {
  name?: string;
  src?: string;
  className?: string;
  sx?: any;
};

export default function AppAvatar({
  src,
  name = "Avatar",
  className,
  sx,
}: Props) {
  return (
    <AvatarMui
      src={src}
      sx={{
        backgroundColor: stringToColor(name),
        ...sx,
      }}
      className={clsx(
        "mt-0 w-8 h-8 text-env-text-16 flex items-center justify-center !text-white",
        className
      )}
    >
      {getAvartaText(name)}
    </AvatarMui>
  );
}

function stringToColor(string: string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}
const getAvartaText = (name: string) => {
  name = name ? name.split(" ")[name.split(" ").length - 1] : "T";
  if (name !== null && name !== undefined && name.trim() !== "")
    return name.substr(0, 1);
  else return "";
};
