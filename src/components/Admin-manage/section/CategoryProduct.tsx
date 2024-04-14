/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
// import { useFormContext } from 'react-hook-form';

// import CategoryProductCheckbox from './CategoryProductCheckbox';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// export default function CategoryProduct() {
//     const { control } = useFormContext();
//     return (
//         <div className='space-y-2'>
//             <div>
//                 <h2 className='text-2xl font-bold'>Danh mục sản phẩm</h2>
//             </div>
//             <FormField
//                 control={control}
//                 name="shopCategoryProduct"
//                 render={({ field }) => (
//                     <FormItem>
//                         {/* <div className="flex flex-col md:flex-row md:items-end gap-4 p-4 mt-4 border rounded-lg"> */}
//                         <FormLabel className='flex items-center gap-1'>Tên</FormLabel>
//                         <FormControl>
//                             <Input placeholder="" className='bg-white'></Input>
//                         </FormControl>
//                         <Button type="button" className="bg-red-500 max-h-fit">Thêm</Button>

//                         {/* </div> */}
//                         <div className="grid md:grid-cols-2 gap-x-10">
//                             {CategoryProductList.map(categoryProduct => (
//                                 <CategoryProductCheckbox key={categoryProduct} categoryProduct={categoryProduct} field={field}></CategoryProductCheckbox>
//                             ))}
//                         </div>
//                     </FormItem>
//                 )}>
//             </FormField>
//         </div>
//     )
// }


import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CategoryProductList } from './CategoryProductList';
import { useEffect, useState } from 'react';


export default function CategoryProduct({ onData }: any) {
    
    const [value, setValue] = useState('');

    useEffect(() => {
        if (value) {
            onData(value);
        }
    }, [value])
    return (
        <>
            <div>
                <h2 className='text-2xl font-bold'>Danh mục hãng sản phẩm</h2>
            </div>
            <Select value={value} onValueChange={setValue}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn hãng sản phẩm" />
                </SelectTrigger>
                <SelectContent>
                    {CategoryProductList.map((categoryProduct, index) => (
                        <SelectItem key={index} value={categoryProduct._id}>
                            {categoryProduct.nameP}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>
    )
}
