import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './Layout.scss';
import SiteHeader from './SiteHeader';
import OverviewPage from '../Pages/OverviewPage';
import AddProductPage from '../Pages/AddProductPage';
import EditProductPage from '../Pages/EditProductPage';
import ProductDetailsPage from '../Pages/ProductDetailsPage';

const Layout: React.FC = () => {
    return (
        <div className="layout">
            <SiteHeader/>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={OverviewPage}/>
                    <Route path="/overview" exact component={OverviewPage}/>
                    <Route path="/product/details/:code" exact strict component={ProductDetailsPage}/>
                    <Route path="/product/edit/:code" exact component={EditProductPage}/>
                    <Route path="/product/add" exact component={AddProductPage}/>
                </Switch>
            </div>
        </div>
    );
};

export default Layout;
