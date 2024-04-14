/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from "react-query"
import axios from '../axios'

const API_BASE_URL = "http://localhost:8000"


export function getShopList() {

    const getShopListRequest = async () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return await axios({
            url: `${API_BASE_URL}/api/shop-list`,
            method: 'get',
        })

    }
    const {
        mutateAsync: mutateGetShopList,
        isLoading,
        isError,
        isSuccess
    // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useMutation(getShopListRequest)

    return {
        mutateGetShopList,
        isLoading,
        isError,
        isSuccess
    }
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

