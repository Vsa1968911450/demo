<template>
  <div>
    <p>进度追踪</p>
    <!-- <van-nav-bar
      title="申请人信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />
    <van-cell
      title="客户编号"
      @click="dialogOpen()"
      :value="txt"
      class=" ml myfont"
      is-link />
    <van-dialog
      v-model="show"
      title="选择客户号">
      <div
        v-for="(item,index) in items"
        :key="index">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell
              @click="giveValue(item)"
              :title="item.txt">
              <template #right-icon>
                <van-radio :name="index" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </van-dialog>
    <div>
      <van-field
        v-model="tel"
        type="tel"
        label="客户地址"
        placeholder="请输入客户地址" />
      <van-field
        v-model="tel"
        type="tel"
        label="申请人姓名"
        placeholder="请输入申请人姓名" />
      <van-field
        v-model="tel"
        type="tel"
        label="联系电话"
        placeholder="请输入联系电话" />
      <van-field
        v-model="laordetail"
        rows="3"
        autosize
        label="受理内容"
        type="textarea"
        maxlength="70"
        placeholder="请输入受理内容"
        show-word-limit />
    </div>
    <van-button type="primary" size="small" style="width:100%;margin-top:3%">提交</van-button> -->
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  data () {
    return {
      laordetail: '',
      detaillocation: '',
      location: '',
      showone: false,
      tel: '',
      show: false,
      radio: '1',
      items: [{ txt: 121212121 }, { txt: 211 }],
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
