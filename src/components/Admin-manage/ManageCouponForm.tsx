import React from 'react'
import { Form } from '../ui/form'
import { Separator } from '../ui/separator'
import { z } from 'zod'
import Coupon from './section/Coupon'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


const formSchema = z.object({
  couponName: z.string().min(2, "Vui lòng nhập thông tin"),
  // discount: z.coerce.number(),
  discount: z.coerce.number().refine((value) => value >= 0 && value <= 100).transform((value) => value / 100),
  expires: z.date({
    required_error: "Vui lòng nhập ngày hết hạn"
  }),
})
type Props = {
  onSave: (formData: FormData) => void;
}
export default function ManageCouponForm({ onSave }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      couponName: "",
    }
  })
  const onSubmit = (formDataJson: z.infer<typeof formSchema>) => {
    const formData = new FormData()
    formData.append("couponName", formDataJson.couponName)
    formData.append("discount", String(formDataJson.discount))
    formData.append("expires", formDataJson.expires.toISOString())
    console.log(formDataJson)
    // onSave(formData)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <Coupon />
        <Separator />

        <Button type='submit'>Thêm mã</Button>
      </form>
    </Form>
  )
}
