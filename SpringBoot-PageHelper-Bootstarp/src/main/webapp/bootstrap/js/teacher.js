//查看当前浏览器类型
function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1
        && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1
        && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1
        && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return "IE7";
        } else if (fIEVersion == 8) {
            return "IE8";
        } else if (fIEVersion == 9) {
            return "IE9";
        } else if (fIEVersion == 10) {
            return "IE10";
        } else if (fIEVersion == 11) {
            return "IE11";
        } else {
            return "0";
        }//IE版本过低
        return "IE";
    }
    if (isOpera) {
        return "Opera";
    }
    if (isEdge) {
        return "Edge";
    }
    if (isFF) {
        console.log('ff');
        return "FF";
    }
    if (isSafari) {
        return "Safari";
    }
    if (isChrome) {
        var a = 'chrome';
        console.log(a);
        return "Chrome";
    }

}
myBrowser();

var isIE = navigator.userAgent.toUpperCase().indexOf("MSIE")?true:false;
// var planid = getCookie('tid') ;

/*------------监考教师start-------------*/
$("#btn_teacher").on("click", function () {
    // $('#tb_departments').bootstrapTable('checkAll');
    // console.log(checkTeacher);
    var dataTid = $('#tb_departments').bootstrapTable('getData');
    console.log(dataTid[0].cid);
    var proCid = dataTid[0].cid;
    setCookie('cid',proCid);
    if(document.cookie = ''){
        console.log('有bug');
    }
    window.location.href = 'teacher.html';
    loadTeacher(proCid);
});
/*------------监考教师end-------------*/

