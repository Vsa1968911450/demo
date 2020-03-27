<template>
  <div>
    <van-nav-bar
      title="安检预约申请"
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
    <div style="margin-top:10px">
      <van-field
        v-model="tel"
        type="tel"
        label="申请人"
        placeholder="请输入姓名" />
      <van-field
        v-model="tel"
        type="tel"
        label="联系电话"
        placeholder="手机或固定电话" />
      <van-field
        @click="showPopup()"
        label="选择地区"
        :placeholder="location"
        is-link></van-field>
      <van-popup
        v-model="showone"
        position="bottom"
        :style="{ height: '40%' }">
        <van-area
          :area-list="areaList"
          @cancel="cancelT()"
          @confirm="onConfirm"
          @change="change"
          ref="area" />
      </van-popup>
      <van-field
        v-model="detaillocation"
        rows="3"
        autosize
        label="详细地址"
        type="textarea"
        maxlength="70"
        placeholder="街道门牌信息"
        show-word-limit />
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
    <van-button type="primary" size="small" style="width:100%;margin-top:3%">提交</van-button>
  </div>
</template>

<script>
/* eslint-disable */
import AreaList from './area'
import { Dialog } from 'vant'
export default {
  data () {
    return {
      laordetail: '',
      detaillocation: '',
      location: '',
      title2: '选中省市区',
      title3: '配置显示列',
      title4: '配置列占位提示文字',
      columnsPlaceholder: ['请选择', '请选择', '请选择'],
      areaList: AreaList,
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
    },
    showPopup () {
      this.showone = true
    },
    onConfirm (picker) {
      console.log(picker)
      this.location = picker[0].name + '-' + picker[1].name + '-' + picker[2].name
      console.log(this.location)
      this.showone = false
      // const val = picker.getValues()
      // this.location = val
    },
    cancelT () {
      this.showone = false
    },
    change (picker, value, index) {
      if (value[0].code !== 100000) {
        if (index === 0) {
          const addr = this.areaList
          const areaListCode = value[0].code
          const code1 = Object.assign({}, addr.city_list, { [areaListCode]: '全部' })
          const code2 = Object.assign({}, addr.county_list, { [areaListCode]: '全部' })
          this.areaList.city_list = code1
          this.areaList.county_list = code2
        }
        if (index === 1) {
          const addr = this.areaList
          const areaListCode = value[1].code
          const code = Object.assign({}, addr.county_list, { [areaListCode]: '全部' })
          this.areaList.county_list = code
        }
      }
    },
    areaSelect (type) {
      const addr = this.areaList
      this.PickerType = type
      this.show = true
      if (this.PickerType === 1 && this.endAddrInfo === '请选择') {
        this.$refs.area.reset()
      }
      const province_list = Object.assign({}, addr.province_list, { 100000: '全部' })
      const city_list = Object.assign({}, addr.city_list, { 100100: '全部' })
      const county_list = Object.assign({}, addr.county_list, { 100101: '全部' })
      this.areaList = {
        province_list,
        city_list,
        county_list
      }
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
