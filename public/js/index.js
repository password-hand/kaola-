/**
 * Created by jing on 2017/11/27.
 */
/*获取注册人信息*/
var reachBoxRight = document.getElementsByClassName('reachBoxRight')[0];
var popupMain = document.getElementById('shade');
var popupBtn = document.getElementById('btn');
var nameShow = document.getElementsByClassName("nameShow")[0];
var getNiceName = sessionStorage.getItem('niceNameKey');
console.log(getNiceName)
if(!getNiceName){
    reachBoxRight.onclick = function () {
        popupMain.style.cssText = 'visibility:visible;opacity:1;';
    }
    nameShow.innerHTML='<li class="fl nav2"><a href="land.html">登录</a></li><span class="fl step"></span><li class="fl nav3"><a href="register.html">免费注册</a></li>'
}else{

    nameShow.innerHTML = '<li class="fl nav2"><a href="#">欢迎登录：</a></li><li class="fl nav3"><a href="#">' +getNiceName+ '</a></li>';
}

// 弹出框按钮点击事件
popupBtn.onclick = function(){
    popupMain.style.cssText ='';
}

/*二级导航生成*/
//获取装生成内容的盒子
var navSecondLeft = document.getElementsByClassName('navSecondLeft'),
    navSecondRightT = document.getElementsByClassName('navSecondRightT'),
    navSecondRightB = document.getElementsByClassName('navSecondRightB'),
    lis = document.getElementsByClassName('navSecond')[0].getElementsByTagName('li');
for(var x=0; x<11; x++) {
    lis[x].index = x;
    lis[x].onmouseenter = function () {
        var str = "";
        var str1 = "";
        var str2 = "";
        for(var k = 0; k < obj[this.index][5].img.length-1; k++){
            str2 += '<img src="images/' +obj[this.index][5].img[k]+ '">';
        }
        navSecondRightB[this.index].innerHTML = '<img src="images/' +obj[this.index][5].img[9]+ '">';
        navSecondRightT[this.index].innerHTML = str2;
        for (var i = 0; i < obj[this.index].length - 1; i++) {
            for (var j = 0; j < obj[this.index][i].content.length; j++) {
                str1 += '<a href="#" class="lists"> ' + obj[this.index][i].content[j] + '</a>';
            }
            str += '<div class="fl goodBoxs"><p class="title">' + obj[this.index][i].name + '</p><div class="navSecondList">' +str1+ '</div></div>'
            str1="";
        }
        navSecondLeft[this.index].innerHTML = str;
    }
}


/*轮播图*/
var imgArr = ["images/banner1.jpg","images/banner2.jpg","images/banner3.jpg","images/banner4.jpg","images/banner5.jpg","images/banner6.jpg","images/banner7.jpg","images/banner8.jpg"];
//获取元素
var lis = document.getElementsByClassName('pointList')[0].getElementsByTagName('li'),
    imgBox = document.getElementsByClassName('imgBox')[0],
    toPrevImgBtn = document.getElementsByClassName('toPrevImgBtn')[0],
    toNextImgBtn = document.getElementsByClassName('toNextImgBtn')[0],
    pic = document.getElementById('pic');
//循环添加点击事件
var x=0;
    for(var i=0; i<imgArr.length;i++){
        //存储当前下标
        lis[i].index = i;
        //给圆点设置点击事件
        lis[i].onclick = function(){
            setLi();
            //对应显示图片
            pic.src = imgArr[this.index];
            //给对应的小圆点加class
            lis[this.index].classList.add("checked");
            x=this.index;
        }
    }

//点击下一张
toNextImgBtn.onclick = function(){
    setLi();
    if(x>=imgArr.length-1){
        x=0;
        pic.src = imgArr[x];
        lis[x].classList.add("checked");
    }else{
        x++;
        pic.src = imgArr[x];
        lis[x].classList.add("checked");
    }
}
//点击上一张
var count =0;
toPrevImgBtn.onclick = function(){
    setLi();
    if(x<=0){
        x=imgArr.length-1;
        pic.src = imgArr[x];
        lis[x].classList.add("checked");
    }else{
        x--;
        pic.src = imgArr[x];
        lis[x].classList.add("checked");
    }
}
var startTop;
/*定义自动切换下一张图片*/
function starTop(){
    if(x>=imgArr.length-1){
        x=-1;
    }
    pic.classList.remove("show");
        x++;
        pic.src = imgArr[x];
        setLi();
        lis[x].classList.add("checked");
        pic.classList.add("show");
}
startTop = setInterval(starTop,5000);
//鼠标悬停大图的时候，清除定时器
imgBox.onmouseenter = function(){
    clearInterval(startTop);
    console.log("结束")
}
//鼠标离开大图的时候，继续定时器
imgBox.onmouseleave = function(){
    startTop = setInterval(starTop,5000);
}
//创建设置选中的圆点函数
function setLi(){
    //初始化所有的原点样式
    for(var j=0; j<lis.length;j++){
        lis[j].classList.remove("checked");
    }
}

