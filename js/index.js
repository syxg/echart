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

var data = genData(50);

option2 = {
    title : {
        text: '同名数量统计',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,

        selected: data.selected
    },

    series : [
        {
            name: '姓名',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['40%', '50%'],
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

function genData(count) {
    var nameList = [
        '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
    ];
    var legendData = [];
    var seriesData = [];
    var selected = {};
    for (var i = 0; i < 50; i++) {
        var name = Math.random() > 0.65
            ? makeWord(4, 1) + '·' + makeWord(3, 0)
            : makeWord(2, 1);
        legendData.push(name);
        seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000)
        });
        selected[name] = i < 6;
    }

    return {
        legendData: legendData,
        seriesData: seriesData,
        selected: selected
    };

    function makeWord(max, min) {
        var nameLen = Math.ceil(Math.random() * max + min);
        var name = [];
        for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
        }
        return name.join('');
    }
}

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
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
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
                    offset: [5, -2],
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