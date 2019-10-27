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
$("#"+scid).append("<a href='#' onclick='reserveFunction(\""+x+"\");' class='reserve-button'><span class='glyphicon glyphicon-calendar'></span> ЗАРЕЗЕРВИРОВАТЬ СЕЙЧАС</a>");


x = x+1;
}


  

//  $("#scars").append(keys);
};
function reserveFunction(car){
car=parseInt(car,10);
var a = 10+car;
var b = $(".tdata").length;
b=parseInt(b,10);
var id = ((a+b)**2)+b;
//alert(id);
window.location.assign("https://cars.arendacg.ml/reserve?carID="+id.toString());

};


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