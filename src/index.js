import React from 'react';
import ReactDOM from 'react-dom';
import {Suspense} from 'react';
import {NetworkErrorBoundary, CacheProvider} from 'rest-hooks';
import {MockProvider} from '@rest-hooks/test';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import {ViewLanding} from './views/Landing/';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import {AnimalResourceFixtures} from './resources/Animal';
import {ViewAddPet} from './views/AddPet';

const store = configureStore({
    reducer: rootReducer
});

const RouterRoot = ({children}) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_PATH || '/'}>
            <Switch>
                {children}
            </Switch>
        </BrowserRouter>
    );
};

const Routes = () => {
    return (<>
        <Route path="/addPet">
            <ViewAddPet/>
        </Route>
        <Route exact path="/">
            <ViewLanding/>
        </Route>
    </>);
};

ReactDOM.render(<Provider store={store}>
        <CacheProvider>
            <MockProvider results={AnimalResourceFixtures.basic}>
                <RouterRoot>
                    <Routes/>
                </RouterRoot>
            </MockProvider>
        </CacheProvider>
    </Provider>
    , document.getElementById('root'));