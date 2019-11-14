function langFilter(str)
{
  var navl = (navigator.systemLanguage || window.navigator.language);
  navl = navl.split("-")[0];
  var lang = "en";
  if (navl == "ru" || navl == "uk"||navl == "be"){
    lang="ru";
  }

if(str=="{msg_success}"){
  if (lang=="ru"){
  str ='С Вами свяжутся в ближайшее время<br>' +
'конт.тел: <a href="tel:+38268555972">+38268555972</a>';
  
 }else {
      if (lang=="en"){
      str="With you will contact the near future<br>Contact number: <a href=\"tel:+38268555972\">+38268555972</a>";
      }
    }
    return str;
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
 
  $("#carl").empty(); 
  $("#carl").text(langFilter("{car}"));
 $("#datefl").empty(); 
  $("#datefl").text(langFilter("{datefrom}"));
$("#datetl").empty(); 
  $("#datetl").text(langFilter("{dateto}"));
$("#sityl").empty(); 
  $("#sityl").text(langFilter("{sity}"));
$("#fiol").empty(); 
  $("#fiol").text(langFilter("{fio}"));
$("#PostA").empty(); 
  $("#PostA").text(langFilter("{email}"));
$("#PostLbl").empty(); 
  $("#PostLbl").text(langFilter("{email}"));
$("#TelLbl").empty(); 
  $("#TelLbl").text(langFilter("{tel}"));
$("#TelA").empty(); 
  $("#TelA").text(langFilter("{tel}"));
 $("#fio").attr("placeholder", langFilter("{fio_text}"));
 $("#contact").attr("placeholder", langFilter("{contact_text}"));
 $("#sity_another").text(langFilter("{sity_another}"));
 $("#msgl").empty(); 
  $("#msgl").text(langFilter("{msg}"));
$("#msg").empty(); 
 $("#msg").attr("placeholder", langFilter("{msg_text}"));
$("#subbtn").empty(); 
  $("#subbtn").val(langFilter("{confirm_btn}"));
  
}


function offpreloader(secs){
  if (secs >= 1) { 
    $("body").css('background-color', '#f0f0f0');
    $("#prel").fadeOut(30);
    $("#cont").fadeIn(200); 
   
  } else { setTimeout(function(){offpreloader(secs+1);},1000);  }
}

function sendTG_N(data,status){
 if(status=="success"){
  
  //
  
  Swal.fire({
title: langFilter('{thank}'),
type: 'success',
html: langFilter("{msg_success}"),
   footer: '<a href="viber://chat/?number=38268555972"><img class="cnet" src="img/viber.svg" alt="Viber"></a><a href="https://www.facebook.com/montenegroarenda/"><img class="cnet" src="img/facebook.svg" alt="Facebook"></a><a href="whatsapp://send/?phone=38268555972"><img src="img/whatsapp.svg" alt="Whatsapp" class="cnet"></a>'
})
  
  
  //
  
  
//alert("Спасибо\nС вами свяжутся в ближайшее время\nконт.тел +38268555972");
 // window.location.href("https://"+window.location.hostname);
 }else{
  alert("error "+status+"\nПожалуйста свяжитесь с администрацией +38268555972(Viber,WhatsApp)");
 }
 
};
/*
function sendTG(text){
  $.get("https://gornostay25.pythonanywhere.com/",{text: text} ,function(data, status){
    sendTG_N(data,status);
  });
}
*/
function sendTG(text){
 var idd = "415047826";
 var id= "-257808146";
 
  $.get("https://api.telegram.org/bot818541918:AAGVXFGPu-iU7DCzTZJJ7I9yDmCSQKESGFQ/sendMessage",{chat_id: id,text: text,parse_mode:"Markdown"} ,function(data, status){
    sendTG_N(data,status);
  });
}

function datap(){
$.datepicker.regional.ru = {	closeText: "Закрыть",	prevText: "&#x3C;Пред",	nextText: "След&#x3E;",	currentText: "Сегодня",	monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",	"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],	monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",	"Июл","Авг","Сен","Окт","Ноя","Дек" ],	dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],	dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],	dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],	weekHeader: "Нед",	dateFormat: "dd.mm.yy",firstDay: 1,isRTL: false,showMonthAfterYear: false,yearSuffix: "" };
$( "#datepickerF" ).mask('00/00/0000');
 $( "#datepickerF" ).datepicker({minDate: "+1d",dateFormat: "dd/mm/yy"},$.datepicker.regional["ru"]);
$( "#datepickerT" ).mask('00/00/0000');
  $( "#datepickerT" ).datepicker({minDate: "+3d",dateFormat: "dd/mm/yy"},$.datepicker.regional["ru"]);
};



function setSelectData(b,urlParams,obj){
 var x=0;
 var a =parseInt(urlParams.get("carID"), 10);
 var carID = ((Math.sqrt(a-b)-b)-10);
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
}




$(document).ready(function ()
{
 
  var obj=JSON.parse(jsonCarData);

  var b = obj.length;
  var urlParams = new URLSearchParams(window.location.search);
 setSelectData(b,urlParams,obj);

 datap();

 formAnk(obj);
 Translate();
 
  offpreloader(0);
  
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
    str = str+"Від "+datef+" до "+datet+"\nв місті: "+sity+"\nАвто: "+obj[parseInt(car,10)].details.name+"\nП.І.Б: "+fio+"\n"+contact+dodtk;
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
    $("#contact").attr("type","email").attr("placeholder",langFilter("{contact_text}"));
  
    
  }else if(id==1){
    $("#PostLbl").hide();
    $("#PostA").show();
    $("#TelLbl").show();
    $("#TelA").hide();
Swal.fire({
type: 'info',
title: langFilter("{msg_InfoTel}")
})
    $("#contact").val("");
    $("#contact").attr("type","tel").attr("placeholder","+123 456-7890");
    
  }};