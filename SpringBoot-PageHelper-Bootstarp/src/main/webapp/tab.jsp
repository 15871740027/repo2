<%--
  Created by IntelliJ IDEA.
  User: 83415
  Date: 2019/5/16
  Time: 17:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户管理</title>
    <link rel="stylesheet" type="text/css" href="bootstrap/frame/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="bootstrap/frame/bootstrap2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css"
          href="bootstrap/frame/bootstrap-table-master/src/bootstrap-table.css">
    <link rel="stylesheet" type="text/css"
          href="bootstrap/frame/bootstrap3-editable-1.5.1/bootstrap3-editable/css/bootstrap-editable.css">
    <link rel="stylesheet" type="text/css" href="bootstrap/frame/bootstrap-fileinput-master/css/fileinput.css">



    <script src="bootstrap/frame/jquery/jquery-3.3.1.js"></script>
    <script src="bootstrap/frame/layer/layer.js"></script>
    <script src="bootstrap/frame/bootstrap-table-master/src/bootstrap-table.js"></script>
    <script src="bootstrap/frame/bootstrap3-editable-1.5.1/bootstrap3-editable/js/bootstrap-editable.js"></script>
    <script src="bootstrap/frame/bootstrap-table-master/src/locale/bootstrap-table-zh-CN.js"></script>
    <script src="bootstrap/frame/bootstrap-table-master/dist/extensions/editable/bootstrap-table-editable.min.js"></script>
    <!-- 完成拖拽功能 -->
    <script src="http://cdn.bootcss.com/jqueryui/1.11.4/jquery-ui.js"></script>

    <script src="bootstrap/frame/bootstrap2/js/bootstrap.min.js"></script>
</head>
<body>

<div id="toolbar" class="btn-group">
    <button id="btn_add" type="button" class="btn btn-warning">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
    </button>
    <button id="btn_delete" type="button" class="btn btn-danger" onclick="del()">
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
    </button>
</div>
<table id="page"></table>

<script>
    $(function () {
        $('#page').bootstrapTable({
            url: 'http://localhost:8080/company/getCompany',  //请求后台的URL
            method: 'get',   //请求方式（*）
            toolbar: "#toolbar", //工具按钮用哪个容器
            striped: true, // 是否显示行间隔色 //search : "true",
            sidePagination: "server", //client客户端分页，server服务端分页（*）
            pageNumber: 1, //初始化加载第一页，默认第一页
            pageList:[10, 20, 50, 100, 200],//可供选择的每页的行数（*）
            smartDisplay:false,
            pageSize: 5, //每页的记录行数（*）
            showPaginationSwitch: true,//是否隐藏分页条
            search: false,        //是否显示表格搜索
            showColumns: false,      //是否显示所有的列（选择显示的列）
            showRefresh: true,      //是否显示刷新按钮
            clickToSelect: false,               //是否启用点击选中行
            pagination: true,
            editable: true,
            /*  height: 500,   */      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "id",      //每一行的唯一标识，一般为主键列
            contentType: "application/x-www-form-urlencoded",
            paginationPreText: "上一页",
            paginationNextText: "下一页", //设置为 ‘limit’ 则会发送符合 RESTFul 格式的参数.
            sortable: true, // 是否启用排序 // queryParamsType : "limit"
            queryParams: queryParams, //queryParams为参数设置的函数
            columns: [
                {
                    checkbox: true,
                    visible: true                  //是否显示复选框
                },
                {
                    field: 'id',
                    title: '编号'
                },
                {
                    field: 'phone',
                    title: '电话号码'
                },
                {
                    field: 'time',
                    title: '发送时间',
                    formatter: function (value, row, index) {
                        return changeDateFormat(value)
                    }
                },
                {
                    field: 'email',
                    title: '邮件地址'
                },
                {
                    field: 'neir',
                    title: '内容'
                },

                {
                    field: 'operation',
                    title: '操作',
                    align: 'center',
                    events:operateEvents,//给按钮注册事件
                    formatter: addFunctionAlty//表格中增加按钮
                }],
            onLoadSuccess: function () {  //加载成功时执行
                console.info("加载成功");
            },
            onLoadError: function () {  //加载失败时执行
                console.info("加载数据失败");
            }
        });
    });

    /*-----------表格的初始化渲染 end-----------*/
    function queryParams(params) {
        return {
            pageNum: (params.offset / params.limit) + 1, //当前页面,默认是上面设置的1(pageNumber)
            pageSize: params.limit, //每一页的数据行数，默认是上面设置的10(pageSize)
        }
    }

    // 修改按钮、删除按钮
    function addFunctionAlty(value, row, index) {
        return [
           /* '<button type="button" id="btn_edit" class="btn btn-info" data-toggle="modal" data-target="#ModalInfo">修改</button>  ',*/
            '<button id="btn_delete" class="btn btn-danger">删除</button>'
        ].join('');
    }

    window.operateEvents = {

        // 点击修改按钮执行的方法
        'click #btn_edit': function (e, value, row, index) {
            alert(index);
            alert(e);
            alert(value);
            alert(row.id);
            alert("修改");
        },

        'click #btn_delete': function (e, value, row, index) {
            alert(row.id);
           $.ajax({
               url:"company/del",
               type:"POST",
               data:{
                   id:row.id
               },
               dataType:"JSON",
               success:function () {
                   alert(1);
               }

           })
            location.reload();
        }



    }

    function del(row) {
        alert(row);
    }
    //转换日期格式(时间戳转换为datetime格式)
    function changeDateFormat(cellval) {
        var dateVal = cellval + "";
        if (cellval != null) {
            var date = new Date(parseInt(dateVal.replace("/Date(", "").replace(")/", ""), 10));
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            return date.getFullYear() + "-" + month + "-" + currentDate + " " + hours + ":" + minutes + ":" + seconds;
        }
    }

</script>


<div class="container-fluid">

    <h1>可拖拽的模态框</h1>
    <button class="btn btn-primary" id="click">
        <i class="glyphicon glyphicon-floppy-disk"></i> click
    </button>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel"></h4>
                </div>
                <div class="modal-body">

                    <div class="form-group">
                        <label for="txt_departmentname">部门名称</label>
                        <input type="text" name="txt_departmentname" class="form-control" id="txt_departmentname" placeholder="部门名称">
                    </div>
                    <div class="form-group">
                        <label for="txt_parentdepartment">上级部门</label>
                        <input type="text" name="txt_parentdepartment" class="form-control" id="txt_parentdepartment" placeholder="上级部门">
                    </div>
                    <div class="form-group">
                        <label for="txt_departmentlevel">部门级别</label>
                        <input type="text" name="txt_departmentlevel" class="form-control" id="txt_departmentlevel" placeholder="部门级别">
                    </div>
                    <div class="form-group">
                        <label for="txt_statu">描述</label>
                        <input type="text" name="txt_statu" class="form-control" id="txt_statu" placeholder="状态">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i> 关闭</button>
                    <button type="button" id="btn_submit" class="btn btn-primary" data-dismiss="modal"><i class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></i> 保存</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    //注册新增按钮的事件
    $("#click").click(function() {
        $("#myModalLabel").text("新增");
        $('#myModal').modal();
    });
    // 无按钮时自动加载
    //$('#myModal').modal();

    // 在模态框出现后添加可拖拽功能
    $(document).on("show.bs.modal", ".modal", function() {
        $(this).draggable({
            handle: ".modal-header", // 只能点击头部拖动
            cursor: "crosshair"
        });
        $(this).css("overflow", "hidden"); // 防止出现滚动条，出现的话，你会把滚动条一起拖着走的
    });



</script>


</body>
</html>

