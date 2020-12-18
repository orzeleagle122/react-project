import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = ({match}) => {
    return ( 
        <>
        <div>
            Strona produktu
        </div>
        <Product id={match.params.id}/>
        <Link to="/product">Powrot do listy produktów</Link>
        </>
     );
}
 
export default ProductPage;