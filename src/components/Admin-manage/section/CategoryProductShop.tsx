// import { FormField, FormItem } from '@/components/ui/form';
// import { useFormContext } from 'react-hook-form';
// import CategoryProductCheckbox from './CategoryProductCheckbox';
// import { useEffect, useState } from 'react';
// import { getCategory } from '@/api/CategoryAPI';
// import type { CategoryProduct } from '@/types';

// export default function CategoryProduct() {
//     const { control } = useFormContext();
//     const [categoryProducts, setCategoryProducts] = useState<CategoryProduct[]>([])

//     useEffect(() => {
//         const getData = async () => {
//             // const data = await getCategory()
//             // setCategoryProducts(data)
//             try {
//                 const data = await getCategory();
//                 if (Array.isArray(data)) {
//                     setCategoryProducts(data);
//                 } else {
//                     setCategoryProducts([]); // Gán một giá trị mặc định nếu data không hợp lệ
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//         getData()
//         console.log(categoryProducts)
//     }, [])
//     return (
//         <div className='space-y-2'>
//             <div>
//                 <h2 className='text-2xl font-bold'>Danh mục sản phẩm</h2>
//             </div>
//             <FormField
//                 control={control}
//                 name="categoryProductList"
//                 render={({ field }) => (
//                     <FormItem>
//                         {/* <div className="flex flex-col md:flex-row md:items-end gap-4 p-4 mt-4 border rounded-lg"> */}
//                         {/* <FormLabel className='flex items-center gap-1'>Tên</FormLabel>
//                         <FormControl>
//                             <Input placeholder="" className='bg-white'></Input>
//                         </FormControl>
//                         <Button type="button" className="bg-red-500 max-h-fit">Thêm</Button> */}

//                         {/* </div> */}
//                         <div className="grid md:grid-cols-5 gap-x-10">
//                             {categoryProducts.map((category) => (
//                                 <CategoryProductCheckbox categoryProduct={category} field={field}></CategoryProductCheckbox>
//                             ))}
//                         </div>
//                     </FormItem>
//                 )}>
//             </FormField>
//         </div>
//     )
// }
import { FormField, FormItem } from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';
import CategoryProductCheckbox from './CategoryProductCheckbox';
import { useEffect, useState } from 'react';
import { getCategory } from '@/api/CategoryAPI';
import type { CategoryProduct } from '@/types'; // Assuming you have a separate file for the CategoryProduct type

export default function CategoryProduct() {
    const { control } = useFormContext();
    const [categoryProducts, setCategoryProducts] = useState<CategoryProduct[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getCategory();
                if (Array.isArray(data.data)) {
                    setCategoryProducts(data.data);
                } else {
                    setCategoryProducts([]);
                }
            } catch (error) {
                console.error('Error fetching category products:', error);
            }
        };
        getData();
    }, []);

    return (
        <div className='space-y-2'>
            <div>
                <h2 className='text-2xl font-bold'>Danh mục sản phẩm</h2>
            </div>
            <FormField
                control={control}
                name="categoryProductList"
                render={({ field }) => (
                    <FormItem>
                        <div className="grid md:grid-cols-5 gap-x-10">
                            {categoryProducts.map((category) => (
                                <CategoryProductCheckbox categoryProduct={category} field={field} key={category._id} />
                            )
                            )}
                        </div>
                    </FormItem>
                )}
            />
        </div>
    );
}