/*小轮播图*/
//获取元素
var listBox = document.getElementsByClassName('pointListSmall');
var shoppingImgs = document.getElementsByClassName('shoppingImgs');
/*调用轮播函数*/
showImages(0);
showImages(1);
showImages(2);
showImages(3);
showImages(4);
showImages(5);
//定义轮播函数
function showImages(ele) {
var y=1;
var list = listBox[ele].getElementsByTagName('i');
var shoppingBox = shoppingImgs[ele].getElementsByClassName('shoppingBox');
for(var i=0; i<list.length;i++){
    //存储当前下标
    list[i].index = i;
    //给圆点设置移入事件
  list[i].onmouseenter = function(){
        setList();
        setshopping();
        //对应显示图片
        shoppingBox[this.index].classList.add('showing');
        //给对应的小圆点加class
        list[this.index].classList.add("choose");
        y=this.index;
    }
}
var startBot;
    /*定义自动切换下一张图片*/
function starBot(){
    if(y>=3){
        y=0;
    }
    setList();
    setshopping();
    list[y].classList.add("choose");
    shoppingBox[y].classList.add('showing');
    y++;
}
startBot = setInterval(starBot,3000);
//鼠标悬停大图的时候，清除定时器
shoppingImgs[ele].onmouseenter = function(){
    clearInterval(startBot);
}
//鼠标离开大图的时候，继续定时器
shoppingImgs[ele].onmouseleave = function(){
    startBot = setInterval(starBot,3000);
}
//创建设置选中的圆点函数
function setList(){
    //初始化所有的原点样式
    for(var j=0; j<3;j++){
        list[j].classList.remove("choose");
    }
}
//创建设置选中的图片盒子函数
function setshopping(){
    //初始化所有的图片样式
    for(var j=0; j<3;j++){
        shoppingBox[j].classList.remove("showing");
    }
}
}

/*滚动条事件*/
var head = document.getElementsByClassName('head')[0],
    navBoxLeft = document.getElementsByClassName('navBoxLeft')[0],
    navBoxRight = document.getElementsByClassName('navBoxRight')[0],
    goUp = document.getElementsByClassName('goUp')[0];
//给滚动条设置事件函数
document.body.onscroll = function () {
    var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
    //当滚动条到达特定位置
    if(scrollT >= 135){
        head.classList.add("shows");
    }
    if(scrollT < 135){
        head.classList.remove("shows");
    }
    if(scrollT >= 715){
        navBoxLeft.classList.add("fixedL");
        navBoxRight.classList.add("fixedR");
    }
    if(scrollT < 715){
        navBoxLeft.classList.remove("fixedL");
        navBoxRight.classList.remove("fixedR");
    }
}
/*给TOP按钮添加点击事件*/
goUp.onclick = function () {
    var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
}

/*设置倒计时函数*/
function time(){
    var end = new Date("2018/11/27 23:59:59");
    var now = new Date();
    var c = end - now;
    var showTime = document.getElementsByClassName('showTime')[0];
    var day = Math.floor(c/1000/60/60/24);//日
    var hours = Math.floor((c-day*1000*60*60*24)/1000/60/60);//时
    var arrHours = String(hours).split('');
    if(arrHours.length == 1){
        hours = 0 + String(hours);
        arrHours = String(hours).split('');
    }

    var mintues = Math.floor((c-day*1000*60*60*24-hours*1000*60*60)/1000/60);//分
    var arrMintues = String(mintues).split('');
    if(arrMintues.length == 1){
        mintues = 0 + String(mintues);
        arrMintues = String(mintues).split('');
    }

    var second = Math.floor((c-day*1000*60*60*24-hours*1000*60*60-mintues*1000*60)/1000);//秒
    var arrSecond = String(second).split('');
    if(arrSecond.length == 1){
        second = 0 + String(second);
        arrSecond = String(second).split('');
    }

    var newTime ='<i>' +arrHours[0]+ '</i><i>' +arrHours[1]+ '</i>:<i>' +arrMintues[0]+ '</i><i>' +arrMintues[1]+ '</i>:<i>' +arrSecond[0]+ '</i><i>' +arrSecond[1]+ '</i>';
    showTime.innerHTML = newTime;

    /*自动刷新*/
    if(c == 0){
        c = 24*60*60*1000;
    }
}
setInterval(time,1000);




























