<template>
  <div>
    <van-nav-bar
      title="充值卡充值"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />
    <!-- 允许输入正整数，调起纯数字键盘 -->
    <van-field
      v-model="sms"
      center
      clearable
      placeholder="请输入客户编号"
      label="客户编号">
      <template #button>
        <van-button
          size="small"
          type="primary"
          @click="jumpTo()">充值记录</van-button>
      </template>
    </van-field>
    <van-field
      v-model="tel"
      type="tel"
      placeholder="请输入充值卡号"
      label="充值卡号:" />
    <van-button
      type="primary"
      size="small"
      style="width:100%;margin-top:3%">确定</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tel: '',
      txt: '',
      sms: ''
    }
  },
  created () {},
  methods: {
    onClickLeft () {
      this.$router.back(-1)
    },
    jumpTo () {
        this.$router.push({ name: 'write' })
    }
  }
}
</script>

<style>
div.van-cell__title {
  margin-left: 1%;
  width: 70px;
}
.mll span{
    font-size: 14px;
}
</style>
