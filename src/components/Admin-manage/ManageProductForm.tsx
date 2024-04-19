/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Separator } from "@/components/ui/separator"
import CategoryProduct from "./section/CategoryProduct"
import Products from "./section/Products"
import { Button } from "@/components/ui/button"
import CategoryBrand from "./section/CategoryBrand"
import SelectShop from "./section/SelectShop"
import { createProduct } from '@/api/ProductsAPI'
import { useForm } from "react-hook-form"
import MarkdownEditor from "./MarkdownEditor"
import { useCallback, useState } from "react"
import DefaultLayout from "@/Admin/src/layout/DefaultLayout"


const formSchema = z.object({
    shopProducts: z.array(z.object({
        productImages: z.array(
            z.instanceof(File, {
                message: "Vui lòng chọn hình ảnh"
            })
        ),
        productThumb: z.instanceof(File, {
            message: "Vui lòng chọn hình ảnh"
        }),
        name: z.string().min(2),
        price: z.coerce.number().min(10000),
        quantity: z.coerce.number().min(1),
        color: z.string().min(2),
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
            shopProducts: [{ name: '', productImages: [] }]
        }
    })

    const [shopSelect, setShopSelect] = useState("");
    const [shopBrand, setShopBrand] = useState("");
    const [shopCategoryProduct, setShopCategoryProduct] = useState("");

    const { mutateCreateProduct } = createProduct()

    const [payload, setPayload] = useState({
        description: "",
      });
    const handleChangeValue = useCallback(
        (e: any) => {
          setPayload(e);
        },
        [payload]
    );
    
    const handleDataSelectShopChild = (data: any) => {
        setShopSelect(data);
    };

    const handleDataSelectBrandChild = (data: any) => {
        setShopBrand(data);
    };

    const handleDataSelectCateProductChild = (data: any) => {
        setShopCategoryProduct(data);
    };


    const onSubmit = async (formDataJson: z.infer<typeof formSchema>) => {
        const data = {
            thumb: formDataJson.shopProducts[0].productThumb,
            image: formDataJson.shopProducts[0].productImages,
            categoryId: shopCategoryProduct,
            shopListId: shopSelect,
            brand: shopBrand,
            name: formDataJson.shopProducts[0].name,
            color: formDataJson.shopProducts[0].color,
            price: formDataJson.shopProducts[0].price,
            description: formDataJson.shopProducts[0].description,
            quantity: formDataJson.shopProducts[0].quantity,
        }
        const finalPayload: { [key: string]: any } = { ...data };
        const formData = new FormData();

        if (finalPayload.thumb) {
            formData.append("thumb", finalPayload.productThumb);
        }
        
        const dataTransfer = new DataTransfer();
        for (const file of data.image) {
            dataTransfer.items.add(file);
        }
          
        if (dataTransfer.files) {
            for (const item of dataTransfer.files) {
              formData.append("image", item);
            }
        }


        for (const [key, value] of Object.entries(finalPayload)) {
            formData.append(key, value);
        }
        

        const response = await mutateCreateProduct(formData);
        console.log(response);

    }

    return (
        // <DefaultLayout>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 bg-gray-50 p-10 rounded-lg"
                >
                    <SelectShop onData={handleDataSelectShopChild}/>
                    <Separator />
                    <CategoryBrand onData={ handleDataSelectBrandChild} />
                    <Separator />
                    <CategoryProduct onData={ handleDataSelectCateProductChild} />
                    <Separator />
                    <Products />
                    <Separator />
                    <MarkdownEditor
                        name={"description"}
                        handleChangeValue={handleChangeValue}
                        label={"Description"}
                        value={undefined}
                    />
                    <Separator />
                    
                    <Button type='submit' >Thêm sản phẩm</Button>
                </form>
                </Form>
            // </DefaultLayout>
    )
}