import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import UserNameMenu from './dropdown-menu/UserNameMenu'

export default function Navbar() {
    const { loginWithRedirect, isAuthenticated } = useAuth0()
    return (
        <div className='flex justify-between'>
            <div>
                <Link to="/">
                    <Button
                        variant="ghost"
                        className='ml-5 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500'
                    >
                        Trang chủ
                    </Button>
                </Link>
                <Link to="/shops">
                    <Button
                        variant="ghost"
                        className='ml-5 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500'
                    >
                        Mua sắm
                    </Button>
                </Link>
                <Link to="/manage-product">
                    <Button
                        variant="ghost"
                        className='ml-5 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500'
                    >
                        Thêm sản phẩm
                    </Button>
                </Link>
                <Link to="/manage-shop">
                    <Button
                        variant="ghost"
                        className='ml-5 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500'
                    >
                        Tạo cửa hàng
                    </Button>
                </Link>

            </div>

            <span className="flex space-x-2 items-center">
                {isAuthenticated ?
                    <UserNameMenu />
                    :
                    <Button
                        variant="ghost"
                        className='font-bold text-white bg-blue-500 hover:font-bold hover:text-white hover:bg-blue-600'
                        onClick={async () => await loginWithRedirect()}
                    >
                        Đăng nhập
                    </Button>
                }
            </span>

        </div>
    )
}

