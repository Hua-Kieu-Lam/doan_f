import { AspectRatio } from '@/components/ui/aspect-ratio'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export default function ShopImage() {
    const { control } = useFormContext()
    // const existingImageURL = watch("thumb")
    const [selectedThumb, setSelectedThumb] = useState('');

    const handleThumbChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files;
        if (file) {
            const imageURL = URL.createObjectURL(file[0]);
            setSelectedThumb(imageURL);
        } else {
            setSelectedThumb('');
        }
    };
    return (
        <div className='space-y-2'>
            <div>
                <h2 className='text-2xl font-bold'>Hình ảnh cửa hàng</h2>

            </div>
            <div className='flex flex-col gap-8 md:w-[50%]'>
                {selectedThumb && (
                    <AspectRatio ratio={16 / 9}>
                        <img className="rounded-md object-cover h-full w-full" src={selectedThumb} alt="" />
                    </AspectRatio>
                )}
                <FormField
                    control={control}
                    name='thumb'
                    render={({ field }) =>
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="file"
                                    className='bg-white'
                                    accept=".png,.jpg,.jpeg"
                                    onChange={(event) => {
                                        field.onChange(
                                            event.target.files ? event.target.files[0] : null)
                                        handleThumbChange(event)
                                    }
                                    }
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
