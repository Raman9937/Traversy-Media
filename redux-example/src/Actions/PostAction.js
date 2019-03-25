import { FETCH_POST, NEW_POST } from './Types';


//FETCH_POST
export function fetchPost(){
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts=> dispatch({
            type:FETCH_POST,
            payLoad:posts
        }))
    }
 };

 //NEW_POST
export const createPost = (postData) => dispatch => {
    //console.log('post action call');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers : {
            'content-type' :' application/json '
        },
        body: JSON.stringify(postData)
    })
    
    .then(res => res.json())
    .then (post => dispatch({
        type:NEW_POST,
        payLoad:post
    }));
};


 //ES6
//  export const fetchPost = () => dispatch => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res=>res.json())
//     .then(posts=> dispatch({
//         type:FETCH_POST,
//         payLoad:posts
//  } 
// }

