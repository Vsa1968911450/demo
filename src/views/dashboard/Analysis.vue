<template>
  <div>
    <van-nav-bar
      title="客户绑定"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />
    <van-field
      v-model="sms"
      center
      clearable
      class="iconfont icon-bangdingjiaren mll"
      :placeholder="txt"
      label="用户名:">
      <template #button>
        <van-button
          size="small"
          type="primary"
          to="change"
          style="font-size:12px">修改密码</van-button>
      </template>
    </van-field>
    <van-button
      type="primary"
      size="small"
      style="width:100%;margin-top:3%"
      @click="jumoTo()">绑定客户号</van-button>
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
    jumoTo () {
      this.$router.push({ name: 'binding' })
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
