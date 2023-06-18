// in this file, i will learning about how to make asynchronous api call with axios 
// and how to use axios effectively

import axios from 'axios';


//how to use get api in axios
// axios.get('https://jsonplaceholder.typicode.com').
//     then(response => console.log('response : ' , response)).
//     catch(err => console.error('Error: ', err));

// create a function which call multiple apis concurrently
// async function getPosts(ids) {

//     const apipromisses = await Promise.all(ids.map(id => getPostWithID(id)));
//     apipromisses.forEach((post, index) => console.log(' Post index ' + index, post));
// }

// function getPostWithID(id){
//     return new Promise(resolve => {
//         axios.get('https://jsonplaceholder.typicode.com/posts/' + id).
//             then(resonse => resolve(resonse));
//     });
// }

// getPosts([1, 2, 3]);