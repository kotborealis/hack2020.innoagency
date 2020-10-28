import {combineReducers} from 'redux';
import {appReducer} from '../features/appSlice';

export default combineReducers({
    app: appReducer
});