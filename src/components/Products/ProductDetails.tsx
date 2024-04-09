import ProductForm from "./section/ProductForm";
import ProductImages from "./section/ProductImages";
import ProductInfo from "./section/ProductInfo";


export default function ProductDetails() {
    return (
        <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
            <ProductImages />

            <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
                {/* <BackToProductButton /> */}
                <ProductInfo
                />
                <ProductForm
                />
            </div>
        </div>

    )
}
