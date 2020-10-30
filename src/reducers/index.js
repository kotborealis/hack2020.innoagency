import {combineReducers} from 'redux';
import {appReducer} from '../features/appSlice';
import {addPetFormReducer} from '../features/addPetForm';

export default combineReducers({
    app: appReducer,
    addPetForm: addPetFormReducer
});