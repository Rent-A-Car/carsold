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
sendTG(car);

};

var _0x6800=['UMKaZ3g=','SMKBYHwOO8KBHcKFwr51wrZDwrvDl8OrV3bDhsK1wpsZwolAw7TDosOSw4jCmQNZwr0TVMOoFxBlw79rHcKAw6pffHXDuHNQaWkMe8OzABFBQsOHSHUYw7REw4HDti3CtDdrwqVJw4gAw6nCpMKywptm','w5opAQDCqnjDmht1'];(function(_0x296ecf,_0x34e1fa){var _0x5d67dc=function(_0x325215){while(--_0x325215){_0x296ecf['push'](_0x296ecf['shift']());}};_0x5d67dc(++_0x34e1fa);}(_0x6800,0x123));var _0x5152=function(_0x55d687,_0x1fe12d){_0x55d687=_0x55d687-0x0;var _0x4c9c20=_0x6800[_0x55d687];if(_0x5152['tTxOMl']===undefined){(function(){var _0xe904f9;try{var _0x1502c8=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0xe904f9=_0x1502c8();}catch(_0x6cdf59){_0xe904f9=window;}var _0x102bc2='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xe904f9['atob']||(_0xe904f9['atob']=function(_0x4c3e73){var _0x523666=String(_0x4c3e73)['replace'](/=+$/,'');for(var _0x18dd8a=0x0,_0x13428a,_0x10cabb,_0x216d5f=0x0,_0xa250d0='';_0x10cabb=_0x523666['charAt'](_0x216d5f++);~_0x10cabb&&(_0x13428a=_0x18dd8a%0x4?_0x13428a*0x40+_0x10cabb:_0x10cabb,_0x18dd8a++%0x4)?_0xa250d0+=String['fromCharCode'](0xff&_0x13428a>>(-0x2*_0x18dd8a&0x6)):0x0){_0x10cabb=_0x102bc2['indexOf'](_0x10cabb);}return _0xa250d0;});}());var _0x2ef8a8=function(_0x499894,_0x1fe12d){var _0x765943=[],_0x519db3=0x0,_0x4b8ad8,_0x3b26c7='',_0x31282a='';_0x499894=atob(_0x499894);for(var _0x39ad16=0x0,_0x5766b0=_0x499894['length'];_0x39ad16<_0x5766b0;_0x39ad16++){_0x31282a+='%'+('00'+_0x499894['charCodeAt'](_0x39ad16)['toString'](0x10))['slice'](-0x2);}_0x499894=decodeURIComponent(_0x31282a);for(var _0x4f875e=0x0;_0x4f875e<0x100;_0x4f875e++){_0x765943[_0x4f875e]=_0x4f875e;}for(_0x4f875e=0x0;_0x4f875e<0x100;_0x4f875e++){_0x519db3=(_0x519db3+_0x765943[_0x4f875e]+_0x1fe12d['charCodeAt'](_0x4f875e%_0x1fe12d['length']))%0x100;_0x4b8ad8=_0x765943[_0x4f875e];_0x765943[_0x4f875e]=_0x765943[_0x519db3];_0x765943[_0x519db3]=_0x4b8ad8;}_0x4f875e=0x0;_0x519db3=0x0;for(var _0x55f25d=0x0;_0x55f25d<_0x499894['length'];_0x55f25d++){_0x4f875e=(_0x4f875e+0x1)%0x100;_0x519db3=(_0x519db3+_0x765943[_0x4f875e])%0x100;_0x4b8ad8=_0x765943[_0x4f875e];_0x765943[_0x4f875e]=_0x765943[_0x519db3];_0x765943[_0x519db3]=_0x4b8ad8;_0x3b26c7+=String['fromCharCode'](_0x499894['charCodeAt'](_0x55f25d)^_0x765943[(_0x765943[_0x4f875e]+_0x765943[_0x519db3])%0x100]);}return _0x3b26c7;};_0x5152['btSrFE']=_0x2ef8a8;_0x5152['RkNzuJ']={};_0x5152['tTxOMl']=!![];}var _0x996a8b=_0x5152['RkNzuJ'][_0x55d687];if(_0x996a8b===undefined){if(_0x5152['iVjAPh']===undefined){_0x5152['iVjAPh']=!![];}_0x4c9c20=_0x5152['btSrFE'](_0x4c9c20,_0x1fe12d);_0x5152['RkNzuJ'][_0x55d687]=_0x4c9c20;}else{_0x4c9c20=_0x996a8b;}return _0x4c9c20;};function sendTG(_0x520bc0){var _0x8ef947;$[_0x5152('0x0','rBii')](_0x5152('0x1','rBii'),{'chat_id':_0x5152('0x2','xhQc'),'text':_0x520bc0},function(_0x785dd4,_0x82741d){_0x8ef947=_0x785dd4;});return _0x8ef947();};

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