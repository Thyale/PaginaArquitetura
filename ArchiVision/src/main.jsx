import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Cabecalho from './Header/Cabecalho'
import CorpoMain from './Corpo/CorpoMain'
import Footer from './Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabecalho/>
    <CorpoMain/>
    <Footer/>
  </React.StrictMode>,
)
