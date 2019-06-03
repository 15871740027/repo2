$(document).ready(function () {
    $('#teachingTask_add,#teachingTask_edit').on('click', function(){
        layer.open({
            type: 2,
            area: ['400px', '300px'],
            title:'编辑',
            shadeClose: true, //点击遮罩关闭
            content: 'addTask.html'
            // content: '<div style="padding:20px;">' +
            //     '<div style="margin: 0 auto;width: 280px">' +
            //     '<label style="font-size: 15px;width: 70px;text-align: right">课程编号:</label>'+
            //     '<input type="text" style="height: 25px;margin-bottom: 8px">'+
            //     '<label style="font-size: 15px;width: 70px;text-align: right">课程名称:</label>'+
            //     '<input type="text" style="height: 25px;margin-bottom: 8px">'+
            //     '<label style="font-size: 15px;width: 70px;text-align: right">班级:</label>'+
            //     '<select id="col" style="height: 25px;width: 170px;margin-bottom: 8px"><option></option></select>' +
            //     '<label style="font-size: 15px;width: 70px;text-align: right">重修:</label>'+
            //     '<input type="text" style="height: 25px;margin-bottom: 8px">'+
            //     '<button style="margin-left: 100px" class="btn btn-primary">确认</button>'+
            //     '</div>' +
            //     '</div>'
        });
    });

});