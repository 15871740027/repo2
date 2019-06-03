$(document).ready(function () {
    $('#deanAccount_add').on('click', function(){
        layer.open({
            type: 1,
            area: ['300px', '360px'],
            title:'编辑',
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;">' +
                '<div style="margin: 0 auto;width: 280px">' +
                '<label style="font-size: 15px;width: 70px;text-align: right">用户名:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<label style="font-size: 15px;width: 70px;text-align: right">角色编号:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<button style="margin-left: 100px" class="btn btn-primary">确认</button>'+
                '</div>' +
                '</div>'
        });
    });

});