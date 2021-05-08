export default function DetailBanner({ title, price, logo, changePerc, changeUsd }) {

    return (
        <>
        <div className='flex justify-between  pt-8'>
        <h1 className="font-sans text-4xl text-white uppercase">{title}</h1>
        <img src={logo}/>
        </div>

        <div>
            <h2 className='text-white text-2xl font-mono font-medium mt-4'>${price}</h2>
            { changePerc < 0 ?
            (
                <div className='text-red-500 flex text-sm'>
                <p className=''>-${changeUsd}</p>
                <p className='pl-1 text-xs'>({changePerc}%)</p>
                </div>
            ):
            (
                <div className='text-green-500 flex text-sm'>
                <p className=''>+${changeUsd}</p>
                <p className='pl-1 text-xs'>({changePerc}%)</p>
                </div>
            )}
            
        </div>

        </>
    )

}