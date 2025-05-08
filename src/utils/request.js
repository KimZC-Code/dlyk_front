import axios from "axios";
import { ElMessage } from "element-plus";
import router from "../routers";
const request = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
request.interceptors.request.use(
  (config) => {
    // 排除登录相关的URL
    const excludeUrls = ['/api/login', '/login' , '/loginView'] // 根据你的实际登录接口路径调整
    
    if (excludeUrls.some(url => config.url.includes(url))) {
      return config
    }
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
        config.headers['rememberMe'] = true
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
request.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code === 200) {
      return res.data;
    } else {
      return Promise.reject(new Error(res.message || "Error"));
    }
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401: token失效
          // router.push('/login')
          break;
        case 403:
          // 403: 无权限
          break;
        case 404:
          // 404: 接口不存在
          ElMessage.error("接口不存在");
          break;
        case 500:
          // 500: 服务器错误
          if(error.response.data.data == 'Token已失效'){
            ElMessage.warning('登录超时，请重新登录')
            localStorage.removeItem('token')
            router.push('/loginView')
          }else{
            ElMessage.error("服务器错误");
          }
          break;
        default:
          break;
      }
      return Promise.reject(error);
    }
  }
);
export default request;
