import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
export default function CartIcon() {

    // const cart = 
    // const [cartItems, setCartItems] = useState(0)

    // useEffect(() => {
    //     let numItems = 0
    //     cart.forEach(item => {
    //         numItems += item.quantity
    //     })
    //     setCartItems(numItems)
    // }, [cart])
    return (
        <>
            <Link to='/cart'>
                <a className="relative" aria-label="cart">
                    <FontAwesomeIcon className="text-palette-primary w-[25px] h-[25px] m-auto " icon={faShoppingCart} />
                    {
                        // cartItems === 0 ?
                        //   null
                        //   :
                        <div
                            className="absolute top-0 right-[23px] text-xs bg-blue-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-4"
                        >
                            7
                            {/* {cartItems} */}
                        </div>
                    }
                </a>
            </Link>
        </>
    )
}
