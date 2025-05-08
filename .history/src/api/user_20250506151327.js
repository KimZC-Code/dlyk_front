import request from "../utils/request";
/**
 * 
 * @param {*} data 登录的账号密码等
 * @returns 响应数据
 */
export function login(data) {
    return request({
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/api/login",
        data: data
    })
}
/**
 * 获取当前登录用户的信息
 * @returns 响应数据
 */
export function getLogInfo(){
    return request({
        method: "get",
        url: "/api/user/log/info"
    })
}
/**
 * 免密登录
 * @returns 响应数据
 */
export function freeLogin(){
    return request({
        method: "get",
        url: "/api/user/freeLogin"
    })
}

/**
 * 退出登录
 * @returns 响应数据
 */
export function logout() {
    return request({
        method: "get",
        url: "/api/user/logout"
    })
}
/**
 * 分页查询用户列表
 * @param {*} params 分页页码和每页条数
 * @returns 响应数据
 */
export function getUserPage(params){
    return request({
        method: "get",
        url: "/api/user/queryUserPage",
        params:params
    })
}
/**
 * 根据id查询用户
 * @param {*} data 要查询的用户的id
 * @returns 响应数据
 */
export function getUserById(data){
    return request({
        method: "post",
        url: '/api/user/queryUserById',
        data: data
    })
}
/**
 * 添加用户
 * @param {*} data 要添加的用户的信息
 * @returns 响应数据
 */
export function addUser(data){
    return request({
        method: 'post',
        url: '/api/user/addUser',
        data: data
    })
}
/**
 * 根据多个id删除多个用户
 * @param {*} data 要删除的多个用户的id
 * @returns 响应数据
 */
export function deleteUserByIds(data){
    return request({
        method: 'post',
        url: '/api/user/deleteByUserIds',
        data: data
    })
}
/**
 * 修改用户
 * @param {*} data 传入的新数据
 * @returns 响应数据
 */
export function updateUser(data){
    return request({
        method: 'post',
        url: '/api/user/updateUser',
        data: data
    })
}