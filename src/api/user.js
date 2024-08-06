import request from './request'

export const getUser = (params) => {
  return request({
    url: '/user',
    params
  })
}

export const changeUserState = (uid, type) => {
  return request({
    url: `users/${uid}/state/${type}`,
    method: 'PUT' // 假设是一个 PUT 请求，根据实际情况修改
  })
}

export const addUser = () =>{
  return request({
    url:'users',
    method:'post'
  })
}