/*------------添加考试科目start------------*/
$('#btn_test').on('click',function () {
    layer.open({
        type: 1,
        area: ['340px', '420px'],
        title:'编辑',
        content: '<div style="padding:20px;">' +
            '<div style="margin: 0 auto;width: 280px">' +
            '<label  style="font-size: 15px;width: 70px;text-align: right">考试任务:</label>'+
            '<input id="testID" type="number" style="height: 25px;margin-bottom: 8px">'+
            '<label style="font-size: 15px;width: 70px;text-align: right">科目名称:</label>'+
            '<input id="testName" type="text" style="height: 25px;margin-bottom: 8px">'+
            '<label  style="font-size: 15px;width: 70px;text-align: right">考试形式:</label>'+
            '<select id="form" style="height: 25px;width: 170px;margin-bottom: 8px">' +
            '<option disabled selected>请选择考试形式</option>'+
            '<option value="0">闭卷考试</option>'+
            '<option value="1">上机考试</option>'+
            '</select>' +
            '<label  style="font-size: 15px;width: 70px;text-align: right">班级人数:</label>'+
            '<input id="classNum" type="number" style="height: 25px;margin-bottom: 8px">'+
            '<label  style="font-size: 15px;width: 70px;text-align: right">重修人数:</label>'+
            '<input id="resetNum" type="number" style="height: 25px;margin-bottom: 8px">'+
            '<label  style="font-size: 15px;width: 70px;text-align: right">总人数:</label>'+
            '<input id="totalNum" type="number" style="height: 25px;margin-bottom: 8px">'+
            '<label  style="font-size: 15px;width: 70px;text-align: right">学院名称:</label>'+
            '<select id="col" style="height: 25px;width: 170px;margin-bottom: 8px">' +
            '</select>' +
            '<label style="font-size: 15px;width: 70px;text-align: right">专业名称:</label>'+
            '<select id="stpnum" style="height: 25px;width: 170px;margin-bottom: 8px">' +
            '</select>' +
            '<label style="font-size: 15px;width: 70px;text-align: right">年级:</label>'+
            '<input id="stGrade" placeholder="填写年级：2016(例)" type="text" style="height: 25px;margin-bottom: 8px">'+
            '<label style="font-size: 15px;width: 70px;text-align: right">班级:</label>'+
            '<input id="stClass" type="text" style="height: 25px;margin-bottom: 8px">'+
            '</select>' +
            '</div>' +
            '</div>',
        btn: ['提交','取消'],
        btnAlign: 'c',
        //页面成功弹出后执行的函数
        success: function(layero, index){
            var colName = document.getElementById("col");
            var poNum = document.getElementById("stpnum");
            var college = new Array('马克思主义学院','政法学院','教育学院','体育学院','文学与传媒学院','外国语学院',
                '数学与统计学院','物理与电子工程学院','计算机工程学院','汽车与交通工程学院','机械工程学院','土木工程与建筑学院','食品科学技术学院 化学'
                ,'医学院','资源环境与旅游学院','经济管理学院','美术学院','音乐与舞蹈学院');
            var poNumjsj = new Array();
            // var poNumjsjbh = new  Array('0','1','2');
            var poNumjsjbh = new  Array;
            //学院所对应的编号
            var collegeNum = new Array('1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18')
            /* ------------------动态生成学院的下拉列表 start------------------*/
            function sel() {

                //设置第一个option为请选择院系。
                var first = document.createElement("option");
                first.value = '请选择院系';
                first.text = '请选择院系';
                first.disabled = 'disabled';
                first.selected = 'selected';
                colName.appendChild(first);
                //遍历数组产生下拉列表
                for(var  i = 0;i<college.length;i++ ){
                    var colOption = document.createElement("option");
                    colOption.value =  collegeNum[i];
                    colOption.text =  college[i];
                    colName.appendChild(colOption);
                }
            }
            sel();
            /* ------------------动态生成学院的下拉列表 end--------------------*/

            /* ------------------动态生成专业编号的下拉列表 start------------------*/
            function opSel(){
                var opFirst = document.createElement("option");
                opFirst.value = '请选择专业';
                opFirst.text = '请选择专业';
                opFirst.disabled = 'disabled';
                opFirst.selected = 'selected';
                poNum.appendChild(opFirst);
            }
            $(colName).change(function () {
                poNumjsj.length = 0 ;
                poNumjsjbh.length = 0 ;
                opSel();
                console.log(poNumjsj.length);
                console.log(poNumjsj.length);
                document.getElementById("stpnum").options.length = 0;
                //获取到选中的学院下拉列表的val值
                var sc = $(this).children('option:selected').val();
                console.log("获取到的value值"+sc);
                var scname = $(this).children('option:selected').text();
                console.log("获取到的text值"+scname);
                $.ajax({
                    type: 'get',
                    data: {cid: sc},
                    url: con+'/dept/pname',
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true,
                    },
                    success: function (data) {
                        console.log(data.rows);
                        for( var i = 0;i<data.rows.length;i++){
                            // opSel();
                            // poNumjsj.length = 0 ;
                            // poNumjsjbh.length = 0 ;
                            poNumjsj.push(data.rows[i].pname);
                            poNumjsjbh.push(data.rows[i].pid);
                            var po0ption = document.createElement("option");
                            po0ption.value = poNumjsjbh[i];
                            po0ption.text = poNumjsj[i];
                            poNum.appendChild(po0ption);
                        }
                        console.log(poNumjsj);
                        console.log(poNumjsjbh);
                    }
                })
            })

            //下拉列表改变option 会进行一次重新渲染
        },
        yes: function(index, layero){
            //点击确认按钮出现的函数
            //1.考试任务编号
            var testid = $("#testID").val();
            //2.学号
            var testName = $("#testName").val();
            //3.学院名称
            var colVal = $("#col").val();
            //4.年级
            var stgrd = $("#stGrade").val();
            //5.班级
            var stcla = $("#stClass").val();
            //6.专业编号
            var spum = $("#stpnum").val();
            //考试形式
            var form = $("#form").val();
            var classNum = $("#classNum").val();
            var resetNum = $("#resetNum").val();
            var totalNum = $("#totalNum").val();
            if(testid&&testName&&colVal&&stgrd&&stcla&&form&&spum&&classNum&&resetNum&&classNum!=null){
                $.ajax({
                    type:'post',
                    url:con+'/examplan/edit/examCourse',
                    dataType:'json',
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true,
                    },
                    data:{'grade':stgrd,'name':testName,'clazz':stcla,'pid':spum,'cid':colVal,'tid':testid,'testForm':form,'number':classNum,'resetNumber':resetNum,'total':totalNum},
                    success:function (data) {
                        console.log("数据成功传给科目");
                        layer.close(index); //如果设定了yes回调，需进行手工关闭
                        //页面进行刷新
                        $('#tb_departments').bootstrapTable('refresh',{ url:con+'/examplan/examCourses'})
                    },
                    error:function (data) {
                        console.log("数据传给后台失败！")
                    }
                })
            }else {
                layer.msg("信息填写不完整！", {icon: 0, time: 1000});
            }


        },
        btn2:function (index, layero) {
            layer.close(index); //如果设定了yes回调，需进行手工关闭
            console.log("关闭了！")
        },

    })
});
/*------------添加同批次考试科目end-------------*/

