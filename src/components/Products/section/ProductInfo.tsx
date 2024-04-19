/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Rating from "./Rating";
import formatPrice from "../../../utils/formatPrice"

export default function ProductInfo({product}: any) {
    return (
        <>
            <div className=" font-primary flex flex-col gap-2">
                <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
                    {product?.name}
                </h1>
                <div className="text-xl text-palette-primary font-medium px-1 grid md:grid-cols-2">
                    <div>{product?.brand}</div>
                    <div>{product?.categoryId?.name}</div>

                </div>
                <div className="text-xl text-palette-primary font-medium py-4 px-1">
                    <Rating />
                </div>

                <div className="text-xl text-palette-primary font-medium px-1 pb-4">
                    {formatPrice(product?.price)}
                </div>

                <div className="w-full flex flex-col justify-between">
                    <div className="flex justify-start space-x-2 w-full">
                        <div className="flex flex-col items-start space-y-1 flex-grow-0">
                            <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quantity" required />
                        </div>
                        <div className="flex flex-col items-start space-y-1 flex-grow ">
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a color</option>
                                <option value="US">Red</option>
                                <option value="CA">Brown</option>
                            </select>
                        </div>
                    </div>
                    <Button
                        aria-label="cart-button"
                        className='mt-[30px] text-xl border-2 p-6 text-white bg-blue-500 hover:font-bold hover:text-white hover:bg-blue-600'
                        variant="ghost"
                    // onClick={handleAddToCart}
                    >
                        Add To Cart
                    </Button>
                </div>
            </div>
            
        </>
    )
}



