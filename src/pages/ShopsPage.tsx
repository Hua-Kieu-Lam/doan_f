import SearchBar, { formSchema } from "@/components/Search/SearchBar";
import ShopList from "@/components/ShopList/ShopList";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

export default function ShopsPage() {
    const navigate = useNavigate()
    const handleSearchSubmit = (searchValues: z.infer<typeof formSchema>) => {
        navigate({
            pathname: `/shops/${searchValues.searchQuery}`
        })
    }
    return (

        <div className='grid grid-cols-1 gap-5'>
            <SearchBar placeHolder="Nhập thông tin cần tìm" onSubmit={handleSearchSubmit} />
            <div></div>
            <Link to='/shop'>
                <div id="shops-list" className="flex flex-col gap-5">
                    <ShopList />
                </div>
            </Link>
        </div>
    )
}
