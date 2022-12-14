import ItemListContainer from "../ItemListContainer";
import './Home'

import Proptypes from 'prop-types'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productoslista } from "../../mocks"

const Home = ({menus}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productoslista);
            }, 1000)
        });
        getData.then(res => setData(res))
    }, [])

    return (
        <div className="home__container">
            <div className='home__containerflex'>
                { data && data.map((productoslista, index) =>{
                    const newKey = `${productoslista}-${index}`
                    return (
                        <Link to={productoslista.href} key={newKey} className="home__itemcontainer">
                            <img src={productoslista.img} alt="" />
                            <div className='home__detalles'>
                                <p className="home__items">{productoslista.producto}</p>
                            </div>
                        </Link>
                    )  
                })
                } 
            </div>      
        </div>
        )
}

Home.proptype = {
    listasproductos: Proptypes.array.isRequired,
    menus: Proptypes.array.isRequired
}

export default Home;