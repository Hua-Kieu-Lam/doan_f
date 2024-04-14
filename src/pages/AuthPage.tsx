import { CreateUser, UpdateUser } from '@/api/UserAPI'
import { login } from '@/redux/user/userSlice'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
    const { user } = useAuth0()
    const navigate = useNavigate()
    const { mutateCreateUser } = CreateUser()
    const { mutateUpdateUser } = UpdateUser()

    const hasCreateUser = useRef(false)
    const dispatch = useDispatch();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const LoginUser = async (auth0Id: any, email: any) => {
        const response = await mutateCreateUser({
            auth0Id: auth0Id,
            email: email,
        });
        console.log("res: ", response);
        if (response?.success) {
            dispatch(
                login({
                    isLoggedIn: true,
                    token: response.access_token,
                    userData: response.data,
                })
            );
        }
    }

        useEffect(() => {
            if (user?.sub && user?.email && !hasCreateUser.current) {
                LoginUser(user?.sub, user?.email)
                hasCreateUser.current = true;
            } else if (user?.sub && user?.email && user.address && hasCreateUser.current) {
                mutateUpdateUser({
                    avatar: user.avatar,
                    username: user.username,
                    phonenumber: user.phonenumber,
                    address: user.address,
                });
            }
            navigate('/')
        }, [mutateCreateUser, mutateUpdateUser, navigate, user])
        
    return (
        <div>Loading...</div>
    )
}
