import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"
import ProductImage from "./ProductImage"

type Props = {
    index: number,
    removeProductItem: () => void
}

export default function MenuProducts({ index, removeProductItem }: Props) {
    const { control } = useFormContext()
    return (
        <div className="shadow-lg border p-4 rounded">
            <ProductImage index={index} />
            <div className="flex flex-col md:flex-row md:items-end gap-4 p-4 mt-4 border rounded-lg">
                <FormField
                    control={control}
                    name={`shopProducts.${index}.name`}
                    render={({ field }) =>
                        <FormItem>
                            <FormLabel className='flex items-center gap-1'>Tên</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Ban an" className='bg-white'></Input>
                            </FormControl>
                        </FormItem>}
                />
                <FormField
                    control={control}
                    name={`shopProducts.${index}.price`}
                    render={({ field }) =>
                        <FormItem>
                            <FormLabel className='flex items-center gap-1'>Giá</FormLabel>
                            <FormControl>
                                <Input {...field} className='bg-white'></Input>
                            </FormControl>
                        </FormItem>}
                />
                <FormField
                    control={control}
                    name={`shopProducts.${index}.description`}
                    render={({ field }) =>
                        <FormItem>
                            <FormLabel className='flex items-center gap-1'>Mô tả</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="" className='bg-white'></Input>
                            </FormControl>
                        </FormItem>}
                />
                <Button type="button" onClick={removeProductItem} className="bg-red-500 max-h-fit">Gỡ bỏ</Button>
            </div>
        </div>
    )
}