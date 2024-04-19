/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query"
import axios from '../axios'


const API_BASE_URL = "http://localhost:8000"

type CreateProductRequest = {
    name: string,
    description: string,
    brand: string,
    price: number,
    categoryId: string,
    shopListId: string,
    quantity: number,
    color: string,
    images: string
    thumb: string,
}


export function createProduct() {
    
    const createProductRequest = async (product: any) => {
        return await axios({
            url: `${API_BASE_URL}/api/product`,
            method: 'post',
            data: product,
        })

    }
    const {
        mutateAsync: mutateCreateProduct,
        isLoading,
        isError,
        isSuccess
    } = useMutation(createProductRequest)

    return {
        mutateCreateProduct,
        isLoading,
        isError,
        isSuccess
    }
}

export function getProductByShopId() {
    
    const getProductByShopIdRequest = async (sid: string) => {
        return await axios({
            url: `${API_BASE_URL}/api/product/get-product-shop/${sid}`,
            method: 'get',
        })

    }
    const {
        mutateAsync: mutateGetProductByShopId,
        isLoading,
        isError,
        isSuccess
    } = useMutation(getProductByShopIdRequest)

    return {
        mutateGetProductByShopId,
        isLoading,
        isError,
        isSuccess
    }
}

export function getProductByCategoryId() {
    
    const getProductByCategoryIdRequest = async (pid: string) => {
        return await axios({
            url: `${API_BASE_URL}/api/product/get-product-category/${pid}`,
            method: 'get',
        })

    }
    const {
        mutateAsync: mutateGetProductByCategoryId,
        isLoading,
        isError,
        isSuccess
    } = useMutation(getProductByCategoryIdRequest)

    return {
        mutateGetProductByCategoryId,
        isLoading,
        isError,
        isSuccess
    }
}

export function getProducts() {
    
    const getProductsRequest = async (params: any) => {
        return await axios({
            url: `${API_BASE_URL}/api/product/`,
            method: 'get',
            params: params,
        })

    }
    const {
        mutateAsync: mutateGetProducts,
        isLoading,
        isError,
        isSuccess
    } = useMutation(getProductsRequest)

    return {
        mutateGetProducts,
        isLoading,
        isError,
        isSuccess
    }
}


export function getProductById() {
    
    const getProductByIdRequest = async (pid: string) => {
        return await axios({
            url: `${API_BASE_URL}/api/product/${pid}`,
            method: 'get',
        })

    }
    const {
        mutateAsync: mutateGetProductById,
        isLoading,
        isError,
        isSuccess
    } = useMutation(getProductByIdRequest)

    return {
        mutateGetProductById,
        isLoading,
        isError,
        isSuccess
    }
}
