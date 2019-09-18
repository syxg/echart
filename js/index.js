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
        symbolSize: 5,   //折线点的大小
        itemStyle: {
            normal: {
                color: "red",//折线点的颜色
                lineStyle: {
                    color: "#ff5890"//折线的颜色
                }
            }
        },
        smooth: true,
        areaStyle: {}
    }],
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [
            {gte:0,lte:6,color:'#f8b5cc'}
        ],  //pieces的值由动态数据决定
        outOfRange: {
            color: 'red'
        }
    }
};


myChart1.setOption(option1)//把echarts配置项启动
myChart2.setOption(option2)
myChart3.setOption(option3)
myChart4.setOption(option4)