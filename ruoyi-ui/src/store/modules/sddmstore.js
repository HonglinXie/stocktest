import {getsdkversion_api} from '../../api/sddm/index'
//  自动化测试平台添加

const state = {
  sdkversions: [
    {
      id: "",
      schemaId: "",
      collectionName: "",
      data:
        {
          sdkVersion: "555",
          title: "wwww"
        },
      status: ""
    }
  ]
}

const mutations = {
    GET_SDKVERSION(state, address){
    state.sdkversions = address
  },
}

const actions = {
   getsdkversion_action(context){
     const res =  getsdkversion_api()
     res.then(function (response) {
       // console.log(response)
       context.commit('GET_SDKVERSION',response)
     })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
