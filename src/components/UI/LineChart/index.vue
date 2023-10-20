<template>
    <div id="chart" class="line-chart"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts'
import data from '../../../Constants/data'

//const endPoint = ref(0.01)
onMounted(() => {
  let category = [];
  let values = [];
  for (let i = 0; i < data.length; i++) {
      category.push(data[i].key);
      values.push(data[i].value);
  }

  const option = {
    xAxis: {
      type: 'category',
      data: category,
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [1,2,3,4,5,6],
        type: 'line'
      }
    ]
  }

const InstanceB = echarts.init(document.getElementById('chart'))
InstanceB.setOption(option)
})
</script>
<style scoped>
.line-chart{
    height: 600px;
    width: 100%;
}
</style>
