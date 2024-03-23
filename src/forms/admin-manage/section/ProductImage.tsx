
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { useFormContext } from 'react-hook-form'

type Props = {
    index: number
}
export default function ProductImage({ index }: Props) {
    const { control, watch } = useFormContext()
    const existingImageURL = watch(`shopProducts.${index}.productImage`)
    return (
        <div className='space-y-2'>
            <div className='flex flex-col gap-8 md:w-[50%]'>
                {existingImageURL && (
                    <AspectRatio ratio={16 / 9}>
                        <img className="rounded-md object-cover h-full w-full" src={existingImageURL} alt="" />
                    </AspectRatio>
                )}
                <FormField
                    control={control}
                    name={`shopProducts.${index}.productImage`}
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
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>}>
                </FormField>
            </div>
        </div>
    )
}
