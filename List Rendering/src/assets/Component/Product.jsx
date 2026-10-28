function Product({ phone }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-[240px_1fr_200px] gap-6 p-6 w-[92%] max-w-6xl mx-auto my-5 items-center rounded-2xl bg-gray-900 border border-gray-800 shadow-lg hover:shadow-2xl hover:border-gray-600 hover:-translate-y-1 transition-all duration-200'>

            {/* Image */}
            <div className='bg-white rounded-xl p-3 flex items-center justify-center'>
                <img src={phone.image} className='w-full max-h-60 object-contain' alt={phone.title} />
            </div>

            {/* Details */}
            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-xl font-bold leading-snug'>{phone.title}</h1>

                <div className='flex items-center gap-3 text-sm'>
                    <span className='bg-green-600 text-white font-semibold px-2 py-0.5 rounded-md'>
                        {phone.rating} ★
                    </span>
                    <span className='text-gray-400'>{phone.reviews}</span>
                </div>

                <ul className='list-disc pl-5 text-gray-300 text-sm space-y-1.5 marker:text-gray-500'>
                    {phone.details.map((detail, index) => {
                        return <li key={index}>{detail}</li>
                    })}
                </ul>

                <div className='flex flex-wrap gap-2 text-sm'>
                    <span className='bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 rounded-full'>
                        {phone.offers.exchangeOffer}
                    </span>
                    <span className='bg-lime-500/10 text-lime-400 border border-lime-500/30 px-3 py-1 rounded-full'>
                        {phone.offers.bankOffer}
                    </span>
                </div>
            </div>

            {/* Price */}
            <div className='md:text-end border-t border-gray-800 pt-4 md:border-t-0 md:pt-0'>
                <p className='text-3xl font-bold'>{phone.price}</p>
                <p className='text-gray-500 line-through'>{phone.originalPrice}</p>
                <p className='text-green-500 font-semibold'>{phone.discount}</p>
            </div>
        </div>
    )
}

export default Product


