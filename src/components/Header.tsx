import { Link } from "react-router-dom";
import MobileNavbar from "./Navbar/MobileNavbar";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div className="shadow-lg py-6 fixed top-0 left-0 right-0 z-10 bg-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/' className="shadow-md p-2 text-3xl font-bold tracking-tight text-blue-500 rounded">
                    Prohome
                </Link>
                <div className="md:hidden">
                    <MobileNavbar />
                </div>
                <div className="flex flex-1 hidden md:block">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}
export default Header;
