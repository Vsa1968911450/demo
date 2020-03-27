<template>
  <div>
    <van-cell-group title="注册">
      <van-cell
        title="客户注册"
        class="iconfont icon-zhuce ml myfont"
        is-link
        to="testwork" />
      <van-cell
        title="手机号解绑"
        class="iconfont icon-jiebang ml myfont"
        to="monitor"
        is-link>
      </van-cell>
      <van-cell
        title="客户绑定"
        class="iconfont icon-bangding ml myfont"
        to="Analysis"
        is-link />
      <van-cell
        title="名气家员"
        to="testwork"
        class="iconfont icon-bangdingjiaren ml myfont"
        is-link />
    </van-cell-group>
    <van-cell-group title="缴费充值">
      <van-cell
        title="账单缴费"
        class="iconfont icon-jiaofei-xianxing ml myfont"
        to="/bill/pay"
        is-link />
      <van-cell
        title="自报示数"
        to="/bill/order"
        class="iconfont icon-T_xianshishuju_xssj ml myfont"
        is-link />
      <van-cell
        title="充值卡充值"
        to="/bill/give"
        class="iconfont icon-3 ml myfont"
        is-link />
    </van-cell-group>
    <van-cell-group title="维修报修">
      <van-cell
        to="/secure/secures"
        title="安检预约"
        class="iconfont icon-yuyue ml myfont"
        is-link />
      <van-cell
        title="隐患上传"
        to="/secure/upload"
        class="iconfont icon-shangchuan ml myfont"
        is-link />
    </van-cell-group>
    <van-cell-group title="服务内容">
      <van-cell
        title="新客户开通"
        to="/service/open"
        class="iconfont icon-xinzengyugengxinkehudangan ml myfont"
        is-link />
      <van-cell
        title="表后设施验收"
        to="/service/facilities"
        class="iconfont icon-yanshou ml myfont"
        is-link />
      <van-cell
        title="新客户表后管安装"
        to="/service/install"
        class="iconfont icon-web-icon- ml myfont"
        is-link />
      <van-cell
        title="户内设施移改"
        to="/service/move"
        class="iconfont  icon-sheshiguanli ml myfont"
        is-link />
      <van-cell
        title="民用过户"
        to="/service/transfer"
        class="iconfont icon-yonghuguohu- ml myfont"
        is-link />
      <van-cell
        title="燃气表增容"
        to="/service/add"
        class="iconfont icon-wulianwangditushangtubiao_huabanfuben ml myfont"
        is-link />
      <van-cell
        title="民用校表申办"
        to="/service/ask"
        class="iconfont icon-shenqing ml myfont"
        is-link />
      <van-cell
        title="进度跟踪"
        to="/service/track"
        class="iconfont icon-jindu ml myfont"
        is-link />
    </van-cell-group>

  </div>

</template>

<script>
export default {
  components: {},
  data () {
    return {
      fileList: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
      username: '111',
      password: '1212'
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    handleInputChange () {}
  }
}
</script>

<style>
.item-native {
  background: red !important;
}
.ml span{
margin-left:3%
}
.myfont{
    font-size: 14px;
}
</style>
