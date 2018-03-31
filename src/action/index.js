import axios from 'axios';

export function fetchUsers(store) {
    
    const request = axios.get("https://reqres.in/api/users");
request.then((response) => {
console.log(store)
    store.dispatch({type:"GETDATA",payload:response.data})
})

};

