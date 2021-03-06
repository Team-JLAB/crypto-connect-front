import { useState , useEffect } from 'react'
import axios from 'axios'
import Cookies, { get } from 'js-cookie'
import { getWatchlist } from '../services/cryptoApi'
import Header from '../components/header'
import Footer  from '../components/footer'
import CoinListed from '../components/listed'
import { getCoinData } from '../services/coingecko'


export default function WatchList(){
    const [fetchCoinNames,setFetchCoinNames] = useState('')
    const [displayData,setDisplayData] = useState([])
    const isWatch = true
    


    const formatNames = data => {
        return data.map((el) => {
            return el['coin']
                
                   
            });}


    



    useEffect(() => {
        getWatchlist(Cookies.get('token'),Cookies.get('user_id')).then(res => {
            const names = formatNames(res)
            setFetchCoinNames(names.toString())

            if (names.length <= 50 && names != ''){
            getCoinData(names).then(res => {
                setDisplayData(res)
            })
        }
        })

        
    
    }, [])



    return (
        <>
        <Header />
        <div className='mt-20'></div>
        <h1 className='w-11/12 mx-auto text-3xl text-center text-purple-700 font-lobster'> WatchList </h1>
        <CoinListed filteredCoins={displayData} isWatch={isWatch}/>
       
        <Footer />
        </>
    )
}