/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductList from '@/components/Products/ProductList'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Cart from '@/components/Cart/Cart';
import CategoryFilter from '@/components/CategoryFilter';
import { useEffect, useState } from 'react';
import { getShopListById } from '@/api/ShopsAPI';
import { useParams } from 'react-router-dom';
import { getProductByShopId } from '@/api/ProductsAPI';

interface Item {
    _id: string;
    nameShop: string;
    address: string;
    slug: string;
    thumb: string;
}



export default function ShopPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const {sid} = useParams();


    const handleCategoryChange = (categories: string[]) => {
        setSelectedCategories(categories);
    };

    const { mutateGetShopListById } = getShopListById()
    const { mutateGetProductByShopId } = getProductByShopId()
    const [shop, setShop] = useState<Item>();
    const [products, setProducts] = useState<any>();



    const fetchShopListById = async () => {
        if (sid) {
            const response = await mutateGetShopListById(sid);
            if (response.success) {
                setShop(response.data)
            }
        }
    }


    const fetchProductByShopId = async () => {
        if (sid) {
            const response = await mutateGetProductByShopId(sid);
            if (response.success) {
                setProducts(response.product)
            }
        }
    }


    useEffect(() => {
        fetchShopListById();
        fetchProductByShopId();
    }, [])


    return (

        <>
            <div className="flex flex-col gap-10">
                <AspectRatio ratio={16 / 5}>
                    <img src={shop?.thumb} alt="thumb" className='rounded-md object-cover h-full w-full' />
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
                    <ProductList products={products} />
                </div>
            </div>
        </>
    )
}
