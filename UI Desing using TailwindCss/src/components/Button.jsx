import React from 'react'

function Button({title}) {
    return (
        <div>
            <button  className='rounded-3xl font-xl font-extrabold
             text-black bg-lime-500 min-w-30 p-2 min-h-14'>{title}</button>

        </div>
    )
}

export default Button
