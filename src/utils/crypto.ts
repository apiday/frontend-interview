import CryptoJS from "crypto-js";

export const encodeHash = (
  token: string,
  formId: number,
  questionId: number
) => {
  const data = { token, formId, questionId };
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
    return JSON.parse(decryptedData); // Returns { token,formId, questionId }
  } catch (error) {
    console.error("Invalid hash", error);
    return null;
  }
};
