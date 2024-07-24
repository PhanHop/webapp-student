import dayjs from "dayjs";

const decodeBase64 = (sData: string) => {
  if (sData === null || sData === undefined || sData === "") {
    return "";
  }
  const buffer = Buffer.from(sData, "base64");
  const decode = buffer.toString();
  return decode;
};

export const decodeBase642018 = (sScript: string) => {
  const s1 = sScript.substr(0, 8);
  const s2 = sScript.substr(17, 8);
  const s3 = sScript.substr(34, 6);
  const s4 = sScript.substr(49, sScript.length - 49);
  const sBase64 = s1 + s2 + s3 + s4;
  const sData = decodeBase64(sBase64);
  return sData;
};

const encodeBase64 = (data: string) => {
  const b = Buffer.from(data);
  const s = b.toString("base64");
  return s;
};

export const encodeBase642018 = (sData: string) => {
  const sBase64 = encodeBase64(sData);
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charactersLength = characters.length;
  let randomString1 = "";
  let i = 0;
  for (i = 0; i < 9; i++) {
    randomString1 += characters[Math.floor(Math.random() * charactersLength)];
  }
  let randomString2 = "";
  let j = 0;
  for (j = 0; j < 9; j++) {
    randomString2 += characters[Math.floor(Math.random() * charactersLength)];
  }
  let randomString3 = "";
  let t = 0;
  for (t = 0; t < 9; t++) {
    randomString3 += characters[Math.floor(Math.random() * charactersLength)];
  }
  const s1 = sBase64.substr(0, 8);
  const s2 = sBase64.substr(8, 8);
  const s3 = sBase64.substr(16, 6);
  const s4 = sBase64.substr(22, sBase64.length - 22);
  const kq = s1 + randomString1 + s2 + randomString2 + s3 + randomString3 + s4;
  return kq;
};
