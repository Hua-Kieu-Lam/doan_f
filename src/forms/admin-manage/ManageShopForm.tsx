import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Separator } from "@/components/ui/separator"
import CategoryProduct from "./section/CategoryProduct"
import Products from "./section/Products"
import ShopDetails from "./section/ShopDetails"
import ShopImage from "./section/ShopImage"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
    shopName: z.string().min(2, "Vui lòng nhập thông tin"),
    shopAddress: z.string().min(2, "Vui lòng nhập thông tin"),
    shopCategory: z.array(z.string()).nonempty({
        message: "Vui lòng chọn danh mục"
    }),
    shopProducts: z.array(z.object({
        productImage: z.instanceof(File, {
            message: "Vui lòng chọn hình ảnh"
        }),
        name: z.string().min(2),
        price: z.coerce.number().min(10000),
        description: z.string().min(2)
    })),
    shopImage: z.instanceof(File, {
        message: "Vui lòng chọn hình ảnh"
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
            shopAddress: "",
            shopCategory: [],
            shopProducts: [{ name: '' }]
        }
    })
    const onSubmit = (formDataJson: z.infer<typeof formSchema>) => {

    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 bg-gray-50 p-10 rounded-lg"
            >
                <ShopDetails />
                <Separator />
                <CategoryProduct />
                <Separator />
                <Products />
                <Separator />
                <ShopImage />
                <Separator />
                <Button type='submit'>Thêm cửa hàng</Button>
            </form>
        </Form>
    )
}