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
    $("body").css('background', 'url("img/background.png")')
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
    //$("#cont").prepend('<header><div class="container" > <div class="logo" ><h1 class="translate" patern="{h1title}">Аренда авто Черногория</h1> </div> <ul class="hedinfo" > <li><i class="fas fa-phone-square-alt"></i>mob: <a href="tel:+38268555972" >+38268555972</a><a href="viber://chat/?number=38268555972"><object type="image/svg+xml" class="cnet" data="img/viber.svg" alt="Viber"></object></a><a href="https://www.facebook.com/montenegroarenda/"><object type="image/svg+xml" class="cnet" data="img/facebook.svg" alt="Facebook"></object></a><a href="whatsapp://send/?phone=38268555972"><object type="image/svg+xml" data="img/whatsapp.svg" alt="Whatsapp" class="cnet"></object></a></li> <li><i class="fas fa-at"></i>e-mail: <a href="mailto:arendamontenegro.car@gmail.com" >arendamontenegro.car@gmail.com</a> </li> </ul> </div> </header>');
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
  var conn = new WebSocket('ws://localhost:8088');
  conn.onmessage = function(e){ alert(e.data); };
  conn.onopen = () => conn.send('hello');
  
offpreloader(0);
  
}); 