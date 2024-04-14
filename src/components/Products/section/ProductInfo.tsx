import { Button } from "@/components/ui/button";
import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ProductInfo() {
    return (
        <>
            <div className=" font-primary">
                <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
                    {/* {title} */}
                    Sofa Living Room Furniture
                </h1>
                <div className="text-xs text-palette-primary font-medium px-1 grid md:grid-cols-2">
                    <div>Hãng: A Concept</div>
                    <div>Danh mục: Ghế</div>

                </div>
                <div className="text-xl text-palette-primary font-medium py-4 px-1">
                    <Rating />
                </div>

                <div className="text-xl text-palette-primary font-medium py-4 px-1">
                    100000 VND
                </div>
                <div className="text-xm text-palette-primary font-medium py-4 px-1">
                    Còn hàng: 10
                </div>
            </div>
            <div className="w-full flex flex-col justify-between">
                <div className="flex justify-start space-x-2 w-full">
                    <div className="flex flex-col items-start space-y-1 flex-grow-0">
                        <label className="text-gray-500 text-base">Số lượng</label>
                        <input
                            type="number"
                            inputMode="numeric"
                            id="quantity"
                            name="quantity"
                            min="1"
                            step="1"
                            value="1"
                            // value={quantity}
                            // onChange={(e) => updateQuantity(e.target.value)}
                            className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                        />
                    </div>
                    <div className="flex flex-col items-start space-y-1 flex-grow ">
                        <label className="text-gray-500 text-base">Màu sắc</label>
                        <select
                            id="color-selector"
                            name="color-selector"
                            // onChange={(event) => handleColorChange(event.target.value)}
                            className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
                        >
                            <option value="red">Đỏ</option>
                            <option value="green">Xanh lá</option>
                            <option value="blue">Xanh dương</option>
                            <option value="yellow">Vàng</option>
                        </select>
                    </div>
                </div>
                <Button
                    aria-label="cart-button"
                    className='mt-[30px] border-2 text-white bg-blue-500 hover:font-bold hover:text-white hover:bg-blue-600'
                    variant="ghost"
                // onClick={handleAddToCart}
                >
                    Add To Cart
                    <FontAwesomeIcon icon={faShoppingCart} className="w-5 ml-2" />
                </Button>
            </div>
        </>
    )
}



