$(document).ready(function()
{
alert("1");
addCarsFromJson();
var carsc = $('.tdata').length;
    $("#cars").change(function()
    {
    alert(this.value);
    
    });

});

function addCarsFromJson(){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://cars.arendacg.ml/data.json', false);
xhr.send();


if (xhr.status != 200) {
 
  alert( xhr.status + ': ' + xhr.statusText ); 
} else {
  // вывести результат
  var carsjson =xhr.responseText; 
  alert(carsjson);
}




};