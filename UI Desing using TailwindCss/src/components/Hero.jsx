import React from 'react'
import Button from './Button'

function Hero() {
    return (
        <>
            <div className='max-w-280 m-auto text-center py-24 text-base/7'>
                <h1 className='text-8xl font-bold tracking-wide ' >The Best Way To <span className='bg-amber-400 rounded-4xl leading-relaxed px-2 py-1.5 '>Review</span> Creative Assets</h1>
                <p className='text-2xl tracking-widest max-w-180 m-auto my-5 font-semibold'>Store collaborate and share your marketing materials. Ship High-performing creatives 10x faster</p>
                <div className='font-bold w-80 m-auto'>
                    <Button title='Join Subscripition' />
                </div>
            </div>
        </>
    )
}

export default Hero
