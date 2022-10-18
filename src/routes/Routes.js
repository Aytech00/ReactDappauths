import React from 'react'

import{ Routes, Route, Navigate } from 'react-router-dom'
import Ethereum from '../pages/Ethereum'
import Binance from '../pages/Binance'
import Polygon from '../pages/Polygon'
import PolygonWithdraw
 from '../pages/PolygonWithdraw'
 import EthereumWithdraw
  from '../pages/EthereumWithdraw'
  import BinanceWithdraw from '../pages/BinanceWithdraw'

const Routers = () => {
  return (
   <Routes>
    <Route path='/' element={<Navigate to = './ethereum'/>} />
    <Route path='/binance ' element={<Binance />} />
    <Route path='/ethereum ' element={<Ethereum />} />
    <Route path='/polygon' element={<Polygon />} />
    <Route path='/polygonWithdraw' element={<PolygonWithdraw/>} />
    <Route path='/ethereumWithdraw' element={<EthereumWithdraw/>} />
    <Route path='/binanceWithdraw' element={< BinanceWithdraw/>} />
   </Routes>
  )
}

export default Routers