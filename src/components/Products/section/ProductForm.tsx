import { Button } from '@/components/ui/button'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProductForm() {
    return (
        <div className="w-full flex flex-col justify-between">
            <div className="flex justify-start space-x-2 w-full">
                <div className="flex flex-col items-start space-y-1 flex-grow-0">
                    <label className="text-gray-500 text-base">Qty.</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        id="quantity"
                        name="quantity"
                        min="1"
                        step="1"
                        // value={quantity}
                        // onChange={(e) => updateQuantity(e.target.value)}
                        className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                    />
                </div>
                <div className="flex flex-col items-start space-y-1 flex-grow">
                    <label className="text-gray-500 text-base">Size</label>
                    <select
                        id="size-selector"
                        name="size-selector"
                        // onChange={(event) => handleSizeChange(event.target.value)}
                        className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
                    >

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
    )
}
