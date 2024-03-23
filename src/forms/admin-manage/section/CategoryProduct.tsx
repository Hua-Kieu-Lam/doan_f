import { FormField, FormItem } from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';
import { CategoryProductList } from './CategoryProductList';
import CategoryProductCheckbox from './CategoryProductCheckbox';

export default function CategoryProduct() {
    const { control } = useFormContext();
    return (
        <div className='space-y-2'>
            <div>
                <h2 className='text-2xl font-bold'>Danh mục</h2>
            </div>
            <FormField
                control={control}
                name="shopCategory"
                render={({ field }) => (
                    <FormItem>
                        <div className="grid md:grid-cols-5 gap-1">
                            {CategoryProductList.map(category => (
                                <CategoryProductCheckbox category={category} field={field}></CategoryProductCheckbox>
                            ))}
                        </div>
                    </FormItem>
                )}>
            </FormField>
        </div>
    )
}
