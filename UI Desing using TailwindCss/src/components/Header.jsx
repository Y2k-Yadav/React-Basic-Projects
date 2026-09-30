import React from 'react'
import Button from './Button'

function Header() {
    return (
        <>
            <header className='flex justify-between text-2xl p-5 bg-black/60 text-white items-center'>
                <h1 className='text-3xl tracking-wide'>
                    <span className='text-red-500 font-bold'>B</span>rand
                </h1>
                <div className='flex justify-between gap-7 items-center'>
                    <a href=''>Features</a>
                    <a href=''>Use Case</a>
                    <a href=''>Integrations</a>
                    <a href=''>About us</a>
                </div>
                <Button title='Join us' />
            </header>
        </>
    )
}

export default Header
