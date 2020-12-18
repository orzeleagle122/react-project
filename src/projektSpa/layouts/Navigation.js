import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const lists=[
    {name: "start", path: "/", exact:true},
    {name: "produkty", path: "/product"},
    {name: "kontakt", path: "/contact"},
    {name: "panel admina", path: "/admin"}
];

const Navigation = () => {
    const menu=lists.map((list)=>(
        <li key={list.name}><NavLink exact={list.exact?list.exact:false} to={list.path}>{list.name}</NavLink></li>
    ));

    return ( 
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
     );
}
 
export default Navigation;