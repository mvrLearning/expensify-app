import React from 'react';
import {BrowserRouter, Route,Link,Switch,NavLink } from 'react-router-dom';

import AddExpensePage from './../components/AddExpensePage';
import NotFoundPage from './../components/NotFoundPage';
import HelpExpensePage from './../components/HelpExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import Header from './../components/Header';

const AppRouter = () =>(
    <BrowserRouter>
    <div>
    <Header />
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage}/>
        </Switch>
    </div>
    
</BrowserRouter>
)

export default AppRouter;