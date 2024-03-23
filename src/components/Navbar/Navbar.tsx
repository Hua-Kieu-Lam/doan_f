import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { useAuth0 } from '@auth0/auth0-react'

export default function Navbar() {
    const { loginWithRedirect } = useAuth0()
    return (
        <div className='flex justify-between'>
            <div>
                <Link to="/">
                    <Button
                        variant="ghost"
                        className='ml-10 mb-2 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500'
                    >
                        Trang chủ
                    </Button>
                </Link>
                <Link to="/shops">
                    <Button
                        variant="ghost"
                        className='ml-10 mb-2 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500'
                    >
                        Mua sắm
                    </Button>
                </Link>
                {/* <Link to="/">
                    <Button
                        variant="ghost"
                        className='ml-10 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500'
                    >
                        Đơn hàng
                    </Button>
                </Link> */}
                <Link to="/manage-shop">
                    <Button
                        variant="ghost"
                        className='ml-10 mb-2 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500'
                    >
                        Thêm cửa hàng
                    </Button>
                </Link>
                <Link to="/user-profile">
                    <Button
                        variant="ghost"
                        className='ml-10 mb-2 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500'
                    >
                        Thông tin người dùng
                    </Button>
                </Link>
            </div>
            <Button
                variant="ghost"
                className='font-bold text-white bg-blue-500 hover:font-bold hover:text-white hover:bg-blue-600'
                onClick={async () => await loginWithRedirect()}
            >
                Đăng nhập
            </Button>
        </div>
    )
}

