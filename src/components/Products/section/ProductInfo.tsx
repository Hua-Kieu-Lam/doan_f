import React from 'react'

export default function ProductInfo() {
    return (
        <div className=" font-primary">
            <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
                {/* {title} */}
                Title
            </h1>
            <p className="font-medium text-lg">
                {/* {description} */}
                Description
            </p>
            <div className="text-xl text-palette-primary font-medium py-4 px-1">
                Price
            </div>
        </div>
    )
}
