import { Dot } from 'lucide-react'
import { AspectRatio } from '../ui/aspect-ratio'
import { getShopList } from '@/api/ShopsAPI';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Item {
    _id: string;
    nameShop: string;
    address: string;
    slug: string;
    thumb: string;
}

export default function ShopList() {
    const { mutateGetShopList } = getShopList()
    const [shopList, setShopList] = useState<Item[]>([]);

    const navigate = useNavigate();


    const fetchShopList = async () => {
        const response = await mutateGetShopList();
        if (response.success) {
            setShopList(response.data)
        }
    }

    useEffect(() => {
        fetchShopList();
    }, [])
    return (
        <>
                {shopList.map((shop) => (
                    <div key={shop._id} onClick={() =>
                        navigate(
                          `/shop/${shop?._id}/${shop?.nameShop}`
                        )
                      } className="grid lg:grid-cols-[2fr_3fr] gap-5 group cursor-pointer p-4 border shadow-md rounded">
                        <div >
                            <AspectRatio ratio={16 / 9}>
                                <img src={shop?.thumb} className='rounded-md w-full h-full object-cover' />
                            </AspectRatio>

                            <div className='flex flex-col justify-around'>
                                <h2 className='text-2xl font-bold mb-2 border-b pb-2'>{shop.nameShop}</h2>
                                <div className="flex gap-2 flex-col">
                                    <div className='flex items-center gap-1 text'>{shop.address}</div>
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
                    </div>
                ))}
                
            
        </>
    )
}
