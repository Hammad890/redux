import axios from "axios";

class PostAxiosInstance {
    constructor(baseURL) {
        this.postAxiosInstance = axios.create({
            baseURL: baseURL || '',
            timeout: 5000,
            headers: {
                "Content-Type": "application/json",
            },
        });
        this.setupInterceptors();
}
  setupInterceptors(){
    this.postAxiosInstance.interceptors.request.use(
      (config) => {
         const token = localStorage.getItem('authtoken')
         if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
         }
         return config;
      },
      (error) => Promise.reject(error),
    );
      this.postAxiosInstance.interceptors.response.use(
        (response) => {
         return response;
        },
        (error) => {
            if (error.response) {
              console.error('Response error:', error.response.status, error.response.data);
            switch(error.response.status){
                    case 401:
                        localStorage.removeItem('authtoken');
                        window.location.href = '/login';
                        break;
                case 500:
                console.log('Internal Server Error');
                break;
                case 404:
                console.log('Not Found');
                break;
                default:
                  console.log(`Unhandled status code: ${error.response.status}`);
            }
        }else if(error.request) {
            console.log('Request Error',error.request)
        }else{
            console.log('Network Error', error.message)
        }
        return Promise.reject(error)
        }
      );
  }
  get(url, config) {
    return this.postAxiosInstance.get(url, config);
  }
  post(url, data,config) {
    return this.postAxiosInstance.post(url, data,config);
  }
  
  put(url, data, config) {
    return this.postAxiosInstance.put(url, data, config);
}

delete(url, config) {
    return this.postAxiosInstance.delete(url, config);
}
}

const axiosInstance= new PostAxiosInstance('https://jsonplaceholder.typicode.com'); 
export default axiosInstance;