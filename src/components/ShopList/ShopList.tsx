import { Dot } from 'lucide-react'
import { AspectRatio } from '../ui/aspect-ratio'

export default function ShopList() {
    return (
        <>
            <div className="grid lg:grid-cols-[2fr_3fr] gap-5 group cursor-pointer p-4 border shadow-md rounded">
                <AspectRatio ratio={16 / 9}>
                    <img src="" className='rounded-md w-full h-full object-cover' />
                </AspectRatio>

                <div className='flex flex-col justify-around'>
                    <h2 className='text-2xl font-bold mb-2 border-b pb-2'>Ten cua hang</h2>
                    <div className="flex gap-2 flex-col">
                        <div className='flex items-center gap-1 text'>Địa chỉ: Phường 1, Quận 1, Thành Phố Hồ Chí Minh</div>
                    </div>
                    <div className="">
                        <div className='flex flex-row flex-wrap'>
                            <div className='flex flex-row flex-wrap'>
                                <span className='flex'>
                                    <span>Ghế</span><Dot />
                                    <span>Kệ</span><Dot />
                                    <span>Giường</span><Dot />
                                    <span>Tủ</span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="grid lg:grid-cols-[2fr_3fr] gap-5 group cursor-pointer p-4 border shadow-md rounded">
                <AspectRatio ratio={16 / 9}>
                    <img src="" className='rounded-md w-full h-full object-cover' />
                </AspectRatio>
                <div className='flex flex-col justify-around'>
                    <h2 className='text-2xl font-bold mb-2 border-b pb-2'>Ten cua hang</h2>
                    <div className="flex gap-2 flex-col">
                        <div className='flex items-center gap-1 text'>Địa chỉ: Phường 1, Quận 1, Thành Phố Hồ Chí Minh</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                        <div className='flex flex-row flex-wrap'>
                            <span className='flex border p-2 rounded'>
                                <span>Bàn</span><Dot />
                                <span>Ghế</span><Dot />
                                <span>Kệ</span><Dot />
                                <span>Giường</span><Dot />
                                <span>Tủ</span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
