import { CreateUser, UpdateUser } from '@/api/UserAPI'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
    const { user } = useAuth0()
    const navigate = useNavigate()
    const { mutateCreateUser } = CreateUser()
    const { mutateUpdateUser } = UpdateUser()

    const hasCreateUser = useRef(false)

    useEffect(() => {
        if (user?.sub && user?.email && !hasCreateUser.current) {
            mutateCreateUser({
                auth0Id: user.sub,
                email: user.email,
            });
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
        <>Loading...</>
    )
}
