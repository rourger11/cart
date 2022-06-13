import Navigation from './Components/Navigation/Navigation';
import React from 'react';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Cart from './Components/actions/Cart'
import Home from './Components/Home/Home';
import NotFound from './Components/Notfound/NotFound';

function App() {


  return (
    <div className="App">

 <BrowserRouter>
 {/* <Navigation/> */}

      <Routes>
      <Route path='/' element={<Home/>}/>
          <Route path='Cart' element={<Cart/>}/>
          <Route path='/*' element={<NotFound/>}/>


      </Routes>
      </BrowserRouter>   </div>
  );
}

export default App;
