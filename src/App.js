import React from 'react'; 
import './App.css';
import './Head.css';
import Head from './Head.js';
import Navbar from './Navbar.js';
import Banner from './Banner';
import Products from './Products.js';
import Contactlens from './Contactlens.js';
import Footer from './Footer.js';
import Cartpage from './Cartpage.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [val,setVal] = useState([]);

  return (
    <div className="App">
      
      <BrowserRouter>
      <Head add={val}></Head>
      <Navbar></Navbar>

      <Routes>
      <Route path="/specarts" element={<Banner/>}></Route>
      </Routes>
      <Routes>
      <Route path="//specarts" element={<Products setData={setVal}/>}></Route>
      </Routes>
      <Routes>
      <Route path="/specarts" element={<Contactlens/>}></Route>
      </Routes>
      <Routes>
      <Route path="Cartpage" element={<Cartpage get={val} setGet={setVal}/>}></Route>
      </Routes>
      
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
