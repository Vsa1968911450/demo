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
      :value="txt"
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
      <van-cell
        title="客户姓名:"
        :value="custName"
        class=" ml myfont"/>
      <van-cell
        title="客户地址:"
        :value="custName"
        class=" ml myfont"/>
      <van-cell
        title="最近抄表日期:"
        :value="custName"
        class=" ml myfont"/>
      <van-cell
        title="上次示数:"
        :value="custName"
        class=" ml myfont"/>
    </div>
    <div>
      <van-cell-group title="本次用量">
        <van-cell
          title="客户姓名"
          class="ml myfont" />
        <van-cell
          title="自报示数"
          class="ml myfont" />
        <van-cell
          title="本次用量"
          class="ml myfont"/>
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
