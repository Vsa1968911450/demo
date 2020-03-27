<template>
  <div>
    <van-nav-bar
      title="手机号解绑"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />
    <van-form
      validate-first
      @failed="onFailed">
      <van-field
        v-model="tel"
        type="tel"
        :rules="[{ validator:checkNumber, message: '请输入正确手机号码' }]"
        placeholder="请输入手机号"
        label="手机号" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field
        v-model="sms"
        center
        clearable
        placeholder="请输入验证码"
        label="验证码">
        <template #button>
          <van-button
            size="small"
            type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </van-form>
    <van-button
      type="primary"
      size="small"
      style="width:100%;margin-top:3%">取消关联</van-button>
  </div>
</template>

<script>
export default {
  name: 'Monitor',
  data () {
      return {
          sms: '',
          tel: ''
      }
  },
  methods: {
       onFailed (errorInfo) {
      console.log('failed', errorInfo)
    },
    onClickLeft () {
      this.$router.back(-1)
    },
    checkNumber (val) {
      if (val !== '') {
        return /^1[34578]\d{9}$/.test(val)
      }
    }
  }
}
</script>

<style scoped>
</style>
