import axios from 'axios';
const url = `${import.meta.env.VITE_API_URL}/api`;
import { router } from '../router';

const Api = axios.create({
    baseURL: url,
    headers: {'Access-Control-Allow-Origin': '*'},
})

Api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (401 === error.response.status) {
        // swal({
        //     title: "Session Expired",
        //     text: "Your session has expired. Would you like to be redirected to the login page?",
        //     type: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#DD6B55",
        //     confirmButtonText: "Yes",
        //     closeOnConfirm: false
        // }, function(){
        //     window.location = '/login';
            
        //     return Promise.reject(error)
        // });
        localStorage.removeItem('user')
        router.push('/login');
        window.location.reload(true);
        return Promise.reject(error)
    } else {
        return Promise.reject(error);
    }
});

export default Api