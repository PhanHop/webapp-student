import EnvDocOutlineIcon from "../icons_ds/EnvDocOutlineIcon";
import EnvExcelOutlineIcon from "../icons_ds/EnvExcelOutlineIcon";
import EnvFileAnhOutlineIcon from "../icons_ds/EnvFileAnhOutlineIcon";
import EnvMp3OutlineIcon from "../icons_ds/EnvMp3OutlineIcon";
import EnvMp4OutlineIcon from "../icons_ds/EnvMp4OutlineIcon";
import EnvPPTXOutlineIcon from "../icons_ds/EnvPPTXOutlineIcon";
import EnvPdfOutlineIcon from "../icons_ds/EnvPdfOutlineIcon";
import EnvZipOutlineIcon from "../icons_ds/EnvZipOutlineIcon";
import React from "react";

type Props = { fileName: string; width?: number; height?: number };
export default function AppIconFile({
  fileName,
  width = 24,
  height = 24,
}: Props) {
  const iconUrl = getStyleFile(fileName);
  let icon;
  switch (iconUrl) {
    case TypeFile.IMAGE:
      icon = (
        <EnvFileAnhOutlineIcon width={width} height={height} fill="#1876F2" />
      );
      break;
    case TypeFile.DOC:
      icon = <EnvDocOutlineIcon width={width} height={height} fill="#265FAE" />;
      break;
    case TypeFile.EXCEL:
      icon = (
        <EnvExcelOutlineIcon width={width} height={height} fill="#148E51" />
      );
      break;
    case TypeFile.PDF:
      icon = <EnvPdfOutlineIcon width={width} height={height} fill="#F9260B" />;
      break;
    case TypeFile.POWERPOINT:
      icon = (
        <EnvPPTXOutlineIcon
          width={Number(width - 2)}
          height={Number(height - 2)}
          fill="#D04423"
        />
      );
      break;
    case TypeFile.TEXT:
      icon = <EnvDocOutlineIcon width={width} height={height} fill="#1876F2" />;
      break;
    case TypeFile.VIDEO:
      icon = <EnvMp4OutlineIcon width={width} height={height} fill="#CC4F4B" />;
      break;
    case TypeFile.ZIP:
      icon = <EnvZipOutlineIcon width={width} height={height} fill="#F9AC16" />;
      break;
    case TypeFile.AUDIO:
      icon = <EnvMp3OutlineIcon width={width} height={height} fill="#1876F2" />;
      break;
  }
  return <>{icon}</>;
}
export enum TypeFile {
  VIDEO = "VIDEO",
  IMAGE = "IMAGE",
  DOC = "DOC",
  EXCEL = "EXCEL",
  PDF = "PDF",
  POWERPOINT = "POWERPOINT",
  TEXT = "TEXT",
  ZIP = "ZIP",
  AUDIO = "AUDIO",
}
export const getStyleFile = function (url: string) {
  let ext = url.split(".").pop();
  if (ext === "mp3" || ext === "MP3") return TypeFile.AUDIO;
  if (
    ext == "mp4" ||
    ext == "flv" ||
    ext == "avi" ||
    ext === "MP4" ||
    ext === "FLV" ||
    ext === "AVI"
  )
    return TypeFile.VIDEO;
  if (ext == "rar" || ext == "zip" || ext == "RAR" || ext == "ZIP")
    return TypeFile.ZIP;
  if (
    ext == "jpeg" ||
    ext == "JPEG" ||
    ext == "jpg" ||
    ext == "JPG" ||
    ext == "png" ||
    ext == "PNG" ||
    ext == "gif" ||
    ext == "GIF" ||
    ext === "heic" ||
    ext === "HEIC"
  )
    return TypeFile.IMAGE;
  if (ext == "doc" || ext == "docx" || ext == "DOC" || ext == "DOCX")
    return TypeFile.DOC;
  if (ext == "xls" || ext == "xlsx" || ext == "XLS" || ext == "XLSX")
    return TypeFile.EXCEL;
  if (ext == "pdf" || ext == "PDF") return TypeFile.PDF;
  if (
    ext == "pptx" ||
    ext == "pptm" ||
    ext == "ppt" ||
    ext == "PPTX" ||
    ext == "PPTM" ||
    ext == "PPT"
  )
    return TypeFile.POWERPOINT;
  if (ext == "txt" || ext == "TXT") return TypeFile.TEXT;
};
