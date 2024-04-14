/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProducts } from "@/api/ProductsAPI";
import { useEffect, useState } from "react";
import formatPrice from "../../../utils/formatPrice"
import Pagination from "@/components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";

type Res = {
    products: [],
    counts: number,
    success: boolean
}

export default function ListManageProduct() {
    const { mutateGetProducts } = getProducts()
    const [products, setProducts] = useState<Res>();
    const [params] = useSearchParams();

    const fetchProducts = async (params: any) => {
        const response = await mutateGetProducts({...params, limit: 2});
        if (response.success) {
            setProducts(response)
        }
    }
  
    useEffect(() => {
        const queries = Object.fromEntries([...params]);
        fetchProducts(queries);
    }, [params]);

    return (
        <div>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="py-6 px-4 md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Manage Products
                </h4>
            </div>

            <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-3 flex items-center">
                    <p className="font-medium">Product Name</p>
                </div>
                <div className="col-span-2 hidden items-center sm:flex">
                    <p className="font-medium">Category</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Price</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Sold</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Quantity</p>
                </div>
            </div>

            {products?.products?.map((product: any) => (
                <div
                    className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
                    key={product?._id}
                >
                    <div className="col-span-3 flex items-center">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <div className="h-12.5 w-15 rounded-md">
                            <img src={product?.thumb} alt="Product" />
                        </div>
                        <p className="text-sm text-black dark:text-white">
                            {product?.name}
                        </p>
                        </div>
                    </div>
                    <div className="col-span-2 hidden items-center sm:flex">
                        <p className="text-sm text-black dark:text-white">
                        {product?.brand}
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black dark:text-white">
                            {formatPrice(product?.price)}
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black dark:text-white">{product?.sold}</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-meta-3">{product?.quantity}</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-meta-3">{product?.shopListId?.nameShop}</p>
                    </div>
                </div>
            ))}
            </div>
            <Pagination totalCount={products?.counts}/>
        </div>
    );
}

