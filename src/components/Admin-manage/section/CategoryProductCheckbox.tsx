
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { FormControl, FormItem, FormLabel } from "../../../components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
    categoryProduct: { _id: string; name: string; slug: string; description: string; brand: string[] };
    field: ControllerRenderProps<FieldValues, "categoryProductList">;
};

export default function CategoryProductCheckbox({ categoryProduct, field }: Props) {
    return (
        <FormItem className="flex flex-row justify-between items-center space-x-1 space-y-0 mt-2">
            <div>
                <FormControl>
                    <Checkbox
                        className="bg-white"
                        checked={field.value.includes(categoryProduct._id)}
                        onCheckedChange={(checked) => {
                            const updatedValue = checked
                                ? [...field.value, categoryProduct._id]
                                : field.value.filter((value: string) => value !== categoryProduct._id);
                            field.onChange(updatedValue);
                        }}
                    />
                </FormControl>
                <FormLabel className="text-sm font-normal ml-2">{categoryProduct.name}</FormLabel>
            </div>
            {/* Additional buttons for edit and delete */}
        </FormItem>
    );
}