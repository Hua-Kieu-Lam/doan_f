import { ControllerRenderProps, FieldValues } from "react-hook-form"
import { FormControl, FormItem, FormLabel } from "../../../components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"

type Props = {
    category: string,
    field: ControllerRenderProps<FieldValues, 'shopCategoryProduct'>
}
export default function CategoryProductCheckbox({ category, field }: Props) {
    return (
        <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
            <FormControl>
                <Checkbox
                    className="bg-white"
                    checked={field.value.includes(category)}
                    onCheckedChange={(checked) => {
                        const updatedValue = checked
                            ? [...field.value, category]
                            : field.value.filter((value: string) => value !== category);
                        field.onChange(updatedValue);
                    }}
                />
            </FormControl>
            <FormLabel className="text-sm font-normal">{category}</FormLabel>
        </FormItem>
    );
}