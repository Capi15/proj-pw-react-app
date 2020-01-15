import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import APP from './App';
import Wallet from './Wallet';

export default AppRouter => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className='mt-5'>
                <Switch>
                    <Route exact={true} path='/' component={APP}></Route>
                    <Route path='/login' component={requiresGuest(Wallet)} />
                    <Route path='*'>
                        <p>Error 404, Not Found</p>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};
