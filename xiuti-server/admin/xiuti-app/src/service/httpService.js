import axios from 'axios'
import store from '../store'
import router from '../router'
import Vue from 'vue'

export function httpRequest (options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: process.env.BASE_API,
            timeout: 2000
        })
        instance(options)
            .then(response => {
                const res = response.data
                if (res.code && res.code !== 20000) {
                    console.log(options) // for debug
                    Vue.prototype.$message.error(res.message, 5)
                    // 50014:Token 过期了 50012:其他客户端登录了 50008:非法的token
                    if (res.code === 50008 || res.code === 50014 || res.code === 50012) {
                        Vue.prototype.$message.error(res.message, 5)
                        // router.push({path: '/'})
                        // TODO
                        store.dispatch('FedLogOut').then(() => {
                            router.push({ path: '/login' })
                        })
                    }
                    reject(res)
                }
                resolve(res)
            })
            .catch(error => {
                Vue.prototype.$message.error(error.message, 5)
                console.log(error) // for debug
                reject(error)
            })
    })
}
