/*
* 登录页面
* */
/*获取注册人信息*/
var getNiceName = localStorage.getItem('niceNameKey');
//表单输入内容
    //手机号
var tel1 = document.getElementsByClassName("telNum1")[0],tel1Status = false,
    tel2 = document.getElementsByClassName("telNum2")[0],tel2Status = false,
    //验证图片
    picCheck = document.getElementsByClassName("checked")[0],picCheckStatus = false,
    //验证短信
    checkedTel = document.getElementById("checkedTel"),checkedTelStatus = false,
    //密码
    passWad1 = document.getElementsByClassName("passWad1")[0],passWad1Status = false,
    passWad2 = document.getElementsByClassName("passWad2")[0],passWad2Status = false,
    //邮箱验证
    emlNum = document.getElementsByClassName("emlNum")[0],emlNumStatus = false;

/*
 各项数据获取焦点验证
 */
//手机号获取焦点

tel1.onfocus =function(){
    //调用输入框获取焦点验证函数
    focusHandleDis(this);
}
tel2.onfocus =function(){
    //调用输入框获取焦点验证函数
    focusHandleDis(this);
}
//短信获取焦点
checkedTel.onfocus =function(){
    focusHandle(this);
}
//密码获取焦点

passWad1.onfocus = function () {
    focusHandleDis(this);
}
passWad2.onfocus = function () {
    focusHandleDis(this);
}

//图片验证获取焦点
picCheck.onfocus = function () {
    focusHandle(this);
}
emlNum.onfocus = function () {
    //调用输入框获取焦点验证函数
    focusHandleDis(this);
}

/*
 各项数据失去焦点验证
 */

//手机号失去焦点

    tel1.onblur = function () {
        //调用输入框失去焦点验证函数
        var RegExp = /^1(3|4|5|7|8)\d{9}$/;
        tel1Status = blurHandle(this, RegExp);
    }
tel2.onblur = function () {
    //调用输入框失去焦点验证函数
    var RegExp = /^1(3|4|5|7|8)\d{9}$/;
    tel2Status = blurHandle(this, RegExp);
}

//短信失去焦点
checkedTel.onblur =function(){
    //调用输入框失去焦点验证函数
    var RegExp = /\w{4}/;
    checkedTelStatus = blurHandle(this,RegExp);
}
//密码失去焦点
    passWad1.onblur = function () {
        //调用输入框失去焦点验证函数
        var RegExp = /\w{6,16}/;
        passWad1Status = blurHandle(this, RegExp);
    }
    passWad2.onblur = function () {
        //调用输入框失去焦点验证函数
        var RegExp = /\w{6,16}/;
        passWad2Status = blurHandle(this, RegExp);
    }
//图片验证失去焦点
picCheck.onblur = function () {
    //调用输入框失去焦点验证函数
    picCheckStatus = yanzheng(this);
}
//邮箱验证失去焦点
emlNum.onblur = function () {
    //调用输入框失去焦点验证函数
    var RegExp = /^\w+@[a-z0-9]+\.([a-z]){1,3}$/;
    emlNumStatus = blurHandle(this,RegExp);
}
//注册按钮点击事件
var btn1 = document.getElementsByClassName("btn1")[0],
    btn2 = document.getElementsByClassName("btn2")[0],
    btn3 = document.getElementsByClassName("btn3")[0],
    popupMain = document.getElementById('shade'),
    popupBtn = document.getElementById('btn'),
    mes = document.getElementById('mes');
//页面1
btn1.onclick = function() {
    var telVal1 = tel1.value,
        picCheckVal = picCheck.value,
        checkedTelVal = checkedTel.value;
    var getNiceName = sessionStorage.getItem('niceNameKey');
    if (telVal1 === getNiceName && tel1Status && checkedTelStatus && picCheckStatus) {
        location.href = 'index.html';
    }
    else if (!telVal1 || !picCheckVal || !checkedTelVal) {
        popupMain.style.cssText = 'visibility:visible;opacity:1;';
        mes.textContent = "请完善必填信息！";
    }
    else {
        popupMain.style.cssText = 'visibility:visible;opacity:1;';
        mes.textContent = "该账号没有注册！";
    }
}
//页面2
    btn2.onclick = function() {
        var telVal2 = tel2.value,
            passWad1Val = passWad1.value;
        var getNiceName = sessionStorage.getItem('niceNameKey');
        if (telVal2 === getNiceName && tel2Status && passWad1Status) {
            location.href = 'index.html';
        }
        else if (!telVal2 || !passWad1Val) {
            popupMain.style.cssText = 'visibility:visible;opacity:1;';
            mes.textContent = "请完善必填信息！";
        }
        else {
            popupMain.style.cssText = 'visibility:visible;opacity:1;';
            mes.textContent = "该账号没有注册！";
        }
    }
//页面3
        btn3.onclick = function() {
            var emlNumVal = emlNum.value,
                passWad2Val = passWad2.value;
            var getNiceName = sessionStorage.getItem('niceNameKey');
            if (emlNumVal === getNiceName && passWad2Status) {
                location.href = 'index.html';
            }
            else if (!emlNumVal || !passWad2Val) {
                popupMain.style.cssText = 'visibility:visible;opacity:1;';
                mes.textContent = "请完善必填信息！";
            }
            else {
                popupMain.style.cssText = 'visibility:visible;opacity:1;';
                mes.textContent = "该账号没有注册！";
            }
        }

// 弹出框按钮点击事件

popupBtn.onclick = function(){
    popupMain.style.cssText ='';
}

