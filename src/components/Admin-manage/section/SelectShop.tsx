import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

export default function SelectShop() {
    return (
        <>
            <div>
                <h2 className='text-2xl font-bold'>Chọn cửa hàng</h2>
            </div>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn cửa hàng" />
                </SelectTrigger>
                <SelectContent>
                    {/* {shops.map((shop) => (
                        <SelectItem key={shop._id} value={shop._id}>
                            {shop.name}
                        </SelectItem>
                    ))} */}
                    <SelectItem value="1">Cửa hàng 1</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}
