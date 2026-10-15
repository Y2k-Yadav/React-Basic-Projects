import React from 'react'

const Result = ({ score, len }) => {
    const percentage = (score / len) * 100;
    let message = "";

    if (percentage >= 85) {
        message = "🏆 Excellent work!";
    } else if (percentage >= 60) {
        message = "🎉 Great job!";
    } else if (percentage >= 33) {
        message = "👍 Good try, keep practicing.";
    } else {
        message = "💪 Try again. You can do it!";
    }


    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-4xl font-bold'>Quiz Finished</h1>
            <p className="text-3xl font-semibold">You scored {score} out of {len}</p>
            <p className="text-2xl mt-2">{(percentage).toFixed(2)}%</p>
            <p className="text-2xl mt-2">{message}</p>
        </div>
    )
}

export default Result
