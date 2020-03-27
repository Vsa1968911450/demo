<template>
  <div>
    <van-nav-bar
      title="自报示数"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />
    <van-cell
      title="客户编号"
      @click="dialogOpen()"
      v-model="txt"
      class=" ml myfont"
      is-link />
    <van-dialog v-model="show" title="选择客户号">
      <div v-for="(item,index) in items" :key="index">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell @click="giveValue(item)" :title="item.txt">
              <template #right-icon>
                <van-radio :name="index" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </van-dialog>
    <div style="margin-top:10px">
      <van-field
        v-model="name"
        type="text"
        label="客户姓名:"
        placeholder="请输入姓名" />
      <van-field
        v-model="name"
        type="text"
        label="客户地址:"
        placeholder="请输入客户地址" />
      <van-field
        readonly
        clickable
        name="calendar"
        :value="value"
        label="日期："
        placeholder="点击选择日期"
        @click="showCalendar = true"
      />
      <van-calendar v-model="showCalendar" @confirm="onConfirm" />
      <van-field
        v-model="name"
        type="text"
        label="上次示数:"
        placeholder="请输入上次示数" />
    </div>
    <div>
      <van-cell-group title="本次用量">
        <van-field
          v-model="name"
          type="text"
          label="客户姓名:"
          placeholder="请输入客户姓名" />
        <van-field
          v-model="name"
          type="text"
          label="自报示数:"
          placeholder="请输入自报示数" />
        <van-field
          v-model="name"
          type="text"
          label="本次用量:"
          placeholder="请输入本次用量" />
      </van-cell-group>
    </div>
    <div>
      <van-cell-group title="帮助示意">
        <img
          style="width:100%"
          src="./../../assets/shishu.jpg"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  data () {
    return {
         value: '',
      showCalendar: false,
        name: '',
        custName: '',
        show: false,
        radio: '1',
        items: [
            { txt: 121212121 },
            { txt: 211 }

        ],
        txt: '请选择客户编号'
    }
  },
  created () {},
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
       onConfirm (date) {
           console.log(date.getFullYear())
      this.value = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
      this.showCalendar = false
    },
    onClickLeft () {
      this.$router.back(-1)
    },
    dialogOpen () {
   this.show = true
    },
    giveValue (item) {
        this.txt = item.txt
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
