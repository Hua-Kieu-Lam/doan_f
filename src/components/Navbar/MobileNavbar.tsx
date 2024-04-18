
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavbar = () => {
    const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0()
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-blue-500" />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between ">
                <div>
                    <SheetTitle>
                        <div className="mb-2 py-2 border-b border-b-gray-500">
                            <span>Chào mừng {user?.name} đến với cửa hàng kinh doanh nội thất Prohome!</span>
                        </div>
                    </SheetTitle>
                    <SheetDescription className="flex">
                        <Link
                            to="/"
                            className="flex flex-1"
                        >
                            <Button
                                className="flex-1 font-bold bg-white my-2 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500"
                            >
                                Trang chủ
                            </Button>
                        </Link>
                    </SheetDescription>
                    <SheetDescription className="flex">
                        <Link
                            to="/shops"
                            className="flex flex-1"
                        >
                            <Button
                                className="flex-1 font-bold bg-white my-2 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500"
                            >
                                Mua sắm
                            </Button>
                        </Link>
                    </SheetDescription>
                    <SheetDescription className="flex">
                        <Button
                            className="flex-1 font-bold bg-white my-2 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500"
                        >
                            Đơn hàng
                        </Button>
                    </SheetDescription>
                </div>
                <div>
                    <SheetDescription className="flex">
                        {isAuthenticated ?
                            <Link
                                className="flex flex-1"
                                to="/user-profile"
                            >
                                <Button
                                    className="flex flex-1 font-bold bg-white my-2 border-2 text-black hover:font-bold hover:bg-gray-200"
                                >
                                    Thông tin cá nhân
                                </Button>
                            </Link>
                            :
                            <></>
                        }

                    </SheetDescription>
                    <SheetDescription className="flex">
                        {isAuthenticated ?
                            <Button
                                className="flex-1 font-bold bg-blue-500 my-2"
                                onClick={() => logout()}
                            >
                                Đăng xuất
                            </Button>
                            :
                            <Button className="flex-1 font-bold bg-blue-500 my-2"
                                onClick={async () => await loginWithRedirect()}
                            >
                                Đăng nhập
                            </Button>
                        }

                    </SheetDescription>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavbar;
