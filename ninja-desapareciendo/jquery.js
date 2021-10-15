//SIEMPRE PRIMERO LLAMAR $(document).ready(function(){}
$(document).ready(function () {
  console.log("ready!");
  $("#hide1").on("click", function () {
    $("img#hide1").css("display", "none");
  });
  $("#hide2").on("click", function () {
    $("img#hide2").hide("slow");
  });
  $("#hide3").on("click", function () {
    $("img#hide3").hide("slow");
  });
  $("#hide4").on("click", function () {
    $("img#hide4").hide("slow");
  });
  $("#hide5").on("click", function () {
    $("img#hide5").hide("slow");
  });
  $("#hide6").on("click", function () {
    $("img#hide6").hide("slow");
  });
  $("#hide7").on("click", function () {
    $("img#hide7").hide("slow");
  });
  $("#hide8").on("click", function () {
    $("img#hide8").hide("slow");
  });
  
  $("button").on("click", function () {
    $("img").show("slow");
  });

});
