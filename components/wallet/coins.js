import { currentCoins } from '/services/cryptoApi'
import Table from './tableHelper'


export default function Coins({ transactions }){

    const actualCoins = currentCoins(transactions)
    const columns = [
        {
          Header: 'Coin',
          accessor: 'coin'
        }, 
        {
          Header: 'Units',
          accessor: 'units'
        }, 
      ]
    
    return(
        <div className='w-11/12 p-2 mx-auto mt-8 font-light rounded-lg bg-gradient-to-b from-gray-100 via-gray-50 to-white '>
            <h2 className='text-3xl text-purple-800'>Coin Portfolio</h2>
            <Table data={actualCoins} columns={columns}></Table>
        </div>
    )
}