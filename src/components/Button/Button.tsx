/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";

const Button = ({
  name,
  handleOnClick,
  style,
  iconBefore,
  iconAfter,
  fw,
  color,
  type = "button",
}: any) => {
  return (
    <button
      type={type}
      className={
        style
          ? style
          : `px-4 py-2 my-2 rounded-md text-white bg-black w-full font-semibold ${
              fw ? "w-full" : "w-fit"
            } ${color ? color : ""}`
      }
      onClick={() => handleOnClick && handleOnClick()}
    >
      {iconBefore}
      <span>{name}</span>
      {iconAfter}
    </button>
  );
};

export default memo(Button);
