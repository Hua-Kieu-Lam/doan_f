import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function UserNameMenu() {
    const { user, logout } = useAuth0()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center px-3 font-bold gap-2 text-nowrap'>
                <Avatar>
                    <AvatarImage src={user?.picture} />
                </Avatar>
                {user?.name}
            </DropdownMenuTrigger>
            <DropdownMenuContent className='max-[767px]:hidden'>
                <DropdownMenuItem>
                    <Link
                        to='/user-profile'
                        className='font-bold'
                    >
                        Thông tin cá nhân
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button
                        className='flex flex-1 font-bold bg-blue-500'
                        onClick={() => logout()}
                    >
                        Đăng xuất
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
