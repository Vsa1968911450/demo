<template>
  <div>
    <img style="width:60%;margin-left:20%" src="../../assets/ok.png" alt="">
    <p style="font-size:32px;font-weight:bold;margin-left:30%;margin-top:20px">
      操作成功
    </p>
    <van-button type="default" block>返回</van-button>
  </div>
</template>

<script>
import { Result } from '@/components'
import { mixinDevice } from '@/utils/mixin.js'

const directionType = {
  horizontal: 'horizontal',
  vertical: 'vertical'
}

export default {
  name: 'Success',
  components: {
    Result
  },
  mixins: [mixinDevice],
  data () {
    return {
      title: '提交成功',
      description: '提交结果页用于反馈一系列操作任务的处理结果，\n' +
          ' 如果仅是简单操作，使用 Message 全局提示反馈即可。\n' +
          ' 本文字区域可以展示简单的补充说明，如果有类似展示\n' +
          ' “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。',
      directionType
    }
  }
}
</script>

<style scoped>

</style>
