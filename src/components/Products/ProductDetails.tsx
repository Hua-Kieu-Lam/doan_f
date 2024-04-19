/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { Separator } from "../ui/separator";
import ProductDescription from "./section/ProductDescription";
import ProductImages from "./section/ProductImages";
import ProductInfo from "./section/ProductInfo";
import ProductRecommend from "./section/ProductRecommend";
import { useCallback, useEffect, useState } from "react";
import { getProductById } from "@/api/ProductsAPI";
import Ratings from "../Reviews/Ratings";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "@/redux/app/appSlice";
import VoteModal from "../Reviews/VoteModal";
import Review from "../Reviews/Review";



export default function ProductDetails() {
    const { pid } = useParams();

    const [product, setProduct] = useState<any>({});

    const { mutateGetProductById } = getProductById();

    const fetchProductById = async () => {
        if (pid) {
            const response = await mutateGetProductById(pid);
            if (response.success) {
                setProduct(response.product)
            }
        }
    }


    useEffect(() => {
        fetchProductById();
    }, [])
    
    const { isLoggedIn } = useSelector((state : any) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmitRatings = useCallback(async ({ star, comment }: any) => {
        console.log({ star, comment, pid });
        if (!star || !comment || !pid) {
          alert("Please vote when click");
          return;
        }
        // const response = await apiRatings({
        //   star,
        //   comment,
        //   pid,
        //   updatedAt: Date.now(),
        // });
        // if (response.success) {
        //   dispatch(
        //     showModal({
        //       isShowModal: false,
        //       childrenModal: null,
        //     })
        //   );
        //   //rerender();
        // }
      }, []);

    const handleToggleVote = () => {
    if (isLoggedIn) {
      dispatch(
        showModal({
          isShowModal: true,
          childrenModal: (
            <VoteModal
              nameProduct={product?.name}
              handleSubmitRatings={handleSubmitRatings}
            />
          ),
        })
      );
    } else {
      Swal.fire({
        text: "Login to ratings",
        confirmButtonText: "Go login",
        showCancelButton: true,
        title: "Bạn chưa đăng nhập",
      }).then((rs) => {
        if (rs.isConfirmed) {
          navigate(`/`);
        }
      });
    }
  };

    return (
        <>
            <div className="flex flex-col justify-between items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-10 lg:space-x-10 max-w-6xl w-11/12 mx-auto my-[20px]">
                <div>
                    <ProductImages thumb={product?.thumb} images={product?.images} />
                </div>
                <div className="flex flex-col justify-between ic h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
                    <ProductInfo product={ product} />
                </div>
            </div>
            <Separator />
            <div className="flex flex-col justify-center items-center md:flex-col md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto my-[20px]">
                <ProductDescription />
            </div>
            <Separator />
            <div className="pl-[16px] md:w-11/12 mx-auto my-[20px]">
                <Review
                    totalRating={4}
                    ratings={[]}
                    totalCountRating={18}
                />
                <Ratings handleToggleVote={ handleToggleVote} />
            </div>
            <Separator />
            <div className="pl-[16px] md:w-11/12 mx-auto my-[20px]">
                <ProductRecommend categoryId= {product?.categoryId?._id } />
            </div>
        </>

    )
}
