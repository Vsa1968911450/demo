<template>
  <div>
    <van-nav-bar
      title="手机号解绑"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />
    <van-field
      v-model="tel"
      type="tel"
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
    onClickLeft () {
      this.$router.back(-1)
    }
  }
}
</script>

<style scoped>
</style>
