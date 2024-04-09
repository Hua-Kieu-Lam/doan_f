import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Separator } from "@/components/ui/separator"
import CategoryProduct from "./section/CategoryProduct"
import Products from "./section/Products"
import { Button } from "@/components/ui/button"
import CategoryBrand from "./section/CategoryBrand"
import SelectShop from "./section/SelectShop"

const formSchema = z.object({
    shopCategoryProduct: z.array(z.string()).nonempty({
        message: "Vui lòng chọn danh mục"
    }),
    shopCategoryBrand: z.array(z.string()).nonempty({
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
})

type Props = {
    onSave: (formData: FormData) => void;
}


export default function ManageProductForm({ onSave }: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            shopCategoryProduct: [],
            shopCategoryBrand: [],
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
                <SelectShop />
                <Separator />
                <CategoryBrand />
                <Separator />
                <CategoryProduct />
                <Separator />
                <Products />
                <Separator />
                <Button type='submit'>Thêm sản phẩm</Button>
            </form>
        </Form>
    )
}