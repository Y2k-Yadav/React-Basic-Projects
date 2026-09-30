import React from 'react'

function Footer() {
    return (
        <>
            <div className=' bg-black/60 h-fit py-5  text-white'>
                <header className=' grid grid-cols-5 text-center align-top text-2xl p-7 items-start mb-8'>
                    <h1 className='flex items-baseline text-3xl'><span className='text-red-500 font-bold text-4xl'>B</span>rand</h1>
                    <div className='flex flex-col justify-between gap-7 items-center'>
                        <a href=''>Features</a>
                        <a href=''>Use Case</a>
                        <a href=''>Integrations</a>
                        <a href=''>About us</a>
                    </div>
                    <div className='flex flex-col justify-between gap-7 items-center'>
                        <a href=''>Features</a>
                        <a href=''>Use Case</a>
                        <a href=''>Integrations</a>
                        <a href=''>About us</a>
                    </div>
                    <div className='flex flex-col justify-between gap-7 items-center'>
                        <a href=''>Features</a>
                        <a href=''>Use Case</a>
                        <a href=''>Integrations</a>
                        <a href=''>About us</a>
                    </div>
                    <div className='flex flex-col justify-between gap-7 items-center'>
                        <a href=''>Features</a>
                        <a href=''>Use Case</a>
                        <a href=''>Integrations</a>
                        <a href=''>About us</a>
                    </div>



                </header>
                <div className='w-full bg-white h-px'></div>
                <div className='flex justify-center gap-10 w-240 m-auto font-bold 
                text-xl items-center p-2'>
                    <p>
                        @copyrights 2026
                    </p>
                    <p>
                        privacy policy
                    </p>

                    <p>
                        Terms of use
                    </p>
                    <p>
                        sitemap
                    </p>

                </div>
            </div>
        </>
    )
}

export default Footer
