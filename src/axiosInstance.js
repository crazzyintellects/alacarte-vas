import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: 'https://alacarte-vas.firebaseio.com/'

});
export default axiosInstance;