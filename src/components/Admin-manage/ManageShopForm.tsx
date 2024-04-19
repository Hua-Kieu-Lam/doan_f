import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Separator } from "@/components/ui/separator"
import ShopDetails from "./section/ShopDetails"
import ShopImage from "./section/ShopImage"
import { Button } from "@/components/ui/button"
import CategoryProductShop from "./section/CategoryProductShop"

const formSchema = z.object({
    shopName: z.string().min(2, "Vui lòng nhập thông tin"),
    address: z.string().min(2, "Vui lòng nhập thông tin"),
    thumb: z.instanceof(File, {
        message: "Vui lòng chọn hình ảnh"
    }),
    categoryProductList: z.array(z.string()).nonempty({
        message: "Vui lòng chọn danh mục"
    }),
})

type Props = {
    onSave: (formData: FormData) => void;
}

export default function ManageShopForm({ onSave }: Props) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            shopName: "",
            address: "",
            thumb: undefined as File | undefined,
            categoryProductList: [],
        }
    })
    const onSubmit = (formDataJson: z.infer<typeof formSchema>) => {
        const formData = new FormData();

        formData.append("shopName", formDataJson.shopName)
        formData.append("address", formDataJson.address)
        formData.append("thumb", formDataJson.thumb)
        formData.append("categoryProductList", formDataJson.categoryProductList.join(", "))
        onSave(formData)
        form.reset()
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 bg-gray-50 p-10 rounded-lg"
            >
                <ShopDetails />
                <Separator />
                <ShopImage />
                <Separator />
                <CategoryProductShop />
                <Button type='submit'>Thêm cửa hàng</Button>
            </form>
        </Form>
    )
}