import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating: React.FC = () => {
    const [rating, setRating] = useState<number>(0);

    const handleRating = (value: number) => {
        setRating(value);
    };

    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <FaStar
                        key={index}
                        className={`cursor-pointer ${starValue <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                        onClick={() => handleRating(starValue)}
                    />
                );
            })}
        </div>
    );
};

export default Rating;