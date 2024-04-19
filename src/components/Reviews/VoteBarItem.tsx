/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";


const VoteBar = ({ number, totalRating = 4, totalCount = 5 }: any) => {
  console.log({totalRating, totalCount})
  const percentRef = useRef<any>();
  useEffect(() => {
    const percent = totalCount
      ? Math.round((totalCount * 100) / totalRating)
      : 0;
    percentRef.current.style.cssText = `right: ${100 - percent}%`;
  }, [totalCount, totalRating]);
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex gap-2 items-center w-[10%]">
        <span className="w-2 font-semibold">{number}</span>
        <FaStar color="orange" size={16} />
      </div>
      <div className="h-[6px] relative bg-gray-200 w-[70%] rounded-full overflow-hidden">
        <div ref={percentRef} className="absolute bg-orange-500 inset-0"></div>
      </div>
      <div className="w-[15%] flex justify-end">
        <span className="text-[12px]">{`${totalCount || 0} reviews`}</span>
      </div>
    </div>
  );
};

export default VoteBar;
