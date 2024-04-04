import { useAuth0 } from "@auth0/auth0-react"
import { useMutation } from "react-query"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

type CreateUserRequest = {
    auth0Id: string,
    email: string,
}

export function CreateUser() {
    const { getAccessTokenSilently } = useAuth0()

    const createUserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/user`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        if (!response.ok) {
            throw new Error('Thất bại khi tạo người dùng!')
        }
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
    const updateUserRequest = async (formData: UpdateUserRequest) => {
        const accessToken = await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/user`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        if (!response.ok) {
            throw new Error('Thất bại khi cập nhật người dùng!')
        }
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