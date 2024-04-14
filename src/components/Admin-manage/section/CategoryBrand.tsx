/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
// import { useFormContext } from 'react-hook-form';

// import CategoryBrandCheckbox from './CategoryBrandCheckbox';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// export default function CategoryBrand() {
//     const { control } = useFormContext();
//     return (
//         <div className='space-y-2'>
//             <div>
//                 <h2 className='text-2xl font-bold'>Danh mục hãng sản phẩm</h2>
//             </div>
//             <FormField
//                 control={control}
//                 name="shopCategoryBrand"
//                 render={({ field }) => (
//                     <FormItem>
//                         <FormLabel className='flex items-center gap-1'>Tên</FormLabel>
//                         <FormControl>
//                             <Input placeholder="" className='bg-white'></Input>
//                         </FormControl>
//                         <Button type="button" className="bg-red-500 max-h-fit">Thêm</Button>
//                         <div className="grid md:grid-cols-2 gap-10">
//                             {CategoryBrandList.map(categoryBrand => (
//                                 <CategoryBrandCheckbox key={categoryBrand} categoryBrand={categoryBrand} field={field}></CategoryBrandCheckbox>
//                             ))}
//                         </div>
//                     </FormItem>
//                 )}>
//             </FormField>
//         </div>
//     )
// }

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CategoryBrandList } from './CategoryBrandList';
import { useEffect, useState } from 'react';


export default function CategoryBrand({onData}: any) {
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
                    {CategoryBrandList.map((categoryBrand, index) => (
                        <SelectItem key={index} value={categoryBrand.nameShop}>
                            {categoryBrand.nameShop}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>
    )
}

