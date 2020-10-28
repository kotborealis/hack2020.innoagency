import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter, Route, Switch} from 'react-router';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import {ViewLanding} from './views/Landing/';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore({
    reducer: rootReducer
});

const RouterRoot = ({children}) => {
    return (
        <MemoryRouter basename={process.env.PUBLIC_PATH || '/'}>
            <Switch>
                {children}
            </Switch>
        </MemoryRouter>
    );
};

const Routes = () => {
    return (<>
        <Route exact path="/">
            <ViewLanding/>
        </Route>
    </>);
};

ReactDOM.render(<Provider store={store}>
        <RouterRoot>
            <Routes/>
        </RouterRoot>
    </Provider>
    , document.getElementById('root'));