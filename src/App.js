import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'

import Header from './shared/Header/Header'
import Popup from './shared/Popup/Popup'

function App() {
  return (
    <>
 
   
    <div className="container">
    <Header/>
    <Routes>
    <Route path='/'  exact element={<Home/>} />
   


    </Routes>
 </div>
 
 </>
  );
}

export default App;
