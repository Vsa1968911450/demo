<template>
  <div>
    <van-nav-bar
      title="客户信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft" />
    <div>
      <van-field
        v-model="tel"
        type="tel"
        label="客户姓名"
        placeholder="请输入姓名" />
      <van-field
        v-model="tel"
        type="tel"
        label="手机号码"
        placeholder="请输入手机号码" />
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
        rows="2"
        autosize
        label="详细地址"
        type="textarea"
        maxlength="50"
        placeholder="街道门牌信息"
        show-word-limit />
    </div>
    <div style="margin-top:10px">
      <van-field
        v-model="tel"
        type="tel"
        label="身份证号"
        placeholder="请输入身份证号" />
    </div>
    <div>
      <van-cell-group title="上传身份证正反面">
        <van-cell >
          <van-uploader
            v-model="fileListone"
            multiple />
        </van-cell>
      </van-cell-group>
    </div>
    <div>
      <van-cell-group title="请输入房产证号(含租房合同)">
        <van-field
          v-model="tel"
          type="tel"
          label="房产证号"
          placeholder="请输入房产证号" />
      </van-cell-group>
    </div>
    <div>
      <van-cell-group title="上传房产证(预售合同)附件">
        <van-cell >
          <van-uploader
            v-model="fileListone"
            multiple />
        </van-cell>
      </van-cell-group>
    </div>
    <van-button
      type="primary"
      size="small"
      style="width:100%;margin-top:3%">确认</van-button>
  </div>
</template>

<script>
/* eslint-disable */
import AreaList from './area'
import { Dialog } from 'vant'
export default {
  data () {
    return {
        fileListone:[],
      fileList: [],
      addmessage: '',
      sms: '请输入验证码',
      laordetail: '',
      detaillocation: '',
      location: '地区信息',
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
