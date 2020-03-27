<template>
  <div>
    <van-nav-bar
      title="用户注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />
    <van-form
      validate-first
      @failed="onFailed">
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field
        v-model="number"
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
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field
        v-model="passwordone"
        type="password"
        label="密码"
        placeholder="请输入密码" />
      <!-- 输入密码 -->
      <van-field
        v-model="passwordtwo"
        type="password"
        :rules="[{ validator:checkPass, message: '两次密码不匹配' }]"
        placeholder="请再次输入密码"
        label="确认密码" />
    </van-form>
    <van-button
      type="primary"
      size="small"
      style="width:100%;margin-top:3%">立即注册</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      sms: '',
      number: '',
      passwordone: '',
      passwordtwo: ''
    }
  },
  methods: {
    checkNumber (val) {
      if (val !== '') {
        return /^1[34578]\d{9}$/.test(val)
      }
    },
    checkPass (val) {
      if (val !== this.passwordone) {
        return false
      }
    },
    onClickLeft () {
      this.$router.back(-1)
    },
    onFailed (errorInfo) {
      console.log('failed', errorInfo)
    }
  }
}
</script>

<style scoped>
</style>
