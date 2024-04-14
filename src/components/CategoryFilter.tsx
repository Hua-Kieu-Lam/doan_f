import React, { ChangeEvent } from 'react'
import { CategoryProductList } from './Admin-manage/section/CategoryProductList'
import { Label } from './ui/label'
import { Check } from 'lucide-react'

type Props = {
    onChange: (categories: string[]) => void
    selectedCategories: string[]
}
export default function CategoryFilter({ onChange, selectedCategories }: Props) {
    const handleCategoryReset = () =>
        onChange([])
    const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
        const clickedCategory = event.target.value
        const isChecked = event.target.checked

        const newCategoryList =
            isChecked
                ? [...selectedCategories, clickedCategory]
                : selectedCategories.filter((category) => category !== clickedCategory)

        onChange(newCategoryList)
    }
    return (
        <>
            <div className='flex justify-between items-center px-2'>
                <div className='text-md font-semibold mb-2'>

                </div>
                <div onClick={handleCategoryReset} className='text-sm font-semibold mb-2 underline cursor-pointer text-blue-500'>
                    Đặt lại
                </div>
            </div>
            <div className='space-y-2 flex flex-col'>
                {CategoryProductList.map((category) => {
                    const isSelected = selectedCategories.includes(category.nameP)
                    return (
                        <div className='flex' key={category._id}>
                            <input id={`category_${category.nameP}`}
                                type='checkbox'
                                className='hidden'
                                value={category.nameP}
                                checked={isSelected}
                                onChange={handleCategoryChange}
                            >

                            </input>
                            <Label
                                htmlFor={`category_${category.nameP}`}
                                className={
                                    `flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold 
                                    ${isSelected
                                        ? "border border-blue-500 text-blue-500"
                                        : "border border-slate-300"
                                    }
                                `}>
                                {isSelected && <Check size={20} strokeWidth={3} />}
                                {category.nameP}
                            </Label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
