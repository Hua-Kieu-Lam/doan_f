// import { useState, useEffect } from 'react';
// import slider1 from './images/slider-1.png';
// import slider2 from './images/slider-2.png';
// import slider3 from './images/slider-3.png';

// const Slider = () => {
//     const slides = [
//         {
//             url: slider1
//         },
//         {
//             url: slider2
//         },
//         {
//             url: slider3
//         },
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const nextIndex = (currentIndex + 1) % slides.length;
//             setCurrentIndex(nextIndex);
//         }, 3000);

//         return () => {
//             clearInterval(interval);
//         };
//     }, [currentIndex, slides.length]);

//     return (
//         <div className="max-w-auto h-[500px] w-full m-auto py-10 px-4 relative group">
//             <div
//                 style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//                 className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
//             ></div>
//         </div>
//     );
// }

// export default Slider;

import { useState, useEffect } from 'react';
import slider1 from './images/slider-1.png';
import slider2 from './images/slider-2.png';
import slider3 from './images/slider-3.png';

const Slider = () => {
    const slides = [
        { url: slider1 },
        { url: slider2 },
        { url: slider3 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [slides.length]);

    return (
        <div className="max-w-auto h-[500px] w-full m-auto pb-12 relative group">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`w-full h-full rounded-2xl bg-center bg-cover ${currentIndex === index ? 'block' : 'hidden'
                        }`}
                    style={{ backgroundImage: `url(${slide.url})` }}
                ></div>
            ))}
        </div>
    );
};

export default Slider;