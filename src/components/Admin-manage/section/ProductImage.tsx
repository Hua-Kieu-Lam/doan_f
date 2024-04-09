import { useState } from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { useFormContext } from 'react-hook-form';

type Props = {
    index: number;
};

export default function ProductImage({ index }: Props) {
    const { control } = useFormContext();
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [selectedThumb, setSelectedThumb] = useState<string>('');

    const handleThumbChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files;
        if (file) {
            const imageURL = URL.createObjectURL(file[0]);
            setSelectedThumb(imageURL);
        } else {
            setSelectedThumb('');
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const fileArray = Array.from(files);
            const imageURLs = fileArray.map((file) => URL.createObjectURL(file));
            setSelectedImages(imageURLs);
        } else {
            setSelectedImages([]);
        }
    };

    return (
        <div className="space-y-2">

            <div className="flex flex-col gap-8 md:w-[50%]">
                <FormLabel>Chọn ảnh đại diện sản phẩm</FormLabel>

                {selectedThumb && (
                    <AspectRatio ratio={16 / 9}>
                        <img className="rounded-md object-cover h-full w-full" src={selectedThumb} alt="" />
                    </AspectRatio>
                )}
                <FormField
                    control={control}
                    name={`shopProducts.${index}.productThumb`}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="file"
                                    className="bg-white"
                                    accept=".png,.jpg,.jpeg"
                                    onChange={(event) => {
                                        field.onChange(event.target.files ? event.target.files[0] : null);
                                        handleThumbChange(event)
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormLabel>Chọn ảnh sản phẩm</FormLabel>
                <FormField
                    control={control}
                    name={`shopProducts.${index}.productImages`}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="file"
                                    className="bg-white"
                                    accept=".png,.jpg,.jpeg"
                                    multiple
                                    onChange={(event) => {
                                        const files = event.target.files;
                                        if (files) {
                                            const fileArray = Array.from(files);
                                            const imageURLs = fileArray.map((file) => URL.createObjectURL(file));
                                            field.onChange(fileArray);
                                            setSelectedImages(imageURLs);

                                            handleImageChange(event);
                                        }
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            {selectedImages.length > 0 && (
                <div className="flex gap-2 flex-wrap grid grid-cols-3">
                    {selectedImages.map((imageURL: string, imageIndex: number) => (
                        <AspectRatio key={imageIndex} ratio={16 / 9}>
                            <img className="rounded-md object-cover h-full w-full" src={imageURL} alt="" />
                        </AspectRatio>
                    ))}
                </div>
            )}
        </div>
    );
}
