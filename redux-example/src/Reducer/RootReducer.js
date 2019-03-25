import { combineReducers } from 'redux';
import postReducer from './PostReducer';


const allReducers = combineReducers({
    posts:postReducer
});

export default allReducers ;