//消失按钮点击事件
var i = document.getElementsByTagName('i');
var erroMesg = document.getElementsByClassName('errorMes');
for(var x=0;x< i.length;x++){
    i[x].onclick = function () {
        this.classList.remove('active');
        this.previousElementSibling.value = "";
        this.parentNode.style.borderColor = "#c5cddb";
        for(var i=0;i<erroMesg.length;i++){
            erroMesg[i].textContent = "";
        }
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
    var erroMesg = document.getElementsByClassName('errorMes');
    //如果当前值为空
    if(thisVal===""){
        //设置提示信息
        ident.parentNode.style.borderColor = '#c5cddb';
        ident.nextElementSibling.classList.remove('active');
        //返回验证结果
        return false;
    }
    //验证值不正确
    else if(!RegExp.test(thisVal)){
        //设置提示信息
        for(var i=0;i<erroMesg.length;i++){
            erroMesg[i].innerHTML = '<i></i>请输入正确的格式';
        }
        ident.parentNode.style.borderColor = 'red';
        return false;
    }
    //否则
    else{
        for(var i=0;i<erroMesg.length;i++){
            erroMesg[i].textContent = "";
        }
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

/*手机号邮箱点击*/
/*给头部添加点击事件*/
var lis = document.getElementsByClassName('headBg')[0].getElementsByTagName('li');
var emlBox = document.getElementsByClassName('emlBox')[0];
var regMain = document.getElementsByClassName('regMain')[0];
var megMain = document.getElementsByClassName('megMain')[0];
var inputs = document.getElementsByTagName('input');
var inputBox =document.getElementsByClassName('inputBox');

console.log(i)
lis[0].onclick = function () {
    emlBox.classList.remove('showN');
    megMain.classList.remove('showN');
    regMain.classList.add('showN');
    this.style.color = "#e31436";
    lis[1].style.color = "black";
    lis[0].onmouseover = function () {
        lis[0].style.color = '#e31436';
    }
    lis[0].onmouseleave = function () {
        lis[0].style.color = '#e31436';
    }
    lis[1].onmouseover = function () {
        lis[1].style.color = '#e31436';
    }
    lis[1].onmouseleave = function () {
        lis[1].style.color = 'black';
    }
    /*清空所有数据*/
    for(var j=0;j<erroMesg.length;j++){
        erroMesg[j].textContent = "";
    }
    for(var a=0;a<inputs.length;a++){
        inputs[a].parentNode.style.borderColor ="rgb(197, 205, 219)";
    }
    passWad1.value = "";
    passWad2.value = "";
    tel1.value = "";
    tel2.value = "";
    checkedTel.value = "";
    picCheck.value = "";
    emlNum.value = "";
}
lis[1].onclick = function () {
    regMain.classList.remove('showN');
    megMain.classList.remove('showN');
    emlBox.classList.add('showN');
    this.style.color = "#e31436";
    lis[0].style.color = "black";
    lis[1].onmouseover = function () {
        lis[1].style.color = '#e31436';
    }
    lis[1].onmouseleave = function () {
        lis[1].style.color = '#e31436';
    }
    lis[0].onmouseover = function () {
        lis[0].style.color = '#e31436';
    }
    lis[0].onmouseleave = function () {
        lis[0].style.color = 'black';
    }
    /*清空所有数据*/

    for(var j=0;j<erroMesg.length;j++){
        erroMesg[j].textContent = "";
    }
    for(var a=0;a<inputs.length;a++){
        inputs[a].parentNode.style.borderColor ="rgb(197, 205, 219)";
    }
    passWad1.value = "";
    passWad2.value = "";
    tel1.value = "";
    tel2.value = "";
    checkedTel.value = "";
    picCheck.value = "";
    emlNum.value = "";
}

/*
 * 循环删除已经添加的样式函数方法
 *
 * */
function setLi(){
    //初始化所有的原点样式
    for(var j=0; j<lis.length;j++){
        lis[j].style.color = "black";
    }
}

/*
* 清除X按钮信息
* */
function dispearX() {
    for(var j=0;j<i.length;j++){
        i[j].classList.remove('active');
    }
}

/*
* 清除错误信息
* */
function err() {
    for(var j=0;j<erroMesg.length;j++){
        erroMesg[j].textContent = "";
    }
}

/*
* 清除输入框内容
* */
function inputCon() {
    for(var j=0;j<inputBox.length;j++){
        inputBox[j].style.border = "1px solid #c5cddb";
    }
}

/*
* 清除输入框边框颜色
* */
function changeBorder() {
    for(var j=0;j<inputs.length;j++){
        inputs[j].value = "";
    }
}
/*
* 密码和短信验证切换*/
var message = document.getElementsByClassName('message');
message[0].onclick = function () {
    regMain.classList.remove('showN');
    emlBox.classList.remove('showN');
    megMain.classList.add('showN');
    err();
    inputCon();
    changeBorder();
    dispearX();
}
message[1].onclick = function () {
    regMain.classList.add('showN');
    emlBox.classList.remove('showN');
    megMain.classList.remove('showN');
    err();
    inputCon();
    changeBorder();
    dispearX();
}

/*
* 手机快速注册
**/
var quick = document.getElementsByClassName('quick')[0];
quick.onclick = function () {
    location.href = 'register.html';
}

/*
* 给头部图片添加点击事件
* */
var goShopping = document.getElementsByClassName('goShopping')[0];
goShopping.onclick = function () {
    location.href = 'index.html';
}











