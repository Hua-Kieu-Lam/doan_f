/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { getShopList } from '@/api/ShopsAPI'
import { useEffect, useState, memo } from 'react'

interface Item {
    _id: string;
    nameShop: string;
    address: string;
    slug: string;
}



function SelectShop({onData}: any) {
    const { mutateGetShopList } = getShopList()
    const [shopList, setShopList] = useState<Item[]>([]);
    const [value, setValue] = useState('');


    const fetchShopList = async () => {
        const response = await mutateGetShopList();
        if (response.success) {
            setShopList(response.data)
        }
    }

    useEffect(() => {
        if (value) {
            onData(value);
        }
    }, [value])

    useEffect(() => {
        fetchShopList();
    }, [])
    return (
        <>
            <div>
                <h2 className='text-2xl font-bold'>Chọn cửa hàng</h2>
            </div>
            <Select value={value} onValueChange={setValue}>
                <SelectTrigger className="w-full" name=''>
                    <SelectValue placeholder="Chọn cửa hàng" />
                </SelectTrigger>
                <SelectContent>
                    {shopList.map((shop) => (
                        <SelectItem key={shop._id} value={shop._id}>
                            {shop.nameShop}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>
    )
}

export default memo(SelectShop)

