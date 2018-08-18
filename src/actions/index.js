import axios from 'axios';
import {ADD_POST, DELETE_POST, EDITE_POST, FETCH_POST} from './types';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const createPost = ({title, body}) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, {title, body})
            .then(response => {
                dispatch(createPostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createPostSuccess = (data) => {
    return {
        type: ADD_POST,
        payload: {
            id: data.id,
            title: data.title,
            body: data.body
        }
    }
};

export const editePost = ({title, body, id}) => {
    return (dispatch) => {
        return axios.put(`${apiUrl}/${id}`, {title, body})
            .then(response => {

                dispatch(editePostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const editePostSuccess = (data) => {
    return {
        type: EDITE_POST,
        payload: {
            id: data.id,
            title: data.title,
            body: data.body
        }
    }
};


export const deletePostSuccess = id => {
    return {
        type: DELETE_POST,
        payload: {
            id
        }
    }
}

export const deletePost = id => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/${id}`)
            .then(response => {
                if (response.status === 200){
                    dispatch(deletePostSuccess(id))
                }

            })
            .catch(error => {
                throw(error);
            });
    }
};


export const fetchPosts = (posts) => {
    return {
        type: FETCH_POST,
        posts
    }
};

export const fetchAllPosts = (start, end) => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                let arr = response.data
                let arrslice = arr.slice(start, end)
                // console.log(arrslice);
                dispatch(fetchPosts(arrslice))
            })
            .catch(error => {
                throw(error);
            });
    };
};