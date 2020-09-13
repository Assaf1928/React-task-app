import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import NewOrder from './containers/newOrder/newOrder';
import Orders from './containers/Orders/Orders';
import * as serviceWorker from './serviceWorker';
import Layout from '../src/hoc/Layout/Layout';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import orderersReducer from './store/reducers/orders'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  orders : orderersReducer
})
const store = createStore(rootReducer,composeEnhancers(
  applyMiddleware(thunk)
));


ReactDOM.render(
  <Provider store={store}>    

<React.StrictMode>

<BrowserRouter>

    <Layout>   
    <Switch>
    <Route  path="/newOrder" component={NewOrder} />
  <Route path="/" component={Orders} />
</Switch>
    </Layout>
    </BrowserRouter>

  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
