var myChart1 = echarts.init(document.getElementById('box1')) //获取装载数据表的容器

option1 = {
    title: {
        text: ''
    },
    legend: {
        data: ['新增', '撤销', '注销']
    },
    xAxis: {
        type: 'category',
        data: ['贵州', '广东', '福建', '河北', '四川', '新疆', '辽宁', '湖北']
    },
    yAxis: {
        name: '个数',
        type: 'value'
    },
    series: [{
        name: '新增',
        data: [7900, 6100, 4200, 4100, 4100, 3500, 3000],
        type: 'bar',
        stack: 'barStack'
    },{
        name: '撤销',
        data: [0, 0, 0, 0, 0, 0, 0],
        type: 'bar',
        stack: 'barStack'
    },{
        name: '注销',
        data: [0, 0, 0, 0, 0, 0, 0],
        type: 'bar',
        stack: 'barStack'
    }]
};

var myChart2 = echarts.init(document.getElementById('box2'))

var data = {
    "legendData": ["LTE FDD终端", "秦杜·邵", "袁纪", "皮许", "鲁元昌贾彭·马沈"],
    "seriesData": [{"name": "LTE FDD终端", "value": 74373}, {"name": "秦杜·邵", "value": 86230}, {
        "name": "袁纪",
        "value": 77491
    }, {"name": "皮许", "value": 17399}, {"name": "鲁元昌贾彭·马沈", "value": 27422}],
    "selected": {"LTE FDD终端": true, "秦杜·邵": true, "袁纪": true, "皮许": true, "鲁元昌贾彭·马沈": true}
}


option2 = {
    // title : {
    //     text: '同名数量统计',
    //     subtext: '纯属虚构',
    //     x:'center'
    // },
    // tooltip : {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b} : {c} ({d}%)"
    // },

    legend: {
        type: 'plain',
        orient: 'horizontal',
        right: 10,
        left: 10,
        bottom: 0,
        data: data.legendData,

        selected: data.selected
    },
    series : [
        {
            name: '姓名',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['50%', '40%'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%  ',
                    rich:{
                        width:10
                    }
                }
            },
            data: data.seriesData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


var myChart3 = echarts.init(document.getElementById('box3')) //获取装载数据表的容器

option3 = {
    title: {
        text: ''
    },

    xAxis: {
        type: 'category',
        data: ['贵州', '广东', '福建', '河北', '四川']
    },
    yAxis: {
        name: '个数',
        type: 'value'
    },
    label: {
        show: true,//是否展示
        position: 'top',//在顶端
        textStyle: {
            fontWeight: 'bolder',
            fontSize: '12',
            fontFamily: '微软雅黑',
            // color: 'black'
        }
    },
    series: [{
        name: '新增',
        data: [7900, 6100, 4200, 4100, 4100],
        barMaxWidth:30,//最大宽度
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                    ]
                )
            }
        },
        type: 'bar',
        stack: 'barStack'
    }]
};

var myChart4 = echarts.init(document.getElementById('box4')) //获取装载数据表的容器

option4 = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['4月', '5月', '6月', '7月', '8', '9月', '10月']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
        symbolSize: 10,   //折线点的大小
        itemStyle: {
            normal: {
                color: {
                    type: 'radial',
                    x: 0,
                    y: 0,
                    r: 0.8,
                    colorStops: [{
                        offset: 0, color: '#ff578f' // 0% 处的颜色
                    }, {
                        offset: 0.5, color: '#ff578f' // 100% 处的颜色
                    }, {
                        offset: 1, color: '#f897c1' // 100% 处的颜色
                    }],
                    global: true // 缺省为 false
                },//折线点的颜色
                lineStyle: {
                    color: "#ff5890"//折线的颜色
                }
            }
        },
        smooth: true,
        areaStyle: {}
    }]
};

var myChart5 = echarts.init(document.getElementById('box5'));//获取装载数据表的容器

//初始化数据
var category = ['NO.5福建省', 'NO.4四川省', 'NO.3湖北省', 'NO.2陕西省', 'NO.1贵州省'];
var barData = [26, 26, 30, 71, 76];

var option5 = {
    // tooltip: {
    //     //     trigger: 'axis',
    //     //     axisPointer: {
    //     //         type: 'shadow'
    //     //     }
    //     // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // xAxis: {
    //     type: 'value',
    //     axisLine: {
    //         show: false
    //     },
    //     axisTick: {
    //         show: false
    //     }
    // },
    xAxis: {
            show : false, //设置为true时候显示
        },
    yAxis: {
        type: 'category',
        data: category,
        splitLine: {show: false},
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        offset: 10,
        nameTextStyle: {
            fontSize: 15
        }
    },
    series: [
        {
            name: '数量',
            type: 'bar',
            data: barData,
            barWidth: 14,
            barGap: 10,
            smooth: true,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [-3, -2],
                    textStyle: {
                        color: '#F68300',
                        fontSize: 13
                    }
                    // color: function(params) {
                    //     // build a color map as your need.
                    //     var colorList = [
                    //         '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                    //         '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                    //         '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                    //     ];
                    //     return colorList[params.dataIndex]
                    // }
                }
            },
            itemStyle: {
                emphasis: {
                    barBorderRadius: 7
                },
                normal: {
                    barBorderRadius: 7,
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#B5C334','#FCCE10','#E87C25',
                            '#FE8463','#FAD860','#F3A43B','#60C0DD',
                            '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            }
        }
    ]
};

var myChart6 = echarts.init(document.getElementById('box6')) //获取装载数据表的容器

option6 = {
    title: {
        text: ''
    },

    xAxis: {
        type: 'category',
        data: [
            '贵州', '广东', '福建', '河北', '四川',
            '贵州2', '广东2', '福建2', '河北2', '四川2',
            '贵州3', '广东3', '福建3', '河北3', '四川3',
            '贵州4', '广东4', '福建4', '河北4', '四川4'

        ],
        axisLabel: {
            interval: 0,
            rotate: 45,
            //倾斜度 -90 至 90 默认为0  
            margin: 10,
            // textStyle: {
            //     fontWeight: "bolder",
            //     color: "#000000"
            // }
        }
    },
    yAxis: {
        // name: '个数',
        type: 'value'
    },
    // label: {
    //     show: true,//是否展示
    //     position: 'top',//在顶端
    //     textStyle: {
    //         fontWeight: 'bolder',
    //         fontSize: '12',
    //         fontFamily: '微软雅黑',
    //         // color: 'black'
    //     }
    // },
    series: [{
        name: '新增',
        data: [
            7900, 6100, 4200, 4100, 4100,
            7900, 6100, 4200, 4100, 4100,
            7900, 6100, 4200, 4100, 4100,
            7900, 6100, 4200, 4100, 4100
        ],
        // barMaxWidth:30,//最大宽度
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                    ]
                )
            }
        },
        type: 'bar',
        stack: 'barStack'
    }]
};

myChart1.setOption(option1)//把echarts配置项启动
myChart2.setOption(option2)
myChart3.setOption(option3)
myChart4.setOption(option4)
myChart5.setOption(option5)
myChart6.setOption(option6)