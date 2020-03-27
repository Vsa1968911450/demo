<template>
  <div>
    <van-nav-bar
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
      placeholder="请输入客户号"
      label="客户号">
      <template #button>
        <van-button
          size="small"
          type="primary">查询验证</van-button>
      </template>
    </van-field>
    <van-button
      type="primary"
      size="small"
      style="width:100%;margin-top:3%">绑定</van-button>
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
