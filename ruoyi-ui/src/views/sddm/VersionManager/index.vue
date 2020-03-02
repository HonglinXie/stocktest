<template>
  <div>
    <el-form ref="VersionManger" :model="VersionMangerformData" :rules="rules" size="medium"
             label-width="100px" label-position="left">
      <el-form-item label="版本名称" prop="field101">
        <el-input v-model="VersionMangerformData.field101" placeholder="请输入版本名称" clearable
                  :style="{width: '100%'}"> </el-input>
      </el-form-item>
      <el-form-item label="版本号" prop="field103">
        <el-input v-model="VersionMangerformData.field103" placeholder="请输入版本号" clearable
                  :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="所属平台" prop="field102">
        <el-select v-model="VersionMangerformData.field102" placeholder="请选择所属平台" clearable
                   :style="{width: '100%'}">
          <el-option v-for="(item, index) in field102Options" :key="index" :label="item.label"
                     :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>

    <div>{{sdkversions}}</div>

  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {getsdkversion_api} from '../../../api/sddm/index'
  export default {
    components: {},
    props: [],
    data() {
      return {
        VersionMangerformData: {
          field101: undefined,
          field103: undefined,
          field102: undefined,
        },
        rules: {
          field101: [{
            required: true,
            message: '请输入版本名称',
            trigger: 'blur'
          }],
          field103: [{
            required: true,
            message: '请输入版本号',
            trigger: 'blur'
          }],
          field102: [{
            required: true,
            message: '请选择所属平台',
            trigger: 'change'
          }],
        },
        field102Options: [{
          "label": "android",
          "value": "android"
        }, {
          "label": "IOS",
          "value": "iOS"
        }],
      }
    },
    computed: {
      ...mapState({
        sdkversions: state=> state.sddmstore.sdkversions,

      })
    },
    watch: {},
    created() {},
    mounted() { },
    methods: {
      submitForm() {
        this.$refs['VersionManger'].validate(valid => {
          if (!valid) return;
          // TODO 提交请求获取SDK info
          this.$store.dispatch("sddmstore/getsdkversion_action")
        })
      },
      resetForm() {
        this.$refs['VersionManger'].resetFields()
      },


    }
  }

</script>
<style>
</style>
