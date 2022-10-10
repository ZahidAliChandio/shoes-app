import axios from 'axios';

export default axios.create({
    baseURL: 'https://shoes-app-2b7d5-default-rtdb.firebaseio.com/',
    headers: {
        'Content-Type': 'application/json'
    },
})