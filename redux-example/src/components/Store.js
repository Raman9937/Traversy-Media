import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../Reducer/RootReducer';

const initialState={};

// middleware
const middleware =[thunk];

//create a  store
const store=createStore(allReducers,
    initialState, 
    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )
    )


export default store;