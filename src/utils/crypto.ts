import CryptoJS from "crypto-js";
//TODO: Take the secret from the .env

export const encodeHash = (token: string, questionId: number) => {
  const data = { token, questionId };
  const stringifiedData = JSON.stringify(data);
  const encryptedData = CryptoJS.AES.encrypt(
    stringifiedData,
    "your-secret-key"
  ).toString();
  return encryptedData;
};

export const decodeHash = (hash: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(hash, "your-secret-key");
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
  } catch (error) {
    console.error("Invalid hash", error);
    return null;
  }
};
