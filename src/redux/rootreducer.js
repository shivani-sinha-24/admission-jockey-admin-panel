import { combineReducers } from 'redux';
import userAuthReducer from './Reducer/AuthReducer';
import propertyTypeReducer from './Reducer/propertyReducer';
import statusReducer from './Reducer/StatusReducer';
const reducer = combineReducers({
    userAuth:userAuthReducer,
    status:statusReducer,
    propertyType:propertyTypeReducer
});
export default reducer;
