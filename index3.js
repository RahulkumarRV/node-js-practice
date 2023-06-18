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


// how to call post api in axios
// axios.post('https://jsonplaceholder.typicode.com/posts', {
//     body: {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     },
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// }).then(response => console.log(response)).
//     catch(error => console.log(error));

// how to call post api in axios
// axios.put('https://jsonplaceholder.typicode.com/posts/1', {
//     body: {
//         id: 1,
//         title: 'foler',
//         body: 'bar',
//         userId: 1,
//     },
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// }).then(response => console.log(response)).
//     catch(error => console.log(error));

// how to call delete api in axios
// axios.delete('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => console.log(response)).catch(error => console.log(error));

//how to use interceptors to handle api state
axios.interceptors.request.use(config => {
    // Modify request config before sending
    console.log('Request Interceptor:', config);
    config.params = {
        page: 1,
        limit: 10
    }
    return config;
  }, error => {
    console.error('Request Interceptor Error:', error);
    return Promise.reject(error);
  });

axios.get('https://jsonplaceholder.typicode.com/posts/1', {
  params: {
    page: 1,
    limit: 10
  },
  headers: {
    'Authorization': 'Bearer token123'
  }
})
  .then(response => {
    console.log('Response:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });