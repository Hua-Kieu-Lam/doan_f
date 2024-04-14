/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const useDebounce = (value: any, ms: any) => {
  const [debounce, setDebounce] = useState("");
  useEffect(() => {
    const setTimeOutId = setTimeout(() => {
      setDebounce(value);
    }, ms);

    return () => {
      clearTimeout(setTimeOutId);
    };
  }, [value, ms]);
  return debounce;
};

export default useDebounce;
