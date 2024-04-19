/* eslint-disable @typescript-eslint/no-explicit-any */
import { Rating } from "@material-tailwind/react"
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from "../ui/button"
import formatPrice from "../../utils/formatPrice"
import { useNavigate } from "react-router-dom"

export default function ProductList({ products }: any) {
    const navigate = useNavigate();
    return (
        <>
            {products?.map((product: any) => (
                <div key={product?._id} onClick={() => navigate(`/product/${product?._id}`)} className="grid lg:grid-cols-[2fr_3fr] gap-5 group cursor-pointer p-4 border shadow-md rounded">
                    <AspectRatio ratio={16 / 9}>
                        <img src={product?.thumb} className='rounded-md w-full h-full object-cover border' alt="Hinh anh san pham" />
                    </AspectRatio>
                    <div>
                        <h2 className='text-2xl font-bold mb-2 border-b pb-2'>{product?.name}</h2>

                        <div className='grid sm:grid-cols-2 gap-2'>
                            <div className='flex flex-col flex-wrap'>
                                <div className='flex items-center gap-2'>
                                    Category: {product?.categoryId?.name}
                                </div>
                                <div className='flex items-center gap-2 '>
                                    Brand: {product?.brand}
                                </div>
                            </div>
                            <div className='flex gap-2 flex-col'>
                                <div className='flex items-center gap-2 text-yellow-400'>
                                    <Rating value={4} readonly />
                                </div>
                                <div className='flex items-center gap-2 '>
                                    Còn hàng {product?.quantity}
                                </div>

                            </div>

                            <div className='flex flex-row flex-wrap font-bold text-red-500'>
                                {formatPrice(product?.price)}
                            </div>
                                <Button className="max-w-[200px]">Thêm vào giỏ hàng</Button>
                            </div>

                            <div className='flex items-center gap-2'>
                                {product?.categoryId?.description}
                            </div>
                    </div>
                </div>
            ))}
        </>
    )
}
