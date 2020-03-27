<template>
  <div>
    <van-nav-bar
      title="充值记录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />
    <van-cell-group style="margin-bottom:10px" v-for="(item,index) in items" :key="index">
      <van-field label="客户号" :value="item.custid" />
      <van-field label="充值金额" :value="item.money" />
      <van-field label="充值时间" :value="item.date" />
      <van-field label="充值卡号" :value="item.number" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tel: '',
      txt: '',
      sms: '',
      items: [
          { custid: 121211212, date: '2020-3-6', money: '0', number: '12121' },
          { custid: 2112122, date: '2020-3-6', money: '0', number: '2121' }
      ]
    }
  },
  created () {
  },
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
td{
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}
</style>
