$(document).ready(function () {
    var colName = document.getElementById("txt_search_departmentname");
    /* ------------------动态生成学院的下拉列表 start------------------*/

        var college = new Array('马克思主义学院','政法学院','教育学院','体育学院','文学与传媒学院','外国语学院',
            '数学与统计学院','物理与电子工程学院','计算机工程学院','汽车与交通工程学院','机械工程学院','土木工程与建筑学院','食品科学技术学院 化学'
            ,'医学院','资源环境与旅游学院','经济管理学院','美术学院','音乐与舞蹈学院',);
        //学院所对应的编号
        var collegeNum = new Array('1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18')
        //设置第一个option为请选择院系。
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
    /* ------------------动态生成学院的下拉列表 end------------------*/

    //下拉列表改变option 会进行一次重新渲染
    $(colName).change(function () {
        var sc = $(this).children('option:selected').val();
        var sc1 = $(this).children('option:selected').text();
        // console.log(sc);
        console.log(sc1)
    });
});