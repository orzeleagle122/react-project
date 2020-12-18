import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductListPage.css';

const product = ["car", "bike", "motocycles"];

const ProductListPage = () => {
    const list=product.map(item=>(
        <li key={item}>
            <Link to={`/product/${item}`}>{item}</Link>
        </li>
    ))
    return ( 
        <div className="products">
            <h2>Lista produktów</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
     );
}
 
export default ProductListPage;