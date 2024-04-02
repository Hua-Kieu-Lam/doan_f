import { useMutation } from "react-query"
import axios from '../axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

type CreateUserRequest = {
    auth0Id: string,
    email: string,
}
export function useCreateUser() {
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