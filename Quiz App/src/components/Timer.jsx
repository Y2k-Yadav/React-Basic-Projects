import React from 'react';
import { useEffect } from 'react';
function Timer({ time, setTime }) {
    let changeColor = '';

    useEffect(() => {
        let interval = setInterval(() => {

            setTime((prev) => {
                if (prev == 0) {
                    clearInterval(interval);
                    return 0;
                }
                else {
                    return prev - 1;
                }



            });

        }, 1000);
        return () => clearInterval(interval);

    }, []);
    if (time <= 10) {
        changeColor = 'text-red-500';
    }
    return (

        <div className=" py-10 bg-gray-200/80  w-screen  h-32 text-center rounded-lg shadow-md">
            <h1 className={`text-4xl font-bold mb-4 ${changeColor} `}>Time  {`${Math.floor(time / 60).toString().padStart(2, '0')} : ${(time % 60).toString().padStart(2, '0')}`}</h1>
        </div >
    )
}

export default Timer
