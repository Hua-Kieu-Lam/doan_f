import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'

export default function ShopDetails() {
    const { control } = useFormContext()
    return (
        <div className='space-y-2'>
            <div>
                <h2 className='text-2xl font-bold'>Thông tin cửa hàng</h2>
            </div>
            <FormField
                control={control}
                name="shopName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Tên cửa hàng</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white'></Input>
                        </FormControl>
                    </FormItem>
                )}>

            </FormField>
            <FormField
                control={control}
                name="address"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Địa chỉ</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white'></Input>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}>

            </FormField>
        </div>
    )
}
