/* eslint-disable @typescript-eslint/no-explicit-any */
const price = (x: any) => {
  return x?.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

export default price;
