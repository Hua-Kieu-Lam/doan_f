import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { useFormContext } from 'react-hook-form';

export default function Coupon() {
    const { control } = useFormContext();
    return (
        <div className='space-y-2'>
            <div>
                <h2 className='text-2xl font-bold'>Mã giảm giá</h2>
            </div>
            <br></br>
            <FormField
                control={control}
                name="couponName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Tên mã giảm giá</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white'></Input>
                        </FormControl>
                    </FormItem>
                )}>

            </FormField>
            <FormField
                control={control}
                name="discount"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Giảm giá (%)</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white'></Input>
                        </FormControl>
                    </FormItem>
                )}>

            </FormField>
            <FormField
                control={control}
                name="expires"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel className='mt-[10px] mb-[5px]'>Ngày hết hạn</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[240px] pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                        )}
                                    >
                                        {field.value ? (
                                            format(field.value, "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                        date < new Date()
                                    }
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </FormItem>
                )}
            />
        </div>
    )
}
