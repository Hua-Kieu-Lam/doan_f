import { FormField, FormItem } from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';
import { CategoryProductList } from './CategoryProductList';
import CategoryProductCheckbox from './CategoryProductCheckbox';

export default function CategoryProduct() {
    const { control } = useFormContext();
    return (
        <div className='space-y-2'>
            <div>
                <h2 className='text-2xl font-bold'>Danh mục sản phẩm</h2>
            </div>
            <FormField
                control={control}
                name="shopCategoryProduct"
                render={({ field }) => (
                    <FormItem>
                        <div className="grid md:grid-cols-5 gap-1">
                            {CategoryProductList.map(categoryProduct => (
                                <CategoryProductCheckbox categoryProduct={categoryProduct} field={field}></CategoryProductCheckbox>
                            ))}
                        </div>
                    </FormItem>
                )}>
            </FormField>
        </div>
    )
}
