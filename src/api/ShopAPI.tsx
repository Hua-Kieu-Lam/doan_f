/* eslint-disable react-refresh/only-export-components */
import { ShopType } from "@/types"
import axios from "axios"
import { useMutation } from "react-query"
import { toast } from "sonner"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const CreateShop = () => {

    const createShopRequest = async (shop: FormData): Promise<ShopType> => {
        console.log("shop: ", shop);
        const response = await axios({
            url: `${API_BASE_URL}/api/shop-list`,
            method: 'post',
            data: shop,
        })
        return response.data;
    }
    const {
        mutate: mutateCreateShop,
        isError,
        isSuccess
    } = useMutation(createShopRequest)
    if (isSuccess) {
        toast.error("Successfully created")
    }
    if (isError) {
        toast.error("Error created")
    }
    return { mutateCreateShop }
}

export function getShopListById() {

    const getShopListByIdRequest = async (sid: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return await axios({
            url: `${API_BASE_URL}/api/shop-list/${sid}`,
            method: 'get',
        })

    }
    const {
        mutateAsync: mutateGetShopListById,
        isLoading,
        isError,
        isSuccess
        // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useMutation(getShopListByIdRequest)

    return {
        mutateGetShopListById,
        isLoading,
        isError,
        isSuccess
    }
}