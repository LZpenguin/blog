import axios from 'axios'

let instance = axios.create({
  baseURL: 'http:localhost:3000',
  timeout: 5000
})

//请求拦截
instance.interceptor.requset.use(req => {
  return req
},err => {
  console.error('请求失败',err);
})

//响应拦截
instance.interceptors.response.use(res => {
  return res
},err => {
  console.error('响应失败',err);
})

//封装http请求方法
async function http(option = {}) {
  let result = null;
  if(option.method === 'get'||option.method === 'delete') {
    await instance[option.method] (
      option.path,
      {
        params: option.params
      }
    ).then(res => {
      result = res
    }).catch(err => {
      result = err
    })
  }else if(option.method === 'post'||option.method === 'put') {
    await instance[option.method] (
      option.path,
      option.params
    ).then(res => {
      result = res
    }).catch(err => {
      result = err
    })
  }
  return result
}

export default http