<template>
  <div>
    <van-nav-bar
      title="用户缴费信息记录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />
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
.mll span {
  font-size: 14px;
}
</style>
