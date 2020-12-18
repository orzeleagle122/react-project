import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import ProductPage from '../pages/ProductPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import ProductListPage from '../pages/ProductListPage';


const Page = () => {
    return ( 
        <>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/product" exact component={ProductListPage} />
            <Route path="/product/:id" exact component={ProductPage} />
            <Route path="/admin" exact component={AdminPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route component={ErrorPage} />
        </Switch>
        </>
     );
}
 
export default Page;