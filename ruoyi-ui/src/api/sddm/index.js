import ajax from './ajax'
const BASE_URL = '/api'

////////自动化测试平台接口
// export const getsdkversion_api =()=> ajax(BASE_URL+'/api/sdkversion')
// export const reqAddress =(param)=> ajax('/position/${param}')
//股票代码
export const getstocktypecode_delete_api =(param)=> ajax(BASE_URL+'/stocktypecode/${param}')
export const getstocktypecode_post_api =(param)=> ajax(BASE_URL+'/stocktypecode/new',{param},'POST')
export const getstocktypecode_get_api =()=> ajax(BASE_URL+'/stocktypecode')

//接口管理
export const getSDKinterface_get_api =()=> ajax(BASE_URL+'/api/sdkinterface',{},'GET')
export const getSDKinterface_remove_api =(param)=> ajax(BASE_URL+'/api/sdkinterface',param.id,'POST')