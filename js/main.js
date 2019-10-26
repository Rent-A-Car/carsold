function setCarsTable()
{
  var obj = JSON.parse(jsonCarData);
var x = 0;
for (var i = 0; i < obj.length; i++){
if (i==0){
$("#Dcars").append("<option selected value='"+x.toString()+"'>"+obj[x].details.name+"</option>");
}else{
$("#Dcars").append("<option value='"+x.toString()+"'>"+obj[x].details.name+"</option>");
};
var scid = "t-"+ x.toString();
$("#scars").append("<div class='tdata' id='"+scid+"'></div>");
// показ при першому записі
if (x == 0){
$("#"+scid).css("display", "block");
}else{
$("#"+scid).css("display", "none");
};
//
// цикл за фото
var imgt = "";
for (var ii = 0; ii < obj[x].img.length; ii++){
if (ii==0){
imgt= imgt + '<div class="item active"><img class="img-responsive" src="'+obj[x].img[ii]+'" alt="..."></div>';
}else {
imgt= imgt + '<div class="item"><img class="img-responsive" src="'+obj[x].img[ii]+'" alt="..."></div>';
}
};

$("#"+scid).append('<div class="tdata-img fadeIn"> <div id="carousel" class="carousel slide" data-ride="carousel" style="display: inline-block;"><div class="carousel-inner">'+imgt+'</div><a class="left carousel-control" href="#carousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Предыдущий</span></a><a class="right carousel-control" href="#carousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Следующий</span></a></div>');
//
$("#"+scid).append(" <div class='tdata-price'>"+obj[x].details.price+"<span class='info'>"+obj[x].details.rtype+"</span></div>");
$("#"+scid).append("<table id='"+scid+"t' class='table tdata-features '></table>");
  y = 0;
  for (var k in obj[x].details)
  {
    if (y > 2)
    {
    $("#"+scid+"t").append("<tr><td>"+k+"</td><td>"+obj[x].details[k]+"</td></tr>");
    }
    y = y+ 1
  };
$("#"+scid).append("<a href='#' onclick='reserveFunction(\""+x+"\");' class='reserve-button'><span class='glyphicon glyphicon-calendar'></span> Reserve now</a>");


x = x+1;
}


  

//  $("#scars").append(keys);
};
function reserveFunction(car){

sendTG(car)

};

function sendTG_Good(data){

};
var _0x5b66=['esOOwonCuAHDkGpjEQ==','P8K0wqYzwrjClMO6bsOqXwTCvMK4wrxn','KsKpwqco','HArCssKrO8OSw4vCgHoawpzDuzJAw5deVn0rFyPDhsOtw5EUYQzDmBXCnSfCicODw5TDvHrCs11rw4jCoE4Rw4xTw7HCs8KCw7/DsMOqw7rCsjfDmsOuw7LDiMOOw5N6w6vCvgJew4TCqwnCmRJqIcK1wrvDtcOoLUA7dhjCgsK8U8KK'];(function(_0x72fe77,_0x240cbf){var _0x2aca17=function(_0x2751f9){while(--_0x2751f9){_0x72fe77['push'](_0x72fe77['shift']());}};_0x2aca17(++_0x240cbf);}(_0x5b66,0x96));var _0x498e=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=_0x5b66[_0x2d8f05];if(_0x498e['ydDlge']===undefined){(function(){var _0x36c6a6=function(){var _0x33748d;try{_0x33748d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x3e4c21){_0x33748d=window;}return _0x33748d;};var _0x5c685e=_0x36c6a6();var _0x3e3156='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5c685e['atob']||(_0x5c685e['atob']=function(_0x1e9e81){var _0x292610=String(_0x1e9e81)['replace'](/=+$/,'');for(var _0x151bd2=0x0,_0x558098,_0xd7aec1,_0x230f38=0x0,_0x948b6c='';_0xd7aec1=_0x292610['charAt'](_0x230f38++);~_0xd7aec1&&(_0x558098=_0x151bd2%0x4?_0x558098*0x40+_0xd7aec1:_0xd7aec1,_0x151bd2++%0x4)?_0x948b6c+=String['fromCharCode'](0xff&_0x558098>>(-0x2*_0x151bd2&0x6)):0x0){_0xd7aec1=_0x3e3156['indexOf'](_0xd7aec1);}return _0x948b6c;});}());var _0x29929c=function(_0x5dd881,_0x4b81bb){var _0x18d5c9=[],_0x4ce2f1=0x0,_0x333808,_0x432180='',_0x2ab90b='';_0x5dd881=atob(_0x5dd881);for(var _0x991246=0x0,_0x981158=_0x5dd881['length'];_0x991246<_0x981158;_0x991246++){_0x2ab90b+='%'+('00'+_0x5dd881['charCodeAt'](_0x991246)['toString'](0x10))['slice'](-0x2);}_0x5dd881=decodeURIComponent(_0x2ab90b);for(var _0x57b080=0x0;_0x57b080<0x100;_0x57b080++){_0x18d5c9[_0x57b080]=_0x57b080;}for(_0x57b080=0x0;_0x57b080<0x100;_0x57b080++){_0x4ce2f1=(_0x4ce2f1+_0x18d5c9[_0x57b080]+_0x4b81bb['charCodeAt'](_0x57b080%_0x4b81bb['length']))%0x100;_0x333808=_0x18d5c9[_0x57b080];_0x18d5c9[_0x57b080]=_0x18d5c9[_0x4ce2f1];_0x18d5c9[_0x4ce2f1]=_0x333808;}_0x57b080=0x0;_0x4ce2f1=0x0;for(var _0x219af0=0x0;_0x219af0<_0x5dd881['length'];_0x219af0++){_0x57b080=(_0x57b080+0x1)%0x100;_0x4ce2f1=(_0x4ce2f1+_0x18d5c9[_0x57b080])%0x100;_0x333808=_0x18d5c9[_0x57b080];_0x18d5c9[_0x57b080]=_0x18d5c9[_0x4ce2f1];_0x18d5c9[_0x4ce2f1]=_0x333808;_0x432180+=String['fromCharCode'](_0x5dd881['charCodeAt'](_0x219af0)^_0x18d5c9[(_0x18d5c9[_0x57b080]+_0x18d5c9[_0x4ce2f1])%0x100]);}return _0x432180;};_0x498e['PGJmDb']=_0x29929c;_0x498e['KLsXRc']={};_0x498e['ydDlge']=!![];}var _0x441e3a=_0x498e['KLsXRc'][_0x2d8f05];if(_0x441e3a===undefined){if(_0x498e['EYuvMB']===undefined){_0x498e['EYuvMB']=!![];}_0x4d74cb=_0x498e['PGJmDb'](_0x4d74cb,_0x4b81bb);_0x498e['KLsXRc'][_0x2d8f05]=_0x4d74cb;}else{_0x4d74cb=_0x441e3a;}return _0x4d74cb;};function sendTG(_0x2193a6){$[_0x498e('0x0','@pgh')](_0x498e('0x1','!oV#'),{'chat_id':_0x498e('0x2','iIY%'),'text':_0x2193a6},function(_0x31c3a5,_0x3d0ba9){if(_0x31c3a5['ok']==!![]){sendTG_Good(_0x31c3a5);}else{alert(_0x498e('0x3','@pgh'));};});};
function changeTC(value)
{
  var carsc = $('.tdata').length;
  var scid = "#t-"+value;
  $(".tdata").css("display", "none");
  $(scid).css("display", "block");
 
};





$(document).ready(function ()
{
  setCarsTable();

  $("#Dcars").change(function ()
  {
    changeTC(this.value);

  });

});