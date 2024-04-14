/* eslint-disable @typescript-eslint/no-explicit-any */

export const generateRange = (star: any, end: any) => {
  const length = end - star + 1;
  return Array.from({ length }, (_, index) => star + index);
};

export const convertFileToBase64 = (file: any) => {
  if (!file) {
    return "";
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
};
