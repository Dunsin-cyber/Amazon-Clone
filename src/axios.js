import axios from 'axios';

//base URL to make requests to the movie database
const instance = axios.create({
    baseURL: "",

});

instance.get ('/foo-bar');

export default instance;