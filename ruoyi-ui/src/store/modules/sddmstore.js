import {
  getsdkversion_api,
  getstocktypecode_delete_api,
  getstocktypecode_post_api,
  getstocktypecode_get_api,
  getSDKinterface_get_api,
} from '../../api/sddm/index'
//  自动化测试平台添加

const state = {
  // sdkversions: [{
  //   id: "",
  //   schemaId: "",
  //   collectionName: "",
  //   data: {
  //     sdkVersion: "555",
  //     title: "wwww"
  //   },
  //   status: ""
  // }],

  //股票代码
  stockTypeCode: {
    studentData: [{
      stock_type: '上证A股',
      stock_id: 'SH1001',
    }],
    filter: {
      versionName: ''
    }, //查询条件
    activeCollapse: 'search', //开关查询折叠面板
    pagination: {
      total: 0,
      current: 1,
      pageSize: 10
    },

    editVisible: false,
    dialogFormVisible: false,
    form: {
      stock_type: '',
      stock_id: '',
      platform: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
      domains: [{
        value1: '',
        value2: '',
        value3: ''
      }],
    },
    dialogupdataVisible: false,
    updata: {
      stock_type: '',
      stock_id: '',
      platform: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    },
    formLabelWidth: '120px'

  },

  //接口管理
  SDKinterface: {
    studentData: {
      interface_name: '历史K线',
      interface_describe: '查询历史K线',
      domains: 'OHLCV3_1',
      domains2: 'OHLCV2TestCase',
      android: '',
      ios: '',
    },
    filter: {
      interfaceName: ''
    }, //查询条件
    activeCollapse: 'search', //开关查询折叠面板
    pagination: {
      total: 0,
      current: 1,
      pageSize: 10
    },
    editVisible: false,
    dialogFormVisible: false,
    form: {
      interface_name: '',
      interface_describe: '',
      compare_method: '',
      upload_version: '',
      update_version: '',
      platform: '',
      delivery: false,
      domains: [{
        value: ''
      }],
      domains2: [{
        value: ''
      }],
    },
    dialogupdataVisible: false,
    updata: {
      interface_name: '',
      interface_describe: '',
      compare_method: '',
      upload_version: '',
      update_version: '',
      platform: '',
      delivery: false,
      domains: [{
        value: ''
      }],
      domains2: [{
        value: ''
      }],
    },
    formLabelWidth: '120px',
    options: [{
      value: '选项1',
      label: '方法1'
    }, {
      value: '选项2',
      label: '方法2'
    }, {
      value: '选项3',
      label: '方法3'
    }, ]
  }
}
const mutations = {
  // GET_SDKVERSION(state, address) {
  //   state.sdkversions = address
  // },
  //股票代码
  GET_STOCKTYPECODE_DELETE(state, address) {
    state.stockTypeCode = address
  },
  GET_STOCKTYPECODE_POST(state, address) {
    state.stockTypeCode = address
  },
  GET_STOCKTYPECODE_GET(state, address) {
    console.log('address', address)
    state.stockTypeCode.studentData = address;
  },

  //接口管理
  GET_SDKINTERFACE_GET(state, address) {
   
    state.SDKinterface.studentData = address;
    for (var x in state.SDKinterface.studentData) {
         
      state.SDKinterface.studentData[x].data.android = "";
      state.SDKinterface.studentData[x].data.ios = "";
      for (var y in state.SDKinterface.studentData[x].data.domains) {
        state.SDKinterface.studentData[x].data.android =
        state.SDKinterface.studentData[x].data.android +
        state.SDKinterface.studentData[x].data.domains[y].value +
          ";";
      }
      for (var z in state.SDKinterface.studentData[x].data.domains2) {
        state.SDKinterface.studentData[x].data.ios =
        state.SDKinterface.studentData[x].data.ios +
        state.SDKinterface.studentData[x].data.domains2[z].value +
          ";";
      }
    }
  },
  GET_STOCKTYPECODE_GET(state, address) {
    
    state.SDKinterface.studentData = address;
    state.SDKinterface.getTableData();
    state.SDKinterface.$message({
      type: "info",
      message: "删除成功"
    }).catch(err => {
      console.log(err);
    });
  },
  }


const actions = {
  // getsdkversion_action(context) {
  //   const res = getsdkversion_api()
  //   res.then(function (response) {
  //     // console.log(response)
  //     context.commit('GET_SDKVERSION', response)
  //   })
  // },
  //股票代码
  getstocktypecode_action_delete(context, param) {

    const res = getstocktypecode_delete_api(param)
    console.log(res)
    res.then(function (response) {
      context.commit('GET_STOCKTYPECODE_DELETE', response)
    })
  },
  getstocktypecode_action_post(context) {

    const res = getstocktypecode_post_api(context)

    res.then(function (response) {

      context.commit('GET_STOCKTYPECODE_POST', response)
    })
  },
  getstocktypecode_action_get(context) {

    const res = getstocktypecode_get_api()

    res.then(function (response) {

      context.commit('GET_STOCKTYPECODE_GET', response)
    })
  },


//接口管理
  getSDKinterface_action_get(context) {
    const res = getSDKinterface_get_api()
 
    res.then(function (response) {

      context.commit('GET_SDKINTERFACE_GET', response)
    })
  },
  getSDKinterface_action_remove(context,p) {
    console.log('context',p)
    const res = getSDKinterface_remove_api(p)
    // res.then(function(response) {

    //   context.commit('GET_SDKINTERFACE_REMOVE', response)
    // })
  }
}



export default {
  namespaced: true,
  state,
  mutations,
  actions
}
