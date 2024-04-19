/* eslint-disable @typescript-eslint/no-explicit-any */

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

export default function ProductImages({thumb, images}: any) {
    const [mainImg, setMainImg] = useState<string>("");
    const ref = useRef<HTMLDivElement>(null);

    function scroll(scrollOffset: number) {
        if (ref.current) {
            ref.current.scrollLeft += scrollOffset;
        }
    }

    return (
        <div className="w-full md:w-full max-w-3xl border rounded-md shadow-lg">
            <div className="relative h-full mb-[8px]">
                <img
                    src={mainImg || thumb}
                    alt=""
                    className="transform duration-500 ease-in-out hover:scale-105 rounded-md"
                />
            </div>
            <div className="relative flex border-t border-palette-lighter">
                <button
                    aria-label="left-scroll"
                    className="h-32 hover:bg-blue-500 absolute left-0 z-10 opacity-75 hover:text-white"
                    onClick={() => scroll(-300)}
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="w-3 mx-1 text-palette-primary" />
                </button>
                <div
                    ref={ref}
                    style={{ scrollBehavior: "smooth" }}
                    className="flex space-x-1 w-full overflow-auto no-scrollbar border-t border-palette-lighter justify-center"
                >
                    {images?.map((imgUrl: any, index: any) => (
                        <button
                            key={index}
                            className="relative w-40 h-32 flex-shrink-0 rounded-sm"
                            onClick={() => setMainImg(imgUrl)}
                        >
                            <img src={imgUrl} alt="" className="h-full w-full object-cover border border-red-700" />
                        </button>
                    ))}
                </div>
                <button
                    aria-label="right-scroll"
                    className="h-32 hover:bg-blue-500 absolute right-0 z-10 opacity-75 hover:text-white"
                    onClick={() => scroll(300)}
                >
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 mx-1 text-palette-primary" />
                </button>
            </div>
        </div>
    );
}