import { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState<Date>(new Date());

        useEffect(() => {
            const interval = setInterval(() => {
                setTime(new Date());
            }, 1000);

            return () => clearInterval(interval);
        }, []);

    const formatTime = (date: Date): string => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div>
            {formatTime(time)}
        </div>
    );
};

export default Clock