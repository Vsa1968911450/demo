<template>
  <div>
    <van-nav-bar
      title="用户信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />
    <van-field
      v-model="sms"
      center
      clearable
      class="iconfont icon-bangdingjiaren mll"
      :placeholder="txt"
      label="用户名:"/>
    <div style="margin-top:10px" v-for="(item,index) in items" :key="index">
      <div @click="goto(item)">
        <van-field
          v-model="item.custid"
          center
          clearable
          class="iconfont icon-bangdingjiaren mll"
          label="客户编号:"/>
        <van-field
          v-model="item.address"
          center
          clearable
          class="iconfont icon-bangdingjiaren mll"
          label="客户地址:"/>
        <van-field
          v-model="item.balance"
          center
          clearable
          class="iconfont icon-bangdingjiaren mll"
          label="余额:"/>
      </div>

    </div>
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
          { custid: 1, address: '建邺区1121212111', balance: '0' },
          { custid: 2, address: '建邺区1111', balance: '0' }
      ]
    }
  },
  created () {
  },
  methods: {
    onClickLeft () {
      this.$router.back(-1)
    },
    goto (item) {
        this.$router.push({ name: 'detail', params: { custid: item.custid } })
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
