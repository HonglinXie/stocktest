import ajax from './ajax'
const BASE_URL = '/api'

////////自动化测试平台接口
// export const getsdkversion_api =()=> ajax(BASE_URL+'/api/weather/city/101030100')

export const getsdkversion_api =()=> ajax(BASE_URL+'/api/sdkversion')
// export const reqAddress =(param)=> ajax('/position/${param}')

