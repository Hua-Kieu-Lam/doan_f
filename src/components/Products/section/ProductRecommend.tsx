import React from 'react';
import { ProductImg } from './ProductImg';
import { Link } from 'react-router-dom';
export default function ProductRecommend() {

    return (
        <>
            <div className="text-xl font-bold my-[10px]">SẢN PHẨM TƯƠNG TỰ</div>

            <Link to='/product' className="grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    ProductImg.map((product) => (
                        <div className="bg-white p-4 shadow-md rounded ">
                            <img src={product} alt="Product" className="w-full h-40 object-cover rounded border" />
                            <div className="text-lg font-semibold mt-2 text-center">10000000 VND</div>
                        </div>
                    ))
                }
            </Link>
        </>
    );
}