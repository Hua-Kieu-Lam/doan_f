import { useCreateUser } from '@/api/UserAPI'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
    const { user } = useAuth0()
    const navigate = useNavigate()
    const { mutateCreateUser } = useCreateUser()

    const hasCreateUser = useRef(false)

    useEffect(() => {
        if (user?.sub && user?.email && !hasCreateUser.current) {
            mutateCreateUser({
                auth0Id: user.sub,
                email: user.email,
            })
            hasCreateUser.current = true
        }
        navigate('/')
    }, [mutateCreateUser, navigate, user])
    return (
        <>Loading...</>
    )
}
