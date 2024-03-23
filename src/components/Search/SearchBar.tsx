import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Search } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const formSchema = z.object({
    searchQuery: z.string({
        required_error: "Vui lòng nhập thông tin cần tìm"
    })
})

type Props = {
    onSubmit: (formData: z.infer<typeof formSchema>) => void,
    placeHolder: string,
    onReset?: () => void
}
export default function SearchBar({ onSubmit, onReset, placeHolder }: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchQuery: ""
        }
    })
    const handleReset = () => {
        form.reset({
            searchQuery: ""
        })
        if (onReset) {
            onReset()
        }
    }
    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-2 ${form.formState.errors.searchQuery && "border-red-500"
                        }`}>
                    <Search strokeWidth={2.5} size={30} className='ml-1 text-blue-500 hidden md:block' />
                    <FormField control={form.control} name="searchQuery" render={({ field }) =>
                        <FormItem className='flex-1'>
                            <FormControl>
                                <Input {...field} className='border-none shadow-none text-xl focus-visible:ring-0'
                                    placeholder={placeHolder} />
                            </FormControl>
                        </FormItem>} />
                    {form.formState.isDirty && (<Button onClick={handleReset} type='button' variant='outline' className='rounded-full'>Xoa</Button>)}
                    <Button type="submit" className='rounded-full bg-blue-500'>Tìm kiếm</Button>
                </form>
            </Form>
            {/* <SearchResult ></SearchResult> */}
        </div>

    )
}
