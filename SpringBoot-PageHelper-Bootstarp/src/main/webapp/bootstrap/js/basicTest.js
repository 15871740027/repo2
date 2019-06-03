$(document).ready(function () {
    $('#basicTest_add,#basicTest_edit').on('click', function(){
        layer.open({
            type: 1,
            area: ['300px', '420px'],
            title:'编辑',
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;">' +
                '<div style="margin: 0 auto;width: 280px">' +
                '<label style="font-size: 15px;width: 70px;text-align: right">考试类别:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<br/>'+
                '<label style="font-size: 15px;width: 70px;text-align: right">监考教师:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<br/>'+
                '<label style="font-size: 15px;width: 70px;text-align: right">学院名称:</label>'+
                '<select id="col" style="height: 25px;width: 170px;margin-bottom: 8px"><option></option></select>' +
                '<br/>'+
                '<label style="font-size: 15px;width: 70px;text-align: right">专业:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<br/>'+
                '<label style="font-size: 15px;width: 70px;text-align: right">开始时间:</label>'+
                '<input type="date" style="height: 25px;width: 170px">'+
                '<input type="time" style="height: 25px;margin-bottom: 8px;margin-left: 70px;width: 170px">'+
                '<br/>'+
                '<label style="font-size: 15px;width: 70px;text-align: right">结束时间:</label>'+
                '<input type="date" style="height: 25px;width: 170px">'+
                '<input type="time" style="height: 25px;margin-bottom: 8px;margin-left: 70px;width: 170px">'+
                '<br/>'+
                '<button style="margin-left: 100px" class="btn btn-primary">确认</button>'+
                '</div>' +
                '</div>'
        });
    });

});