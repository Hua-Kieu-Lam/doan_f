/* eslint-disable @typescript-eslint/no-explicit-any */
import VoteBar from "./VoteBarItem";
import { renderStarProduct } from "../../utils/helpers";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const Review = ({ totalRating, ratings }: any) => {
  return (
    <div className="flex w-full">
      <div className="flex-2 border w-full flex flex-col items-center justify-center">
        <span className="font-semibold text-[18px] flex items-center">{`${totalRating}/5`}</span>
        <span className="flex py-2">
          {renderStarProduct(totalRating)?.map((item, index) => (
            <span key={index}>
              {item === "a" ? <FaStar color="orange" size={16}/> : <CiStar color="orange" size={16}/>}
            </span>
          ))}
        </span>
        <span className="text-[12px]">{`${ratings?.length} reviewers and comments`}</span>
      </div>
      <div className="flex-3 border w-full p-4 flex flex-col gap-2">
        {Array.from(Array(5).keys())
          .reverse()
          .map((item) => (
            <VoteBar
              key={item}
              number={item + 1}
              // totalCount={ratings?.filter((i: any) => i.star === item + 1).length}
              // totalRating={ratings?.length}
            />
          ))}
      </div>
    </div>
  );
};

export default Review;
