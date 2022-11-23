import Layout from '../../Components/Layout'
import NavBar from '../../Components/NavBar' 
import ItemListContainer from '../../Components/ItemListContainer'
import CartWidget from '../../Components/CartWidget'


const Initial = () =>{
    const Menus = ['Inicio', 'Productos','Galeria','Contactanos']
    const Productos = ['Ropa para Embarazada','Ropa para bebes','Accesorios','Juguetes'];

    return(
        <>
        <Layout>
            <NavBar menus={Menus}></NavBar>
            <CartWidget/>
        </Layout>
        <ItemListContainer listas={Productos}/>
        </>
    )
}

export default Initial