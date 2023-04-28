import { combineReducers } from 'redux';
import userAuthReducer from './Reducer/AuthReducer';
import propertyReducer from './Reducer/propertyReducer';
import statusReducer from './Reducer/StatusReducer';
const reducer = combineReducers({
    userAuth:userAuthReducer,
    status:statusReducer,
    property:propertyReducer
});
export default reducer;
