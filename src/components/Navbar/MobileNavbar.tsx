
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-blue-500" />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between ">
                <div>
                    <SheetTitle>
                        <div className="mb-2 py-2 border-b border-b-gray-500">
                            <span>Chào mừng đến với cửa hàng kinh doanh nội thất Prohome!</span>
                        </div>
                    </SheetTitle>
                    <SheetDescription className="flex">
                        <Button
                            className="flex-1 font-bold bg-white my-2 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500"
                        >
                            <Link to="/">
                                Trang chủ
                            </Link>
                        </Button>
                    </SheetDescription>
                    <SheetDescription className="flex">
                        <Button
                            className="flex-1 font-bold bg-white my-2 border-2 text-black hover:font-bold hover:text-white hover:bg-blue-500"
                        >
                            <Link to="/shops">
                                Mua sắm
                            </Link>
                        </Button>
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
                        <Button className="flex-1 font-bold bg-blue-500 my-2">Đăng nhập</Button>
                    </SheetDescription>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavbar;
