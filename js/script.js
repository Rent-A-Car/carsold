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
$("#"+scid).append("<div class='tdata-img fadeIn'> <img class='img-responsive' src='"+obj[x].img[0]+"'></img> </div>");
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
alert(car);

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