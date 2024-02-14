import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './components/Error';

const App = () => {

  return (
    <>

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>

        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>

        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

        <Route path='*' element={<Error/>}/>
        
      </Routes>

      <Footer/>
      
    </BrowserRouter>

    </>
  );
};

export default App;