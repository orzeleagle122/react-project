import React from 'react';
// import ProductListPage from '../pages/ProductListPage';

const Product = (props) => {
    return ( 
        <articles className="product">
            <h1>{props.id}</h1>
        </articles>
     );
}
 
export default Product;