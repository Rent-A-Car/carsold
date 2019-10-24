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
// цикл за фото
$("#"+scid).append("<div class='galery'> <img src='"+obj[x].img[0]+"'></img> </div>");
/////  <div class="vehicle-price">$ 37.40 <span class="info">rent per day</span></div>

$("#"+scid) append(" <div class='vehicle-price'>"+obj[x].details+"<span class='info'>"++"</span></div>");

x = x+1;
}


  var keys = [];
  x = 0;
  for (var k in obj[0].details)
  {
    if (x > 2)
    {
      keys.push(obj[0].details[k]);
    }
    x = x + 1
  };

  //$("#scars").append(keys);
};

function changeTC(value)
{
  alert(value);


};

$(document).ready(function ()
{
  setCarsTable();


  var carsc = $('.tdata').length;
  $("#Dcars").change(function ()
  {
    changeTC(this.value);

  });

});