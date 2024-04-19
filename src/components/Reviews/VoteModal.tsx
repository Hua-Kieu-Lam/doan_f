/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useRef, useState } from "react";
import { voteOption } from "../../utils/constants";
import Button from "../Button/Button";
import { FaStar } from "react-icons/fa";



const VoteModal = ({ nameProduct, handleSubmitRatings }: any) => {
  const [star, setStar] = useState<any>(0);
  const [comment, setComment] = useState("");
  const modalRef = useRef<any>();

  useEffect(() => {
    modalRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
  }, []);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      ref={modalRef}
      className="bg-white p-6 rounded-md flex flex-col gap-4 items-center justify-center z-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      <div>
        <a className="shadow-md p-2 text-3xl font-bold tracking-tight text-blue-500 rounded" href="/">ProHome</a>
      </div>
      <h2 className="text-center text-xl font-bold mt-4">{`Rating ${nameProduct}`}</h2>
      <textarea
        className="form-textarea w-full p-4 text-xl border rounded-md"
        placeholder="Type somethings"
        rows={3}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div className="border border-gray-300 rounded-md p-4">
        <span>How do you like this product?</span>
        <div className="flex gap-3 p-4">
          {voteOption.reverse().map((item) => {
            return (
              <div
                onClick={() => setStar(item.id)}
                className="flex justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-300 cursor-pointer items-center w-[100px] flex-col gap-3 p-4 bg-gray-200 rounded-md"
                key={item.id}
              >
                {Number(star) && star >= item.id ? (
                  <FaStar color="orange" />
                ) : (
                  <FaStar color="gray" />
                )}
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
      <Button
        name={"Rating"}
        handleOnClick={() => handleSubmitRatings({ star, comment })}
      />
    </div>
  );
};

export default memo(VoteModal);
