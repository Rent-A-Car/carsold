function sendTG_N(data,status){
 if(status=="success"){
  
  //
  
  Swal.fire({
title: 'Спасибо',
type: 'success',
html:
'С Вами свяжутся в ближайшее время<br>' +
'конт.тел <a href="tel:+38268555972">+38268555972</a>',
   footer: '<a href="viber://chat/?number=38268555972"><img class="cnet" src="img/viber.svg" alt="Viber"></a><a href="https://www.facebook.com/montenegroarenda/"><img class="cnet" src="img/facebook.svg" alt="Facebook"></a><a href="whatsapp://send/?phone=38268555972"><img src="img/whatsapp.svg" alt="Whatsapp" class="cnet"></a>'
})
  
  //
  
  
//alert("Спасибо\nС вами свяжутся в ближайшее время\nконт.тел +38268555972");
  window.location.href("https://"+window.location.hostname);
 }else{
  alert("error "+status+"\nПожалуйста свяжитесь с администрацией +38268555972(Viber,WhatsApp)");
 }
 
};

function sendTG(text){
  $.get("https://gornostay25.pythonanywhere.com/group",{text: text} ,function(data, status){
    Swal.fire({
title: 'Спасибо',
type: 'success',
html:
'С Вами свяжутся в ближайшее время<br>' +
'конт.тел <a href="tel:+38268555972">+38268555972</a>',
   footer: '<a href="viber://chat/?number=38268555972"><img class="cnet" src="img/viber.svg" alt="Viber"></a><a href="https://www.facebook.com/montenegroarenda/"><img class="cnet" src="img/facebook.svg" alt="Facebook"></a><a href="whatsapp://send/?phone=38268555972"><img src="img/whatsapp.svg" alt="Whatsapp" class="cnet"></a>'
})
  //sendTG_N(data,status);
  });
}
/*
function sendTG(text){
  $.get("https://api.telegram.org/bot818541918:AAGVXFGPu-iU7DCzTZJJ7I9yDmCSQKESGFQ/sendMessage",{chat_id: "-257808146",text: text,parse_mode:"Markdown"} ,function(data, status){
    sendTG_N(data,status);
  });
}
*/
function datap(){
$.datepicker.regional.ru = {	closeText: "Закрыть",	prevText: "&#x3C;Пред",	nextText: "След&#x3E;",	currentText: "Сегодня",	monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",	"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],	monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",	"Июл","Авг","Сен","Окт","Ноя","Дек" ],	dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],	dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],	dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],	weekHeader: "Нед",	dateFormat: "dd.mm.yy",firstDay: 1,isRTL: false,showMonthAfterYear: false,yearSuffix: "" };
$( "#datepickerF" ).mask('00/00/0000');
 $( "#datepickerF" ).datepicker({minDate: "+1d",dateFormat: "dd/mm/yy"},$.datepicker.regional["ru"]);
$( "#datepickerT" ).mask('00/00/0000');
  $( "#datepickerT" ).datepicker({minDate: "+3d",dateFormat: "dd/mm/yy"},$.datepicker.regional["ru"]);
};








$(document).ready(function ()
{
  var obj=JSON.parse(jsonCarData);

  var b = obj.length;
  var urlParams = new URLSearchParams(window.location.search);
  var x = 0;
for (var i = 0; i < obj.length; i++){
if(urlParams.has("carID")){
  var a = parseInt(urlParams.get("carID"), 10);
  b=parseInt(b,10);
  var carID = ((Math.sqrt(a-b)-b)-10);
  if(carID <= b){
  
  if (i==carID){
$("#Dcars").append("<option selected value='"+x.toString()+"'>"+obj[x].details.name+"</option>");
}else{
$("#Dcars").append("<option value='"+x.toString()+"'>"+obj[x].details.name+"</option>");
};
  }else{
  if (i==0){
$("#Dcars").append("<option selected value='"+x.toString()+"'>"+obj[x].details.name+"</option>");
}else{
$("#Dcars").append("<option value='"+x.toString()+"'>"+obj[x].details.name+"</option>");
};
  
  }
  }else{if (i==0){
$("#Dcars").append("<option selected value='"+x.toString()+"'>"+obj[x].details.name+"</option>");
}else{
$("#Dcars").append("<option value='"+x.toString()+"'>"+obj[x].details.name+"</option>");
};
  };
x= x+1;
};
  
  
 datap();

 formAnk(obj);

 
  
  
});


function formAnk(obj){
    $("#FormAnketa").on( "submit", function (event){
    event.preventDefault();
    var urldata= $("#FormAnketa").serialize();
    var data = new URLSearchParams(urldata);
    var str = ".........Нове замовлення.........\n";
    var car = decodeURI(data.get("car"));
    var datef = decodeURI(data.get("datef"));
    var datet = decodeURI(data.get("datet"));
    var sity = decodeURI(data.get("sity"));
    var fio = decodeURI(data.get("fio"));
    var msg = decodeURI(data.get("msg"));
    var contact = decodeURI(data.get("contact"));
   contact="`"+contact+"`";
  if(msg == ""){
   var dodtk = "";
  }else{
   
   var dodtk = "\nДодаткове повідомлення:\n\n"+msg;
  }
    str = str+"Від "+datef+" до "+datet+"\nв "+sity+"\nАвто: "+obj[parseInt(car,10)].details.name+"\nП.І.Б: "+fio+"\n"+contact+dodtk;
    sendTG(str);
   // sendTG_N("","success");
});
  
};
function TlOrEm(id){
  if (id==0){
    $("#TelLbl").hide();
    $("#TelA").show();
    $("#PostLbl").show();
    $("#PostA").hide();
    $("#contact").val("");
    $("#contact").attr("type","email").attr("placeholder","aleksandar@gmail.com");
  
    
  }else if(id==1){
    $("#PostLbl").hide();
    $("#PostA").show();
    $("#TelLbl").show();
    $("#TelA").hide();
Swal.fire({
type: 'info',
title: 'Обязательное наличие Viber или Whatsapp'
})
    $("#contact").val("");
    $("#contact").attr("type","tel").attr("placeholder","+123 456-7890");
    
  }};