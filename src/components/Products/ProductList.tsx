import { Rating } from "@material-tailwind/react"
import { Link } from 'react-router-dom'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from "../ui/button"

export default function ProductList() {
    return (
        <>
            <Link to='/product'>
                <div className="grid lg:grid-cols-[2fr_3fr] gap-5 group cursor-pointer p-4 border shadow-md rounded">
                    <AspectRatio ratio={16 / 9}>
                        <img src="" className='rounded-md w-full h-full object-cover border' alt="Hinh anh san pham" />
                    </AspectRatio>
                    <div>
                        <h2 className='text-2xl font-bold mb-2 border-b pb-2'>Tên sản phẩm</h2>

                        <div className='grid sm:grid-cols-2 gap-2'>
                            <div className='flex flex-col flex-wrap'>
                                <div className='flex items-center gap-1'>
                                    Category cua sp
                                </div>
                                <div className='flex items-center gap-1 '>
                                    Brand của sp
                                </div>
                            </div>
                            <div className='flex gap-2 flex-col'>
                                <div className='flex items-center gap-1 text-yellow-400'>
                                    <Rating value={4} readonly />
                                </div>
                                <div className='flex items-center gap-1 '>
                                    Còn hàng
                                </div>

                            </div>

                            <div className='flex flex-row flex-wrap font-bold text-red-500'>
                                20000000 VND
                            </div>
                            <Button className="max-w-[200px]">Thêm vào giỏ hàng</Button>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/product'>
                <div className="grid lg:grid-cols-[2fr_3fr] gap-5 group cursor-pointer p-4 border shadow-md rounded">
                    <AspectRatio ratio={16 / 9}>
                        <img src="" className='rounded-md w-full h-full object-cover border' alt="Hinh anh san pham" />
                    </AspectRatio>
                    <div>
                        <h2 className='text-2xl font-bold mb-2 border-b pb-2'>Tên sản phẩm</h2>

                        <div className='grid sm:grid-cols-2 gap-2'>
                            <div className='flex flex-col flex-wrap'>
                                <div className='flex items-center gap-1'>
                                    Category cua sp
                                </div>
                                <div className='flex items-center gap-1 '>
                                    Brand của sp
                                </div>
                            </div>
                            <div className='flex gap-2 flex-col'>
                                <div className='flex items-center gap-1 text-yellow-400'>
                                    <Rating value={4} readonly />
                                </div>
                                <div className='flex items-center gap-1 '>
                                    Còn hàng
                                </div>

                            </div>

                            <div className='flex flex-row flex-wrap font-bold text-red-500'>
                                20000000 VND
                            </div>
                            <Button className="max-w-[200px]">Thêm vào giỏ hàng</Button>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
