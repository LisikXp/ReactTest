import {ADD_POST, DELETE_POST, EDITE_POST, FETCH_POST} from '../actions/types';

export default function postReducer(state = [], action) {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payload];
        case EDITE_POST:
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = action.payload
            return state

        case DELETE_POST:
            return state.filter(post => post.id !== action.payload.id);
        case FETCH_POST:
            return action.posts;
        default:
            return state;
    }
}