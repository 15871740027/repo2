function checkTime(i)
{
    if (i<10)
    {i="0" + i}
    return i
}


function startTime()
{
    var today=new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDate();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var weekday=new Array(7)
    weekday[0]="星期日"
    weekday[1]="星期一"
    weekday[2]="星期二"
    weekday[3]="星期三"
    weekday[4]="星期四"
    weekday[5]="星期五"
    weekday[6]="星期六"
    var w = weekday[today.getDay()];
    document.getElementById('localtime').innerHTML = year+'年' + month +'月'+ checkTime(day) +'日' + w + checkTime(h) + ':' + checkTime(m) + ':' + checkTime(s);
    t=setTimeout('startTime()',500)
}

