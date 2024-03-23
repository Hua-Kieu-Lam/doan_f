import SearchBar, { formSchema } from "@/components/Search/SearchBar";
import ShopList from "@/components/ShopList/ShopList";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

export default function ShopsPage() {
    const navigate = useNavigate()
    const handleSearchSubmit = (searchValues: z.infer<typeof formSchema>) => {
        navigate({
            pathname: `/shops/${searchValues.searchQuery}`
        })
    }
    return (

        <div className='grid grid-cols-1 md:grid-cols-[250px_1fr] gap-5'>
            <div id="category-list">
                category list
            </div>
            <SearchBar placeHolder="Nhập thông tin cần tìm" onSubmit={handleSearchSubmit} />
            <div></div>
            <div id="shops-list" className="flex flex-col gap-5">
                <ShopList />
            </div>
        </div>
    )
}
