function check() {
        if(document.getElementById("username").value=="") {
            layer.msg('没有输入用户名！');
            return false;
        } else if(document.getElementById("password").value=="") {
            layer.msg("没有输入密码！");
            return false;
        } else {
            document.getElementById("login-form").submit();
        }
    }
