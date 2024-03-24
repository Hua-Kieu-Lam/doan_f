import { FormField, FormItem } from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';
import { CategoryBrandList } from './CategoryBrandList';
import CategoryBrandCheckbox from './CategoryBrandCheckbox';

export default function CategoryBrand() {
    const { control } = useFormContext();
    return (
        <div className='space-y-2'>
            <div>
                <h2 className='text-2xl font-bold'>Danh mục hãng sản phẩm</h2>
            </div>
            <FormField
                control={control}
                name="shopCategoryBrand"
                render={({ field }) => (
                    <FormItem>
                        <div className="grid md:grid-cols-5 gap-1">
                            {CategoryBrandList.map(categoryBrand => (
                                <CategoryBrandCheckbox categoryBrand={categoryBrand} field={field}></CategoryBrandCheckbox>
                            ))}
                        </div>
                    </FormItem>
                )}>
            </FormField>
        </div>
    )
}
