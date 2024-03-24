import { ControllerRenderProps, FieldValues } from "react-hook-form"
import { FormControl, FormItem, FormLabel } from "../../../components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"

type Props = {
    categoryProduct: string,
    field: ControllerRenderProps<FieldValues, 'shopCategoryProduct'>
}
export default function CategoryProductCheckbox({ categoryProduct, field }: Props) {
    return (
        <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
            <FormControl>
                <Checkbox
                    className="bg-white"
                    checked={field.value.includes(categoryProduct)}
                    onCheckedChange={(checked) => {
                        const updatedValue = checked
                            ? [...field.value, categoryProduct]
                            : field.value.filter((value: string) => value !== categoryProduct);
                        field.onChange(updatedValue);
                    }}
                />
            </FormControl>
            <FormLabel className="text-sm font-normal">{categoryProduct}</FormLabel>
        </FormItem>
    );
}