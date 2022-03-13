import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import MonthStatic from './pages/MonthStatic/MonthStatic'
import Header from './shared/Header/Header'

function App() {
  return (
    <div className="container">
    <Header/>
    <Routes>
    <Route path='/'  exact element={<Home/>} />
    <Route path='/month-statistic' exact element={<MonthStatic/>} />


    </Routes>
 </div>
  );
}

export default App;
