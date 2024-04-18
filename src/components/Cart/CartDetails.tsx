import { useEffect, useState } from 'react';
import { Separator } from '../ui/separator';

export default function CartDetails() {
    const [quantity, setQuantity] = useState(1);
    const [deleteProduct, setDeleteProduct] = useState(true)
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(10000);
    const [shippingCost, setShippingCost] = useState(50000);

    useEffect(() => {
        calculateSubTotalPrice();
    }, [quantity]);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setQuantity((parseInt(event.target.value)))

    }
    const handleDelete = () => {
        setDeleteProduct(false);
    };
    const calculateSubTotalPrice = () => {
        const productPrice = 120000000; // gtri de test

        const newSubTotalPrice = productPrice * quantity;
        setSubTotalPrice(newSubTotalPrice);
    };
    const calculateTotalPrice = () => {
        const newTotalPrice = subTotalPrice - discount + shippingCost;
        setTotalPrice(newTotalPrice);
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [subTotalPrice, discount, shippingCost]);
    return (
        <>
            <section className="py-24 relative border rounded-md shadow-md">
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">

                    <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Giỏ hàng
                    </h2>
                    <div className="hidden lg:grid grid-cols-2 py-6">
                        <div className="font-normal text-xl leading-8 text-gray-500">Sản phẩm</div>
                        {/* <p className="font-normal text-xl leading-8 text-gray-500 flex items-center">
                            <span className="w-full max-w-[260px] text-center">Số lượng sản phẩm: </span>
                            <span className="w-full max-w-[200px] text-center">10</span>
                        </p> */}
                    </div>
                    {
                        deleteProduct &&
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">

                            <div
                                className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                                <div className="rounded-md border shadow-md"><img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/428/200/products/khong-co-tieu-de-900-603-px-900-900-px-24.jpg?v=1668523833667" alt="image" className="xl:w-[250px]" /></div>
                                <div className="pro-data w-full max-w-sm ">
                                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">Sofa
                                    </h5>
                                    <p
                                        className="font-normal text-xs leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                        Brand | Category</p>
                                    <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">120000000 VND</h6>
                                </div>
                            </div>
                            <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                                <div className="flex items-center w-full mx-auto justify-center">
                                    <button
                                        className=" group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                        onClick={handleDecrement}
                                    >
                                        <svg className="stroke-black transition-all duration-500"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                    <input
                                        type="number"
                                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                                        value={quantity}
                                        min="1"
                                        onChange={handleInputChange}
                                    />
                                    <button
                                        className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                        onClick={handleIncrement}
                                    >
                                        <svg className="stroke-black transition-all duration-500"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                                    {subTotalPrice} VND
                                </h6>
                                <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
                                    onClick={handleDelete}
                                >
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="fill-red-50 transition-all duration-500 group-hover:fill-red-400" cx="17" cy="17" r="17" fill="" />
                                        <path className="stroke-red-500 transition-all duration-500 group-hover:stroke-white" d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z" stroke="#EF4444" strokeWidth="1.6" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    }
                    <Separator />
                    <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                        <div className="flex items-center justify-between w-full mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-400">Tổng trị giá</p>
                            <h6 className="font-semibold text-xl leading-8 text-gray-900">{subTotalPrice} VND</h6>
                        </div>
                        <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                            <p className="font-normal text-xl leading-8 text-gray-400">Phí vận chuyển</p>
                            <h6 className="font-semibold text-xl leading-8 text-gray-900">{shippingCost} VND</h6>
                        </div>
                        <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                            <p className="font-normal text-xl leading-8 text-gray-400">Mã giảm giá</p>
                            <h6 className="font-semibold text-xl leading-8 text-gray-900">- {discount} VND</h6>
                        </div>
                        <div className="flex items-center justify-between w-full py-6">
                            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Thành tiền</p>
                            <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">{totalPrice} VND</h6>
                        </div>
                    </div>
                    <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                        <button
                            className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                            <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Add Coupon Code</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" strokeWidth="1.6"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Continue
                            to Payment
                            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                fill="none">
                                <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}