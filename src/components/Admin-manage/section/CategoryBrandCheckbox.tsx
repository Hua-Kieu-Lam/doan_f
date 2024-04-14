import { ControllerRenderProps, FieldValues } from "react-hook-form"
import { FormControl, FormItem, FormLabel } from "../../../components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"

type Props = {
    categoryBrand: string,
    field: ControllerRenderProps<FieldValues, 'shopCategoryBrand'>
}
export default function CategoryBrandCheckbox({ categoryBrand, field }: Props) {
    return (
        <FormItem className="flex flex-row justify-between items-center space-x-1 space-y-0 mt-2">
            <div>
                <FormControl>
                    <Checkbox
                        className="bg-white"
                        checked={field.value.includes(categoryBrand)}
                        onCheckedChange={(checked) => {
                            const updatedValue = checked
                                ? [...field.value, categoryBrand]
                                : field.value.filter((value: string) => value !== categoryBrand);
                            field.onChange(updatedValue);
                        }}
                    />
                </FormControl>
                <FormLabel className="text-sm font-normal ml-2">{categoryBrand}</FormLabel>
            </div>
            {/* <div>
                <Button
                    type="button"
                    className="ml-2 bg-blue-600"
                    onClick={() => {
                        // Handle edit action
                    }}
                >
                    Edit
                </Button>
                <Button
                    type="button"
                    className="ml-2 bg-red-600"
                    onClick={() => {
                        // Handle delete action
                    }}
                >
                    Delete
                </Button>
            </div> */}
        </FormItem>
    );
}