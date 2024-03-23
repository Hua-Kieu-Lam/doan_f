// import { Form } from '@/components/ui/form'
// import React from 'react'

// export default function UserProfileForm() {
//   return (
//     <Form>
//         <form action="" onSubmit={}>

//         </form>
//     </Form>
//   )
// }
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    email: z.string().optional(),
    username: z.string().min(2).max(500),
    phonenumber: z.number().min(10).max(10),
    address: z.string().min(2).max(500)
})

function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
}
export function UserProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            username: "",
            address: ""
        },
    })

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-10 space-y-4 bg-gray-50 rounded-lg p-10 mx-auto flex-1 md:max-w-2xl"
            >
                <div className="flex justify-center items-center shadow-md border-b">
                    <h1 className=" text-2xl font-bold p-4">Thông tin tài khoản</h1>
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} className="bg-white" disabled />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Họ tên</FormLabel>
                            <FormControl>
                                <Input placeholder="Họ tên" {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phonenumber"

                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Số điện thoại</FormLabel>
                            <FormControl>
                                <Input placeholder="Số điện thoại " {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Địa chỉ</FormLabel>
                            <FormControl>
                                <Input placeholder="Địa chỉ" {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-center">
                    <Button type="submit" className="bg-blue-500 hover:bg-black">Cập nhật</Button>
                </div>
            </form>
        </Form>
    )
}

