/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/app/appSlice";

const Modal = ({ children }: any) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() =>
        dispatch(showModal({ isShowModal: false, childrenModal: null }))
      }
      className="absolute inset-0 z-99999999 bg-gray-100 bg-opacity-50 flex justify-center items-center"
    >
      {children}
    </div>
  );
};

export default memo(Modal);
