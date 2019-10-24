function setCarsTable(div)
{
  var obj = JSON.parse(jsonCarData);



  var keys = [];
  var x = 0;
  for (var k in obj[0].detiles)
  {
    if (x > 2)
    {
      keys.push(obj[0].detiles[k]);
    }
    x = x + 1
  };

  $("#scars").append(keys);
};

function changeTC(value)
{
  alert(value);


};

$(document).ready(function ()
{
  setCarsTable("");


  var carsc = $('.tdata').length;
  $("#Dcars").change(function ()
  {
    changeTC(this.value);

  });

});