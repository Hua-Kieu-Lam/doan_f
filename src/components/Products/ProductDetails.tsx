import { Separator } from "../ui/separator";
import ProductDescription from "./section/ProductDescription";
import ProductImages from "./section/ProductImages";
import ProductInfo from "./section/ProductInfo";
import ProductRecommend from "./section/ProductRecommend";
import RatingPoint from "./section/RatingPoint";


export default function ProductDetails() {
    return (
        <>
            <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-10 lg:space-x-10 max-w-6xl w-11/12 mx-auto my-[20px]">
                <ProductImages />
                <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
                    {/* <BackToProductButton /> */}
                    <ProductInfo />
                </div>
            </div>
            <Separator />
            <div className="flex flex-col justify-center items-center md:flex-col md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto my-[20px]">
                <ProductDescription />
            </div>
            <Separator />
            <div className="pl-[16px] md:w-11/12 mx-auto my-[20px]">
                <RatingPoint />
            </div>
            <Separator />
            <div className="pl-[16px] md:w-11/12 mx-auto my-[20px]">
                <ProductRecommend />
            </div>
        </>

    )
}
