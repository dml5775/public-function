//str为要去除空格的字符串:
function removeSpace(str){  
//去除所有空格:   
str   =   str.replace(/\s+/g,"");       
//去除两头空格:   
str  =   str.replace(/^\s+|\s+$/g,"");

//去除左空格：
str=str.replace( /^\s*/, '');

//去除右空格：
str=str.replace(/(\s*$)/g, "");
}
//js去除重复元素
function removeRepeat(){
var a = new Array(1, 1, 1, 2, 3, 4, 1, 2, 5, 11);
return a.join(",").match(/([^,]+)(?!.*?,\1(,|$))/ig);
}
//获取本地cookies信息
function getCookie(name){
var arr,
reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg)){
return unescape(arr[2]);
}else{ return null;}
}
//获取浏览器参数值
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
//时间补0 例如2017-12-1 10:5 /2017-12-01 10:05
function Appendzero(obj){
if (obj < 10) return "0" + obj; else return obj;
}
//判断phone android
function isClient(){
var ua = navigator.userAgent.toLowerCase();	
if (/iphone|ipad|ipod/.test(ua)) {
    alert("iphone");	
} else if (/android/.test(ua)) {
    alert("android");	
}
     //navigator.userAgent.toLowerCase().indexOf('micromessenger')//判断是否易信
}
