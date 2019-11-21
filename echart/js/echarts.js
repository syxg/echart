// 基于准备好的dom，初始化echarts实例
var myChartLeft = echarts.init(document.getElementById('top_left'));
option = {
         tooltip : {
         trigger: 'axis',
         axisPointer : {            // 坐标轴指示器，坐标轴触发有效
               type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
         }
      },
      legend: {
         bottom:0,
         data: ['调试(调试中)', '提交检测报告']
      },
      grid: {
         left: '3%',
         right: '4%',
         bottom: '10%',
         containLabel: true
      },
      xAxis:  {
         type: 'value'
      },
      yAxis: {
         type: 'category',
         data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      series: [
         {
               name: '调试(调试中)',
               type: 'bar',
               stack: '总量',
               barWidth : 25,//柱图宽度
               barGap:'-20%',//柱图间距
               label: {
                  normal: {
                     //控制柱子上是否显示数据
                    // show: true,
                     position: 'insideRight',                          
                  }
               },
               //修改柱形图中每个柱子背景颜色
               itemStyle:{
                  color:"#101010	"
               },
               data: [50, 302, 301, 334, 390, 330, 320],                    
         },
         {
               name: '提交检测报告',
               type: 'bar',
               stack: '总量',
               label: {
                  normal: {
                     //show: true,
                     position: 'insideRight'
                  }
               },                    
               itemStyle:{
                  color:"#0F62B1"
               },
               data: [120, 132, 101, 134, 90, 230, 210]
         },              
      ]
   };

// 使用刚指定的配置项和数据显示图表。
myChartLeft.setOption(option);


//echarts-top right
var myChartRight = echarts.init(document.getElementById('top_right'));
option = {
         tooltip : {
         trigger: 'axis',
         axisPointer : {            // 坐标轴指示器，坐标轴触发有效
               type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
         }
      },
      legend: {
         bottom:0,
         data: ['调试(调试中)', '提交检测报告']
      },
      grid: {
         left: '3%',
         right: '4%',
         bottom: '10%',
         containLabel: true
      },
      yAxis:  {
         type: 'value'
      },
      xAxis: {
         type: 'category',
         data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      series: [
         {
               name: '调试(调试中)',
               type: 'bar',
               stack: '总量',
               barWidth : 35,//柱图宽度
               barGap:'-20%',//柱图间距
               label: {
                  normal: {
                     //控制柱子上是否显示数据
                    // show: true,
                     position: 'insideRight',                          
                  }
               },
               //修改柱形图中每个柱子背景颜色
               itemStyle:{
                  color:"#101010	"
               },
               data: [50, 302, 301, 334, 390, 330, 320],                    
         },
         {
               name: '提交检测报告',
               type: 'bar',
               stack: '总量',
               label: {
                  normal: {
                     //show: true,
                     position: 'insideRight'
                  }
               },                    
               itemStyle:{
                  color:"#0F62B1"
               },
               data: [120, 132, 101, 134, 90, 230, 210]
         },              
      ]
   };

myChartRight.setOption(option);


//echarts-bottom  left
var myChartsLeft = echarts.init(document.getElementById('bottom_left'));
option = {
tooltip : {
  trigger: 'axis',
  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
  }
},
legend: {
  bottom:0,
  data: ['直接访问', '邮件营销','联盟广告','视频广告']
},
grid: {
  left: '3%',
  right: '4%',
  bottom: '10%',
  containLabel: true
},
yAxis:  {
  type: 'value'
},
xAxis: {
  type: 'category',
  data: ['周一','周二','周三','周四','周五','周六','周日']
},
series: [
  {
      name: '直接访问',
      type: 'bar',
      stack: '总量',
      barWidth : 35,//柱图宽度
      barGap:'-20%',//柱图间距
      label: {
          normal: {
             // show: true,
              position: 'insideRight'
          }
      },
      itemStyle:{
         color:"#491010"
      },
      data: [320, 302, 301, 334, 390, 330, 320]
  },
  {
      name: '邮件营销',
      type: 'bar',
      stack: '总量',
      barWidth : 25,//柱图宽度
      barGap:'-20%',//柱图间距
      label: {
          normal: {
              //show: true,
              position: 'insideRight'
          }
      },
      itemStyle:{
          color:"#5E6C0D"
      },
      data: [120, 132, 101, 134, 90, 230, 210]
  },
  {
      name: '联盟广告',
      type: 'bar',
      stack: '总量',
      label: {
          normal: {
              //show: true,
              position: 'insideRight'
          }
      },
      itemStyle:{
          color:"#101010"
      },
      data: [220, 182, 191, 234, 290, 330, 310]
  },
  {
      name: '视频广告',
      type: 'bar',
      stack: '总量',
      label: {
          normal: {
              //show: true,
              position: 'insideRight'
          }
      },
      itemStyle:{
         color:"#0F62B1"
      },
      data: [150, 212, 201, 154, 190, 330, 410]
  },
]
};
myChartsLeft.setOption(option);
//echarts-bottom  right
var myChartsRight = echarts.init(document.getElementById('bottom_right'));
option = {
         tooltip : {
         trigger: 'axis',
         axisPointer : {            // 坐标轴指示器，坐标轴触发有效
               type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
         }
      },
      legend: {
         bottom:0,
         data: ['调试(调试中)', '提交检测报告']
      },
      grid: {
         left: '3%',
         right: '4%',
         bottom: '10%',
         containLabel: true
      },
      yAxis:  {
         type: 'value'
      },
      xAxis: {
         type: 'category',
         data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      series: [
         {
               name: '调试(调试中)',
               type: 'bar',
               stack: '总量',
               barWidth : 35,//柱图宽度
               barGap:'-20%',//柱图间距
               label: {
                  normal: {
                     //控制柱子上是否显示数据
                    // show: true,
                     position: 'insideRight',                          
                  }
               },
               //修改柱形图中每个柱子背景颜色
               itemStyle:{
                  color:"#101010	"
               },
               data: [50, 302, 301, 334, 390, 330, 320],                    
         },
         {
               name: '提交检测报告',
               type: 'bar',
               stack: '总量',
               label: {
                  normal: {
                     //show: true,
                     position: 'insideRight'
                  }
               },                    
               itemStyle:{
                  color:"#0F62B1"
               },
               data: [120, 132, 101, 134, 90, 230, 210]
         },              
      ]
   };
myChartsRight.setOption(option);