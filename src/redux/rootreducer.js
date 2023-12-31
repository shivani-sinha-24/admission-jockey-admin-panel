import { combineReducers } from 'redux';
import userAuthReducer from './Reducer/AuthReducer';
import propertyTypeReducer from './Reducer/propertyReducer';
import statusReducer from './Reducer/StatusReducer';
import universityCourseReducer from './Reducer/UniversityCourseReducer';
import collegeCourseReducer from './Reducer/CollegeCourseReducer';
import categoryReducer from './Reducer/CategoryReducer';
import seoReducer from './Reducer/SeoReducer';
import webReducer from './Reducer/WebReducer';
const reducer = combineReducers({
    userAuth:userAuthReducer,
    status:statusReducer,
    propertyType:propertyTypeReducer,
    category:categoryReducer,
    universityCourse:universityCourseReducer,
    collegeCourse:collegeCourseReducer,
    seo:seoReducer,
    webSite:webReducer
});
export default reducer;
