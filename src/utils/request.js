
import axios from 'axios'
import moment from 'moment'
import store from '../store'
import Notify from 'vant/lib/Notify'
import 'vant/lib/Notify/style'
moment.locale('zh-cn')

// 统一配置
const FEBS_REQUEST = axios.create({
  // baseURL: 'http://120.27.155.99:8088/api/v1/', // 从生产环境中读取请求前缀
  // baseURL: 'http://47.106.68.94:18000', // 从生产环境中读取请求前缀
  // baseURL: '127.0.0.1:80', //配置nginx跨域请求
  baseURL: '/api',
  responseType: 'json',
  validateStatus (status) {
    // 200 外的状态码都认定为失败as
    return status === 200
  }
})
// 拦截请求123
FEBS_REQUEST.interceptors.request.use((config) => {
  // let expireTime = store.state.account.expireTime
  // let now = moment().format('YYYYMMDDHHmmss')
  // // 让token早10秒种过期，提升“请重新登录”弹窗体验
  // if (now - expireTime >= -10) {
  //   Modal.error({
  //     title: '登录已过期',
  //     content: '很抱歉，登录已过期，请重新登录',
  //     okText: '重新登录',
  //     mask: false,
  //     onOk: () => {
  //       return new Promise((resolve, reject) => {
  //         // db.clear()
  //         location.reload()
  //       })
  //     }
  //   })
  // }
  // 有 token就带上
  if (store.state.account.token) {
    config.headers.Authorization = store.state.account.token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 拦截响应
FEBS_REQUEST.interceptors.response.use((config) => {
  return config
}, (error) => {
  if (error.response) {
    let errorMessage = error.response.data === null ? '系统内部异常，请联系网站管理员' : error.response.data.message
    switch (error.response.status) {
      case 404:
        Notify({ type: 'danger', message: '很抱歉，资源未找到' })
        break
      case 403:
      case 401:
        Notify({
          type: 'danger',
          message:
            '很抱歉，您无法访问该资源，可能是因为没有相应权限或者登录已失效'
        })
        break
      default:
        Notify({
          type: 'danger',
          message: errorMessage
        })
        break
    }
  }
  return Promise.reject(error)
})

const request = {
  post (url, params) {
    if (url === 'file/upload') {
      return FEBS_REQUEST.post(url, params, {
        transformRequest: [(params) => {
          const formData = new FormData()
          for (const item in params) {
            formData.append(item, params[item])
          }
          return formData
        }],
        headers: {
          'Content-Type': '',
          credentials: 'same-origin'
        }
      })
    } else {
      return FEBS_REQUEST.post(url, params, {
        transformRequest: [(params) => {
          let result = ''
          Object.keys(params).forEach((key) => {
            if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
              result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
            }
          })
          return result
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    }
  },
  put (url, params) {
    if (url === 'ys/class/course/excel' ||
            url === 'ys/dietary/excel' ||
            url === 'user/student/excel' ||
            url === 'school/excel' ||
            url === 'user/teacher/excel' ||
            url === 'patriarch/excel' ||
            url === 'classInfo/excel' ||
            url === 'user/teacher/principal/excel') {
      return FEBS_REQUEST.put(url, params, {
        transformRequest: [(params) => {
          const formData = new FormData()
          for (const item in params) {
            formData.append(item, params[item])
          }
          return formData
        }],
        headers: {
          'Content-Type': '',
          credentials: 'same-origin'
        }
      })
    } else {
      return FEBS_REQUEST.put(url, params, {
        transformRequest: [(params) => {
          let result = ''
          Object.keys(params).forEach((key) => {
            if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
              result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
            }
          })
          return result
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    }
  },
  get (url, params) {
    let _params
    if (Object.is(params, undefined)) {
      _params = ''
    } else {
      _params = '?'
      for (const key in params) {
        if (params.hasOwnProperty(key) && params[key] !== null) {
          _params += `${key}=${params[key]}&`
        }
      }
    }
    return FEBS_REQUEST.get(`${url}${_params}`)
  },
  delete (url, params) {
    let _params
    if (Object.is(params, undefined)) {
      _params = ''
    } else {
      _params = '?'
      for (const key in params) {
        if (params.hasOwnProperty(key) && params[key] !== null) {
          _params += `${key}=${params[key]}&`
        }
      }
    }
    return FEBS_REQUEST.delete(`${url}${_params}`)
  },
  export (url, params = {}) {
    // message.loading('导出数据中')
    return FEBS_REQUEST.post(url, params, {
      transformRequest: [(params) => {
        let result = ''
        Object.keys(params).forEach((key) => {
          if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
            result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
          }
        })
        return result
      }],
      responseType: 'blob'
    }).then((r) => {
      const content = r.data
      const blob = new Blob([content])
      const fileName = `${new Date().getTime()}_导出结果.xlsx`
      if ('download' in document.createElement('a')) {
        const elink = document.createElement('a')
        elink.download = fileName
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href)
        document.body.removeChild(elink)
      } else {
        navigator.msSaveBlob(blob, fileName)
      }
    }).catch((r) => {
      // eslint-disable-next-line no-console
      console.log(r.data)
      // console.error(r)
      //  message.error('导出失败')
    })
  },
  download (url, params, filename) {
    // message.loading('文件传输中')
    return FEBS_REQUEST.post(url, params, {
      transformRequest: [(params) => {
        let result = ''
        Object.keys(params).forEach((key) => {
          if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
            result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
          }
        })
        return result
      }],
      responseType: 'blob'
    }).then((r) => {
      const content = r.data
      const blob = new Blob([content])
      if ('download' in document.createElement('a')) {
        const elink = document.createElement('a')
        elink.download = filename
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href)
        document.body.removeChild(elink)
      } else {
        navigator.msSaveBlob(blob, filename)
      }
    }).catch((r) => {
      // eslint-disable-next-line no-console
      console.log(r)
      // console.error(r)
      // message.error('下载失败')
    })
  },
  upload (url, params) {
    return FEBS_REQUEST.post(url, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export default request
