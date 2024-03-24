// import { ControllerRenderProps, FieldValues } from "react-hook-form"
// import { FormControl, FormItem, FormLabel } from "../../../components/ui/form"
// import { Checkbox } from "@/components/ui/checkbox"

// type Props = {
//     categoryBrand: string,
//     field: ControllerRenderProps<FieldValues, 'shopCategoryBrand'>
// }
// export default function CategoryProductCheckbox({ categoryBrand, field }: Props) {
//     return (
//         <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
//             <FormControl>
//                 <Checkbox
//                     className="bg-white"
//                     checked={field.value.includes(categoryBrand)}
//                     onCheckedChange={(checked) => {
//                         const updatedValue = checked
//                             ? [...field.value, categoryBrand]
//                             : field.value.filter((value: string) => value !== categoryBrand);
//                         field.onChange(updatedValue);
//                     }}
//                 />
//             </FormControl>
//             <FormLabel className="text-sm font-normal">{categoryBrand}</FormLabel>
//         </FormItem>
//     );
// }