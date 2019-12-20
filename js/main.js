$.fn.hasAttr = function(name) { return this.attr(name) !== undefined; };
function getbank(){
var navl = (navigator.systemLanguage || window.navigator.language);
navl1 = navl.split("-")[0];
navl2 = navl.split("-")[1];
if(navl2=="RU"){return("cbr");};
if(navl1=="uk"){return("nbu");};
return("eucb"); 
}

function langFilter(str){
  var navl = (navigator.systemLanguage || window.navigator.language);
  navl = navl.split("-")[0];
  var lang = "en";
  if (navl == "ru" || navl == "uk"||navl == "be"){
    lang="ru";
      if (document.body.clientWidth > 600){
    $(".reserve-button").css(  "font-size", "17.5px");
    }
  }
  var obj = JSON.parse(LangObject);
  var k = Object.keys(obj);
  for (a in k){
    var b = obj[k[a]][lang];
    str = str.replace("{"+k[a]+"}",b);
  }
  return str;
}
function Translate(){
 $(".translate").each(function (){
  var t = $(this);
  if (t.hasAttr("patern")){
   var p = t.attr("patern");
   t.text(langFilter(p));
  }else{
   t.text(langFilter(t.text()));
  }
  if (t.hasAttr("placeholder")){
   t.attr("placeholder",langFilter(t.attr("placeholder")));
  }
 });
}

function setCarsTableM()
{

var obj = JSON.parse(jsonCarData);
var b = obj.length;
var urlParams = new URLSearchParams(window.location.search);
var a =parseInt(urlParams.get("carID"), 10);
var carID = ((Math.sqrt(a-b)-b)-10);
var x = 0;

for (var i=0; i<b; i++){
  if (urlParams.has("carID")){
   if(carID <= b){
    if (carID ==i){
     $("#Dcars").append("<option selected value='"+x.toString()+"'>"+obj[x].details.name+"</option>");
    }
    else{
     $("#Dcars").append("<option value='"+x.toString()+"'>"+obj[x].details.name+"</option>");
    }
   }
  }else {
   
       if (x==0){
     $("#Dcars").append("<option selected value='"+x.toString()+"'>"+obj[x].details.name+"</option>");
    }
    else{
     $("#Dcars").append("<option value='"+x.toString()+"'>"+obj[x].details.name+"</option>");
    }
  }
  x=x+1;
 }

x=0;    

for (var i = 0; i < b; i++){
var scid = "t-"+ x.toString();
$("#scars").append("<div class='tdata' id='"+scid+"'></div>");
// показ при першому записі
    if (urlParams.has("carID")){
if (x == carID){
$("#"+scid).show();
}else{
$("#"+scid).hide();
};
    }else{
      if (x == 0){
$("#"+scid).show();
}else{
$("#"+scid).hide();
};
      
    }
//
// цикл за фото
var imgt = "";
for (var ii = 0; ii < obj[x].img[0]; ii++){
    var patern = obj[x].img[1];
if (ii==0){
 

if (x==carID){
console.log(carID);
imgt= imgt + '<div  class="item active"><img class="img-responsive" src="'+patern+ii+'.'+obj[x].img[2]+'" alt="'+obj[x].details.name+'"></div>';
}else{
if (x==0){
imgt= imgt + '<div  class="item active"><img class="img-responsive" src="'+patern+ii+'.'+obj[x].img[2]+'" alt="'+obj[x].details.name+'"></div>';
}else{
imgt= imgt + '<div class="item ntactive"><img class="img-responsive" data-src="'+patern+ii+'.'+obj[x].img[2]+'" alt="'+obj[x].details.name+'"></div>';
}
}
        
   
      
 }else {
imgt= imgt + '<div class="item"><img class="img-responsive" data-src="'+patern+ii+'.'+obj[x].img[2]+'" alt="'+obj[x].details.name+'"></div>';
    }
};

$("#"+scid).append('<div class="tdata-img fadeIn"> <div id="carousel'+x+'" class="carousel slide" data-ride="carousel" ><div class="carousel-inner">'+imgt+'</div><a class="left carousel-control" href="#carousel'+x+'" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Предыдущий</span></a><a class="right carousel-control" href="#carousel'+x+'" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Следующий</span></a></div>');
//
$("#"+scid).append(" <div class='tdata-price'><span class='info'>"+langFilter(obj[x].details.rpref)+"</span>"+obj[x].details.price+"<span class='info'>"+langFilter(obj[x].details.rtype)+"</span></div>");
$("#"+scid).append("<table id='"+scid+"t' class='table tdata-features '></table>");
  y = 0;
  for (var k in obj[x].details)
  {
    if (y > 3)
    {
    $("#"+scid+"t").append("<tr><td>"+langFilter(k)+"</td><td>"+langFilter(obj[x].details[k])+"</td></tr>");
      };
    y = y+ 1
  };
$("#"+scid).append("<a href='#' onclick='reserveFunction(\""+x+"\");' class='reserve-button'><span class='glyphicon glyphicon-calendar'></span>"+langFilter("{reserve_button}")+"</a>");


x = x+1;
  };


//  $("#scars").append(keys);
  $('.carousel').on('slid.bs.carousel', function () {
  var cid = $(this).attr("id");
  var img= $("div#"+cid+" > div.carousel-inner > div.active > img.img-responsive");
  if (img.hasAttr("data-src")){
    img.attr("src",img.attr("data-src"));
    img.removeAttr("data-src");
    
  }
 
});
$("#Dcars").change(function ()
  {
    changeTC(this.value);

  });
  
};

