import { FormField, FormItem } from '@/components/ui/form'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import MenuProducts from './MenuProducts'

export default function Products() {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'shopProducts'
  })
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Sản phẩm</h2>
      </div>
      <FormField
        control={control}
        name="shopProducts"
        render={() => (
          <FormItem className='flex flex-col gap-2'>
            {fields.map((_, index) => (
              <>
                <MenuProducts
                  index={index}
                  removeProductItem={() => remove(index)}
                />
              </>
            ))}
          </FormItem>
        )} />
      <Button
        type="button"
        onClick={() => append({ name: "", price: "" })}
      >
        Thêm +
      </Button>
    </div>

  )
}
