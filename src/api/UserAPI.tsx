import { useMutation } from "react-query"
import axios from '../axios'
import { useAuth0 } from "@auth0/auth0-react"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

type CreateUserRequest = {
    auth0Id: string,
    email: string,
}

export function CreateUser() {

    const createUserRequest = async (user: CreateUserRequest) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await axios({
            url: `${API_BASE_URL}/api/user`,
            method: 'post',
            data: user
        })

    }
    const {
        mutateAsync: mutateCreateUser,
        isLoading,
        isError,
        isSuccess
    } = useMutation(createUserRequest)

    return {
        mutateCreateUser,
        isLoading,
        isError,
        isSuccess
    }
}

type UpdateUserRequest = {
    avatar: string,
    username: string,
    phonenumber: number,
    address: string,
}

export function UpdateUser() {
    const { getAccessTokenSilently } = useAuth0()
    const updateUserRequest = async (user: UpdateUserRequest) => {
        const token = await getAccessTokenSilently()
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await axios({
            url: `${API_BASE_URL}/api/user/update`,
            method: 'put',
            data: user,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
    }

    const {
        mutateAsync: mutateUpdateUser,
        isLoading,
        isError,
        isSuccess,
        error,
        reset
    } = useMutation(updateUserRequest)

    return {
        mutateUpdateUser,
        isLoading,
        isError,
        isSuccess,
        error,
        reset
    }
}