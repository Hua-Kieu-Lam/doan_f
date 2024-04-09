import ProductList from '@/components/Products/ProductList'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Cart from '@/components/Cart/Cart';
import CategoryFilter from '@/components/CategoryFilter';
import { useState } from 'react';
export default function ShopPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoryChange = (categories: string[]) => {
        setSelectedCategories(categories);
    };

    return (

        <>
            <div className="flex flex-col gap-10">
                <AspectRatio ratio={16 / 5}>
                    <img src="" alt="" className='rounded-md object-cover h-full w-full' />
                </AspectRatio>
            </div>
            <div className='flex items-center justify-end my-4 pr-[30px] pt-[10px] rounded border h-[50px] bg-gray-50' >
                <Cart />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-5">
                <div>
                    <CategoryFilter
                        selectedCategories={selectedCategories}
                        onChange={handleCategoryChange}
                    />
                </div>

                <div className="flex flex-col gap-5">
                    <ProductList />
                </div>
            </div>
        </>
    )
}