/*------------开始编排Start------------*/
$('#btn_planning').on('click',function () {
   var planid = getCookie('tid') ;
   $.ajax({
       type:'get',
       url:con+'/examplan/planning',
       // data:{tid:planid},
       crossDomain: true,
       xhrFields: {
           withCredentials: true,
       },
       success:function (data) {
           var mes = data.msg;
           if(data.status == false){
               layer.open({
                   content: mes
               })
           }else if(data.status == true){
               layer.open({
                   type: 1,
                   title: '编排中...',
                   shadeClose: true,
                   area: ['380px', '200px'],
                   content:'<div><p style="margin-top: 30px;margin-left: 50px;color: #f0001e"><i class="fa fa-spinner fa-pulse"></i>&nbsp;正在获取信息,请勿关闭页面</p>' +
                       '<p id="plan" style="margin-left: 50px;"></p>'+
                       '</div>',
                   btnAlign: 'c',
                   shade: [0.8, '#393D49'],
                   success:function (index, layero) {
                       var timer =  window.setInterval(function(){
                           var planed = document.getElementById("plan");
                           $.ajax({
                               type: 'get',
                               crossDomain: true,
                               xhrFields: {
                                   withCredentials: true,
                               },
                               url: con + '/examplan/notify',
                               success: function (data) {
                                   if(data.status== true){
                                       planed.innerText = data.msg;
                                   }
                                   if(data.status == false){
                                       window.clearInterval(timer);
                                       layer.close(index);
                                   }
                               },
                               error:function (data) {
                                   window.clearInterval(timer);
                               }
                           })},3000)
                   }
               });
           }

       }
   });
});
/*------------开始编排end-------------*/


function transferData(data) {
    console.log(data.rows);//这里获取所有的rows 即数据
    var dataRows = data.rows;
    console.log(data.rows.length)//这里获取数据的长度
    var rowsLength = data.rows.length;
    var rowsArray = new  Array();
    for(var i = 0; i<rowsLength;i++){
        rowsArray.push(dataRows[i].number);
    }
    console.log(rowsArray);
    return rowsArray;
}


function loadTeacher(proCid){
    var browser = myBrowser();
    var cidCookie = getCookie('cid');
    var planid = getCookie('tid');
    console.log(cidCookie);
    proCid2 = cidCookie;
    console.log(proCid2);
    /*-----------表格的初始化渲染和行内编辑 start-----------*/
    $(function () {
        $('#tb_departments').bootstrapTable({
            url: con+'/examplan/invigilations',
            ajaxOptions:{
                crossDomain: true,
                xhrFields: {
                    withCredentials: true,
                },
            },
            method:'get',
            toolbar: "#toolbar",
            striped: true, // 是否显示行间隔色
            sidePagination: "server",
            pageNumber: 1, //初始化加载第一页，默认第一页
            pageList:[10,20,50,100,200],
            pageSize:200,
            pagination: true,
            editable:true,
            contentType: "application/x-www-form-urlencoded",
            paginationPreText:"上一页",
            paginationNextText:"下一页",
            queryParamsType : "limit",//设置为 ‘limit’ 则会发送符合 RESTFul 格式的参数.
            sortable: true, // 是否启用排序
            uniqueId:'eid',
            useCurrentPage:false,
            //queryParams为参数设置的函数
            queryParams: queryParams,
            columns: [
                {
                    checkbox: true
                }, {
                    field: 'tname',
                    title: '教师姓名',
                    editable: {
                        type: 'text',
                        title: '教师姓名',
                        mode: 'inline',
                        validate: function (v) {
                            if (!v) return '用户名不能为空';
                        }
                    }
                }, {
                    field: 'tid',
                    title: 'id',
                    mode: 'inline',
                    validate: function (v) {
                        //数字验证
                        var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                        var re = new RegExp(reg);
                        if(re.test(v)){
                            layer.msg("只能输入");
                            console.log("只能输入");
                            return true;
                        }else{
                            return false;
                        }
                    }
                }, {
                    field: 'number',
                    title: '教师工号'
                }, {
                    field: 'college',
                    title: '学院名称'
                },{
                    field: 'wages',
                    title: '工资号'
                },{
                    field: 'rname',
                    title: '角色名称'
                },{
                    field:'',
                    title:'操作',
                    formatter:operateFormatter
                }],
            onLoadSuccess: function(data){  //加载成功时执行
                console.log("监考教师加载成功");
                transferData(data);
            },
            onLoadError: function(){  //加载失败时执行
                console.log("加载数据失败");
            },
        });
    });

    /*---------------bootstrap函数--------------*/
    //1.要传递的参数
    function queryParams(params){
        return {
            pageNum:1,
            pageSize:200,
            //pageNum: (params.offset / params.limit) + 1, 当前页面,默认是上面设置的1(pageNumber)
           // pageSize : params.limit, //每一页的数据行数，默认是上面设置的10(pageSize)
            tid:planid,
            // cid:2,
        }
    }
    //2.1 操作函数
    function operateFormatter(value, row, index) {
        return [
            "<a href='#' class='btn btn-xs green' title='查看'>" +
            "<span class='glyphicon glyphicon-search'></span></a>"+
            ""
        ].join('')
    }
    /*-----------表格的初始化渲染 end-----------*/
}

