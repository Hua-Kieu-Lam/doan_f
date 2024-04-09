import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';
import { CategoryBrandList } from './CategoryBrandList';
import CategoryBrandCheckbox from './CategoryBrandCheckbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
                        <FormLabel className='flex items-center gap-1'>Tên</FormLabel>
                        <FormControl>
                            <Input placeholder="" className='bg-white'></Input>
                        </FormControl>
                        <Button type="button" className="bg-red-500 max-h-fit">Thêm</Button>
                        <div className="grid md:grid-cols-2 gap-10">
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
