/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import formatPrice from '../../../utils/formatPrice'
import { getProductByCategoryId } from '@/api/ProductsAPI';


export default function ProductRecommend({ categoryId }: any) {
    const { mutateGetProductByCategoryId } = getProductByCategoryId()
    const [products, setProducts] = useState<any>();

    const fetchProductByCategoryId = async () => {
        if (categoryId) {
            const response = await mutateGetProductByCategoryId(categoryId);
            if (response.success) {
                setProducts(response.product)
            }
        }
    }

  
    useEffect(() => {
        fetchProductByCategoryId();
    }, [categoryId]);
    const navigate = useNavigate();
    return (
        <>
            <div className="text-xl font-bold my-[10px]">SẢN PHẨM TƯƠNG TỰ</div>

            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    products?.map((product: any) => (
                        <div className="bg-white p-4 shadow-md rounded cursor-pointer" onClick={() => navigate(`/product/${product?._id}`)}>
                            <img src={product?.thumb} alt="Product" className="w-full h-40 object-cover rounded border" />
                            <div className="text-lg font-semibold mt-2 text-center">{product?.name}</div>
                            <div className="text-lg font-semibold mt-2 text-center">{formatPrice(product?.price) }</div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}