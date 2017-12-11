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