function reserveFunction(car){
car=parseInt(car,10);
var a = 10+car;
var b = $(".tdata").length;
b = parseInt(b,10);
var id = ((a+b)**2)+b;

window.location.assign(window.location.origin+"/reserve?carID="+id.toString());

};


function changeTC(value)
{
  var carsc = $('.tdata').length;
  var scid = "#t-"+value;
  $(".tdata").css("display", "none");
  $(scid).css("display", "block");
  var dv= $("div#carousel"+value+" > div.carousel-inner > div.ntactive");
  dv.addClass("active");
  dv.removeClass("ntactive");
  var img= $("div#carousel"+value+" > div.carousel-inner > div.active > img.img-responsive");
  if (img.hasAttr("data-src")){
    img.attr("src",img.attr("data-src"));
    img.removeAttr("data-src");
  }
};

function offpreloader(secs){

  if (secs >= 1) { 
    var width = document.body.clientWidth;
      if (width > 600){
    $("body").css('background', 'url("img/background.jpg")')
    .css('background-repeat','no-repeat')
    .css('background-size','100% 100%');
    }else{
    $("body").css('background','white')
    }
    $("#prel").hide();
    $("#cont").show(); 
   
  } else { setTimeout(function(){offpreloader(secs+1);},500);  }
};

function setFirstData(){
  var width = document.body.clientWidth;
  if (width < 600){
  $("#cont").html('<header> <div class="hcontainer container"> <h1 class="translate" patern="{h1title}">Аренда авто Черногория</h1> <select class="form-control" id="Dcars"></select> </div> </header><section id="scars" class="container"></section>');
   setCarsTableM();
  }else{
    $("#cont").html('<header> <div class="container"> <div class="logo" > <h1 class="translate" patern="{h1title}">Аренда авто Черногория</h1> </div> <ul class="hedinfo"> <li><i class="fas fa-phone-square-alt"></i>mob: <a href="tel:+38268555972" >+38268555972</a> <a class="cnet fab fa-viber" href="viber://chat/?number=38267525901"></a> <a class="cnet fab fa-facebook" href="https://www.facebook.com/montenegroarenda/"></a> <a class="cnet fab fa-whatsapp" href="whatsapp://send/?phone=38268555972"></a> </li> <li><i class="fas fa-at"></i>e-mail: <a href="mailto:arendamontenegro.car@gmail.com" >arendamontenegro.car@gmail.com</a> </li> </ul> </div> </header> <div class="wrapPage" > <div class="infotab"> <a class="YanW"  title="Yandex Weather 10days"  href="https://weather.yandex.com/13455" > <img alt="Yandex Weather 10days"  id="weathIMG" src="data:image/jpeg;base64,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"> <canvas style="display:none"  height="156" width="120" id="weathCAN" ></canvas> </a> <div class="kurss" > <div id="gcw_mainFNjWbqXPR" class="gcw_mainFNjWbqXPR"></div> <script> function reloadFNjWbqXPR(){ var sc = document.getElementById("scFNjWbqXPR");if (sc) sc.parentNode.removeChild(sc);sc = document.createElement("script");sc.type = "text/javascript";sc.charset = "UTF-8";sc.async = true;sc.id="scFNjWbqXPR";sc.src = "https://freecurrencyrates.com//widget-vertical?iso=EUR-RUB-UAH&df=2&p=FNjWbqXPR&v=fi&source="+getbank()+"&width=135&width_title=0&firstrowvalue=1&thm=aaaaaa,C9C9C9,BBBBBB,dddddd,444444,cccccc,f8f8f8,3383BB,000000&title="+langFilter("{kurss}")+"&tzo=-60";var div = document.getElementById("gcw_mainFNjWbqXPR");div.parentNode.insertBefore(sc, div);} reloadFNjWbqXPR(); </script> <!-- put custom styles here: .gcw_mainFNjWbqXPR{}, .gcw_headerFNjWbqXPR{}, .gcw_ratesFNjWbqXPR{}, .gcw_sourceFNjWbqXPR{} --> </div> </div> <section class="main" > </section> </div>');
    weatherLL();
    setCarTable();
    tableanim();
  }
}
function tableanim(){
$(".Citem").each(function(index,value){
var itm = $(this);

itm.hover(function(){
var t=$("#it"+itm.attr("id"));
t.show();
$("#"+itm.attr("id")+" .reserve-button").show();
},function(){
var t=$("#it"+itm.attr("id"));
t.hide();
})
});

}




