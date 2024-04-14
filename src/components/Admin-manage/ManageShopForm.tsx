import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Separator } from "@/components/ui/separator"
import ShopDetails from "./section/ShopDetails"
import ShopImage from "./section/ShopImage"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
    shopName: z.string().min(2, "Vui lòng nhập thông tin"),
    shopAddress: z.string().min(2, "Vui lòng nhập thông tin"),
    shopImage: z.instanceof(File, {
        message: "Vui lòng chọn hình ảnh"
    }),
})

type Props = {
    onSave: (formData: FormData) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ManageShopForm({ onSave }: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            shopName: "",
            shopAddress: "",
        }
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                <ShopImage />
                <Separator />
                <Button type='submit'>Thêm cửa hàng</Button>
            </form>
        </Form>
    )
}