import { CreateShop } from "@/api/ShopAPI";
import ManageShopForm from "@/components/Admin-manage/ManageShopForm";


export default function ManageShopPage() {
    const { mutateCreateShop } = CreateShop()
    return (
        <ManageShopForm onSave={mutateCreateShop} />
    )
}
