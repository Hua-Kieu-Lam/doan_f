/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";
import Button from "../Button/Button";
import Comment from "../Comment/Comment";

const Ratings = ({ handleToggleVote, ratings }: any) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 mt-4">
      <span>Do you reviews this product?</span>
      <Comment
            name={`Name`}
            star={4}
            comment={"Test"}
            updatedAt={Date.now}
          />
      <Button name={"Vote now!"} handleOnClick={handleToggleVote} fw={false} />
      {ratings?.map((item: any) => {
        return (
          <Comment
            name={`Name`}
            star={4}
            comment={"Test"}
            updatedAt={Date.now}
          />
        );
      })}
    </div>
  );
};

export default memo(Ratings);
