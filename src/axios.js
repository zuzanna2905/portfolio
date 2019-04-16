import axios from 'axios';

const instance = axios.create({
    baseURL: "https://cafes-e280d.firebaseio.com/"
});

export default instance;