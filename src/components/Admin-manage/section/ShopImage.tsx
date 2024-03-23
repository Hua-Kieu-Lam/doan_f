import { AspectRatio } from '@/components/ui/aspect-ratio'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'

export default function ShopImage() {
    const { control, watch } = useFormContext()
    const existingImageURL = watch("shopImage")
    return (
        <div className='space-y-2'>
            <div>
                <h2 className='text-2xl font-bold'>Hình ảnh cửa hàng</h2>

            </div>
            <div className='flex flex-col gap-8 md:w-[50%]'>
                {existingImageURL && (
                    <AspectRatio ratio={16 / 9}>
                        <img className="rounded-md object-cover h-full w-full" src={existingImageURL} alt="" />
                    </AspectRatio>
                )}
                <FormField
                    control={control}
                    name='shopImage'
                    render={({ field }) =>
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="file"
                                    className='bg-white'
                                    accept=".png,.jpg,.jpeg"
                                    onChange={(event) =>
                                        field.onChange(
                                            event.target.files ? event.target.files[0] : null)}
                                >
                                </Input>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }>
                </FormField>
            </div>
        </div>
    )
}
