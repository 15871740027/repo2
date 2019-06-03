function task(){
    /*-----------表格的初始化渲染 start-----------*/
    $('#tb_departments').bootstrapTable({
        ajaxOptions:{
            crossDomain: true,
            xhrFields: {
                withCredentials: true,
            },
        },
        url: con+'/examplan/taskplans',
        // url: 'http://172.19.51.158:8080/taskplans',
        method:'get',
        toolbar: "#toolbar",
        striped: true, // 是否显示行间隔色
        // search : "true",
        sidePagination: "server",
        pageNumber: 1, //初始化加载第一页，默认第一页
        pageList:[10,20,50,100,200],
        pageSize:10,
        pagination: true,
        paginationPreText:"上一页",
        paginationNextText:"下一页",
        contentType: "application/x-www-form-urlencoded",
        queryParamsType : "limit",//设置为 ‘limit’ 则会发送符合 RESTFul 格式的参数.
        sortable: true, // 是否启用排序
        //queryParams为参数设置的函数
        queryParams: queryParams,
        // dataType:'jsonp',
        uniqueId:'id',
        // xhrFields: {
        //     withCredentials: true
        // },
        columns: [{
            checkbox: true
        }, {
            field: 'description',
            title: '考试'
        },{
            field: 'begin',
            title: '开始时间',
            formatter:'timeFormatter'
        }, {
            field: 'end',
            title: '结束时间',
            formatter:'timeEndFormatter'
        },{
            field: 'type',
            title: '考试类型',
            formatter:'typeFormatter'
        },{
            field: 'state',
            title: '计划状态',
            formatter:'upDateFormatter'
        },{
            field: 'times',
            title: '考试场数'
        },{
            field:'',
            title:'操作',
            events:operateEvents,
            formatter:'operateFormatter'
        }],
        // data: [{
        //     tid: 1,
        //     state: '1(已完成)',
        //     end: '2019-02-12'
        // }, {
        //     tid: 2,
        //     state: '0(未完成)',
        //     end: '2019-05-12'
        // }],
        onLoadSuccess: function(){  //加载成功时执行
            console.info("加载成功");
        },
        onLoadError: function(){  //加载失败时执行
            console.info("加载数据失败");
        },
    });
    /*-----------表格的初始化渲染 end-----------*/
}
/*---------------bootstrap-table函数--------------*/
//1.要传递的参数

function operateFormatter(value, row, index) {
    return [
        "<a href=\"javascript:void(0);\" class='btn green change' title = 'row.tid' >" +
        "<span>管理考试科目</span></a>"+
        ""
    ]
}
function timeFormatter(value, row, index){
    startVal = value.toString().substring(0,10);
    console.log();
    return startVal;
    // console.log(value);
}
function timeEndFormatter(value, row, index){
    endVal = value.toString().substring(0,10);
    console.log();
    return endVal;
    // console.log(value);
}

function typeFormatter(value){
    if(value == '0'){
        var a = '常规考试';
        return a;
    }
    if(value == '1'){
        var b = '补缓考';
        return b;
    }
}


window.operateEvents = {
      'click .change':function (e,value,row,index) {
         // chrome
          var rowTid = row.tid;
          setCookie('tid',rowTid);
          // document.cookie = 'tid='+ rowTid;
          if(document.cookie = ''){
              console.log('有bug');
          }
          console.log(rowTid);
          window.location.href = 'project.html';
          // $.ajax({
          //     url:con+'/examplan/examCourses',
          //     data:{'tid':rowTid},
          //     type:'get',
          //     // data:{tid:rowTid},
          //     success:function () {
          //         console.log('我请求接口获取考试科目成功');
          //         console.log('我传递的参数为：'+rowTid);
          //
          //     }
          // });
      }
 };
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

function project(){
    var idCookie = getCookie('tid');
    console.log('我用getCookie的取值为'+idCookie);
    var id2 = idCookie;
    /*-----------表格的初始化渲染 start-----------*/
    $('#tb_departments').bootstrapTable({
        url: con + '/examplan/examCourses',
        method: 'get',
        toolbar: "#toolbar",
        striped: true, // 是否显示行间隔色
        // search : "true",
        sidePagination: "server",
        pageNumber: 1, //初始化加载第一页，默认第一页
        pageList: [10, 20, 50, 100, 200],
        pageSize: 10,
        pagination: true,
        paginationPreText: "上一页",
        paginationNextText: "下一页",
        contentType: "application/x-www-form-urlencoded",
        queryParamsType: "limit",//设置为 ‘limit’ 则会发送符合 RESTFul 格式的参数.
        // dataType:'jsonp',
        sortable: true, // 是否启用排序
        //queryParams为参数设置的函数
        queryParams: queryParams,
        ajaxOptions:{
            crossDomain: true,
            xhrFields: {
                withCredentials: true,
            },
        },

        // ajax:function(request){
        //     $.ajax({
        //         type: "get",
        //         url: con + "/examplan/examCourses",
        //         dataType: 'jsonp',
        //         contentType: 'application/json',
        //         xhrFields: {
        //             withCredentials: true
        //         },
        //         success : function (msg) {
        //             request.success({
        //                 row : msg
        //             });
        //             $('#tb_departments').bootstrapTable('load', msg);
        //         }
        //     })
        // },
        xhrFields: {
            withCredentials: true
        },
        columns: [{
            checkbox: true
        }, {
            field: 'cid',
            title: '院系',
        }, {
            field: 'pid',
            title: '专业'
        }, {
            field: 'grade',
            title: '年级'
        }, {
            field: 'clazz',
            title: '班级'
        }, {
            field: 'number',
            title: '人数'
        }, {
            field: 'resetNumber',
            title: '重修人数'
        }, {
            field: 'total',
            title: '总人数'
        },  {
            field: 'name',
            title: '考试科目'
        },{
            field: 'testForm',
            title: '考试形式'
        }],
        onLoadSuccess: function (id) {  //加载成功时执行
            console.info("加载成功");
        },
        onLoadError: function () {  //加载失败时执行
            console.info("加载数据失败");
        },
    });
    /*-----------表格的初始化渲染 end-----------*/
    function queryParams(params){
        return {
            pageNum: (params.offset / params.limit) + 1, //当前页面,默认是上面设置的1(pageNumber)
            pageSize : params.limit, //每一页的数据行数，默认是上面设置的10(pageSize)
            tid:id2,
            // cid:2,
        }
    }
}
