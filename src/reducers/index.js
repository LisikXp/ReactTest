import { combineReducers } from 'redux';
import post from './PostRed';

export default combineReducers({
    posts: post
});