import { combineReducers } from 'redux'; //destructuring
import news from './news';
import users from './users';


export default combineReducers({
    news: news,
    users

})