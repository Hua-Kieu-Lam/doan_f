/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const renderStarProduct = (number: number | string) => {
  if (!Number(number)) {
    number = 0;
    //return;
  }
  let star = [];
  number = Math.round(+number);
  for (let i = 0; i < +number; i++) {
    star.push("a");
  }
  for (let i = 5; i > +number; i--) {
    star.push("b");
  }

  console.log("star: ", star);
  return star;
};
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


