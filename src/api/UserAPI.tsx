import { useMutation } from "react-query"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

type CreateUserRequest = {
    auth0Id: string,
    email: string,
}
export function useCreateUser() {
    const createUserRequest = async (user: CreateUserRequest) => {
        const response = await fetch(`${API_BASE_URL}/api/user`, {
            method: 'POST',
            headers: {
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