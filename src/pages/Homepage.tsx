import Slider from "@/components/Slider/Slider";
import { Button } from "@/components/ui/button";

export default function Homepage() {
    return (
        <div className="flex flex-col">
            <Slider />

            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col gap-5 text-center border border-black-500">
                <h1 className="text-2xl font-bold tracking-tight text-blue-500">
                    Cửa hàng kinh doanh nội thất Prohome!
                </h1>
                <span className='text-lg'>Đơn giản - Chất lượng - Hiệu quả</span>
                <Button className="w-auto m-auto font-bold text-white text-lg bg-blue-500 hover:text-white">Mua ngay</Button>

            </div>
        </div>
    )
}
