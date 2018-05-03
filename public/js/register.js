/*
* 注册页面
* */
//表单输入内容
//手机号
var tel = document.getElementById("telNum"),telStatus = false,
    //验证图片
    picCheck = document.getElementById("checked"),picCheckStatus = false,
    //验证短信
    checkedTel = document.getElementById("checkedTel"),checkedTelStatus = false,
    //密码
    passWad = document.getElementById("passWad"),passWadStatus = false;

/*
 各项数据获取焦点验证
 */
//手机号获取焦点
tel.onfocus =function(){
    //调用输入框获取焦点验证函数
    focusHandleDis(this);
}
//短信获取焦点
checkedTel.onfocus =function(){
    focusHandle(this);
}
//密码获取焦点
passWad.onfocus =function(){
    focusHandleDis(this);
}
//图片验证获取焦点
picCheck.onfocus = function () {
    focusHandle(this);
    }
/*
 各项数据失去焦点验证
 */

//手机号失去焦点
tel.onblur =function(){
    //调用输入框失去焦点验证函数
    var RegExp = /^1(3|4|5|7|8)\d{9}$/;
    telStatus = blurHandle(this,RegExp);
}
//短信失去焦点
checkedTel.onblur =function(){
    //调用输入框失去焦点验证函数
    var RegExp = /\w{4}/;
    checkedTelStatus = blurHandle(this,RegExp);
}
//密码失去焦点
passWad.onblur =function(){
    //调用输入框失去焦点验证函数
    var RegExp = /\w{6,16}/;
    passWadStatus = blurHandle(this,RegExp);
}
//图片验证失去焦点
picCheck.onblur = function () {
    //调用输入框失去焦点验证函数
    picCheckStatus = yanzheng(this);
}


//注册按钮点击事件
var btn = document.getElementById("btn");
btn.onclick = function(){

    //运行一次所有的表单元素失去焦点事件
    tel.onblur();
    checkedTel.onblur();
    passWad.onblur();
    picCheck.onblur();

    //检验表单中的必填项的验证是否为真
    if(telStatus && checkedTelStatus && passWadStatus && picCheckStatus){
        //获取数据提交
        var telVal = tel.value;
        //如果成功就存储
        sessionStorage.setItem('niceNameKey',telVal);
        location.href = 'land.html';

    }else{
        //如果存在验证不通过的项目，就弹框提醒
        alert("请完善必填信息");
    }
}

//消失按钮点击事件
var i = document.getElementsByTagName('i');
var erroMesg = document.getElementsByClassName('errorMes')[0];
for(var x=0;x< i.length;x++){
    i[x].onclick = function () {
        this.classList.remove('active');
        this.previousElementSibling.value = "";
        erroMesg.textContent = "";
        this.parentNode.style.borderColor = "#c5cddb";
    }
}

/*
 *    功能：输入框失去焦点验证函数
 *    object ident:标识符，失去焦点对应的元素
 *    string mesg:提示信息
 *    ture:验证通过
 *
 *
 */
function blurHandle(ident,RegExp){
    //获取当前表单元素
    var thisVal = ident.value;
    //存储错误信息的节点
    var erroMesg = document.getElementsByClassName('errorMes')[0];
    //如果当前值为空
    if(thisVal===""){
        //设置提示信息
        ident.parentNode.style.borderColor = '#c5cddb';
        //返回验证结果
        return false;
    }
    //验证值不正确
    else if(!RegExp.test(thisVal)){
        //设置提示信息
        erroMesg.innerHTML = '<i></i>请输入正确的格式';
        ident.parentNode.style.borderColor = 'red';
        return false;
    }
    //否则
    else{
        erroMesg.textContent = "";
        ident.parentNode.style.borderColor = "#c5cddb";
        ident.nextElementSibling.classList.remove('active');
        return true;
    }
}

/*
 * 随机生成字母数字验证码
 * */
//验证验证码输入框内容
//随机生成验证码
var str = 'ghADE2RXY3KL45436SDG534dfgSDdfbghfERTETH345RTHJklFG6MNopVWqOPQZabcdijHefmuBCvwSTUxyz01IJ78nrst9';

// 随机个数函数
function suiji(min,max){
    return Math.round(Math.random()*(max-min+1)+min)
}
//生成随机数
var leng = suiji(4,5),
    randomNum = "",
    aa = "";
window.onload = function(){
    for(var i=0;i<leng;i++){
        var index = Math.round(Math.random()*str.length);
        randomNum += str.charAt(index);
    }
    con.textContent = randomNum;
}
var con = document.getElementsByClassName('con')[0];
con.onclick = function(){
    con.textContent="";
    aa="";
    for(var i=0;i<leng;i++){
        var index = Math.round(Math.random()*str.length);
        aa += str.charAt(index);
    }
    con.textContent = aa;
}
//图片验证函数
function yanzheng(ident){
    //获取当前表单元素
    var thisVal = ident.value;
    //存储错误信息的节点
    var erroMesg = document.getElementsByClassName('errorMes')[0];
    //如果当前值为空
    if(thisVal===""){
        //设置提示信息
        ident.parentNode.style.borderColor = '#c5cddb';
        ident.nextElementSibling.classList.remove('active');
        //返回验证结果
        return false;
    }
    //验证值不正确
    else if(picCheck.value !== con.textContent){
        erroMesg.innerHTML = '<i></i>请输入正确的格式';
        ident.parentNode.style.borderColor = 'red';
        return false;
    }
    //否则
    else{
        erroMesg.textContent = "";
        ident.parentNode.style.borderColor = "#c5cddb";
        ident.nextElementSibling.classList.remove('active');
        return true;
    }
}

/*
* 获取焦点验证函数*/

function focusHandle(ident) {
    ident.parentNode.style.borderColor = '#4aafe9';
}
function focusHandleDis(ident) {
    ident.parentNode.style.borderColor = '#4aafe9';
    ident.nextElementSibling.classList.add('active');
}
/*
* 去登录添加点击事件
* */
var load = document.getElementsByClassName('load')[0];
load.onclick = function () {
    location.href = 'land.html';
}


/*
* 给头部图片添加点击事件
* */
var goShopping = document.getElementsByClassName('goShopping')[0];
goShopping.onclick = function () {
    location.href = 'index.html';
}
