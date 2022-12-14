/*
import Layout from '../../Components/Layout'
import Navbar from '../../Components/Navbar' 
import ItemListContainer from '../../Components/ItemListContainer'
import CartWidget from '../../Components/CartWidget'
import Home from '../../Components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () =>{
    const menus=[{
        name: 'Inicio',
        href: '/'
    }]
    const categorias = [
        {
            name: 'Ropa para Embarazada',
            id: 1
        },
        {
            name: 'Ropa para bebes',
            id: 2
        },
        {
            name: 'Accesorios',
            id: 3
        },
        {
            name: 'Juguetes',
            id: 4
        }]
    const Productos = ['Ropa para Embarazada','Ropa para bebes','Accesorios','Juguetes'];

    return(
        <Layout>
            <BrowserRouter className='App'>
                <Navbar menu={menus} categorias={categorias}>
                    <Routes>    
                        <Route exact path='/' element= {<Home />}/>
                        <Route ></Route>
                        <Route ></Route>
                        <Route ></Route>
                        <Route ></Route>  
                    </Routes>
                    <CartWidget/>
                </Navbar>
            </BrowserRouter>
        </Layout>
    )
}

export default App*/
import Layout from '../../Components/Layout';
import Navbar from '../../Components/Navbar';
import ItemListContainer from '../../Components/ItemListContainer';
import ItemDetailContainer from '../../Components/ItemDetailContainer';
import Home from '../../Components/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Menus } from '../../mocks';



const App = () => {
    
    return (
        <Layout>   
            <BrowserRouter>
                <Navbar menus={Menus} />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/categoria/:categoriaid' element={<ItemListContainer />}/>
                    <Route exact path='/item/:itemid' element={<ItemDetailContainer />}/>
                </Routes>
            </BrowserRouter>  
        </Layout>
    )
}

export default App;