function setCarTable(){
var obj = JSON.parse(jsonCarData);
var b = obj.length;

for (var i=0; i<b; i++){
var ins = "#"+i.toString();
$(".main").append('<div class="Citem" id="'+i.toString()+'"></div>');
$(ins).append('<span class="name" >'+obj[i].details.name+'</span>');
var imgt = "";
for (var ii = 0; ii < obj[i].img[0]; ii++){
    var patern = obj[i].img[1];
if (ii==0){
imgt= imgt + '<div  class="item active"><img class="img-responsive" src="'+patern+ii+'.'+obj[i].img[2]+'" alt="'+obj[i].details.name+'"></div>';
 }else {
imgt= imgt + '<div class="item"><img class="img-responsive" data-src="'+patern+ii+'.'+obj[i].img[2]+'" alt="'+obj[i].details.name+'"></div>';
    }
}
$(ins).append('<div class="itmimg"> <div id="carousel'+i+'" class="carousel slide" data-ride="carousel" ><div class="carousel-inner">'+imgt+'</div><a class="left carousel-control" href="#carousel'+i+'" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Предыдущий</span></a><a class="right carousel-control" href="#carousel'+i+'" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Следующий</span></a></div>');
$(ins).append(" <div class='tdata-price'><span class='info'>"+langFilter(obj[i].details.rpref)+"</span>"+obj[i].details.price+"<span class='info'>"+langFilter(obj[i].details.rtype)+"</span></div>");
$(ins).append("<table id='it"+i.toString()+"' style='display:none' class='table tdata-features '></table>");
  y = 0;
  for (var k in obj[i].details)
  {
    if (y > 3)
    {
    $("#it"+i.toString()).append("<tr><td>"+langFilter(k)+"</td><td>"+langFilter(obj[i].details[k])+"</td></tr>");
      };
    y = y+ 1
  };
$(ins).append("<a href='#' style='display:none' onclick='reserveFunction(\""+i+"\");' class='reserve-button'><span class='glyphicon glyphicon-calendar'></span>"+langFilter("{reserve_button}")+"</a>");




}



$('.carousel').on('slid.bs.carousel', function () {
var cid = $(this).attr("id");
var img= $("div#"+cid+" > div.carousel-inner > div.active > img.img-responsive");
if (img.hasAttr("data-src")){
  img.attr("src",img.attr("data-src"));
  img.removeAttr("data-src");
  
}
 
});
}













function weatherLL(){
var w = document.getElementById("weathCAN");
var ctx = w.getContext('2d');
var img = new Image();
img.crossOrigin= "anonimous";
img.onload = function(){
ctx.drawImage(img, 0, 0, 120, 120, 0, 0, 120, 156);
console.log(0);
$("#weathIMG").removeAttr("src");
$("#weathIMG").attr("src",w.toDataURL('image/jpeg'));
//alert(w.toDataURL("image/jpeg"));
}
img.src = 'https://shareimg.gq/weather';


}







$(document).ready(function()
{
  
  setFirstData();
  Translate();
  /*
  var conn = new WebSocket('ws://localhost:8088');
  conn.onmessage = function(e){ alert(e.data); };
  conn.onopen = () => conn.send('hello');
  */
offpreloader(0);
  
}); 