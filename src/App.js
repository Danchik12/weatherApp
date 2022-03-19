import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './shared/Header/Header'
import Popup from './shared/Popup/Popup'
import {PopupState} from './context/Popup/PopupState'
function App() {
  
  return (
   
 <PopupState>
    <Popup/>
    <div className="container">
    <Header/>
    <Routes>
    <Route path='/weatherApp'  exact element={<Home/>} />
   


    </Routes>
 </div>
 </PopupState>
 
  );
}

export default App;
