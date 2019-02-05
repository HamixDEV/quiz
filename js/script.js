/* global $ */
var totalscore = 0;
console.log(totalscore);
var resultange;

$("#red").click(function(){
    totalscore=totalscore+1.10;
    console.log(totalscore);
});
$("#orange").click(function(){
    totalscore=totalscore+1.20;
    console.log(totalscore);
});
$("#yellow").click(function(){
    totalscore=totalscore+1.30;
    console.log(totalscore);
});
$("#green").click(function(){
    totalscore=totalscore+1.40;
    console.log(totalscore);
});
$("#blue").click(function(){
    totalscore=totalscore+1.50;
    console.log(totalscore);
});
$("#indigo").click(function(){
    totalscore=totalscore+1.60;
    console.log(totalscore);
});
$("#violet").click(function(){
    totalscore=totalscore+1.70;
    console.log(totalscore);
});

$("#result").click(function(){
    if (totalscore<=4){
$(".wtpb").html('<img src="https://www.uhaul.com/MovingSupplies/Image/GetMedia/?id=12688&media=8157"/>');
  resultange = "Good day"}
    else if(totalscore>4 && totalscore<6){
$(".wtpb").html('<img src="https://5.imimg.com/data5/NQ/CK/MY-30031960/trolley-wooden-box-500x500.jpg"/>')
    resultange = "G'day mate"}
    else if(totalscore>6 && totalscore<8){
$(".wtpb").html('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsNJPpImOirC4gUhKRXmDB5g-D0S1OGpyM9GRwOSvyQpy5PWxZA"/>')
    resultange = "Good no day"}
    else if(totalscore>8){
$(".wtpb").html('<img src="https://www.ikea.com/ie/en/images/products/storstabbe-box-with-lid-blue-white__0606125_pe682037_s4.jpg"/>')
    resultange = "Maximum Boxage"}
    console.log(resultange);
});

$(".colours").click(function(){
  $(".colours").hide();
});
$(".refresh").click(function(){
  $(".refresh").hide();
});
$(".animal").click(function(){
  $(".animal").hide();
});
$("#fruits").click(function(){
    totalscore=totalscore+0.5;
    console.log(totalscore);
});
$("#yogurt").click(function(){
    totalscore=totalscore+1.0;
    console.log(totalscore);
});
$("#cheesesticks").click(function(){
    totalscore=totalscore+0.5;
    console.log(totalscore);
});
$("#popcorn").click(function(){
    totalscore=totalscore+3;
    console.log(totalscore);
});
$("#fox").click(function(){
    totalscore=totalscore+1.10;
    console.log(totalscore);
});
$("#deer").click(function(){
    totalscore=totalscore+1.5;
    console.log(totalscore);
});
$("#lion").click(function(){
    totalscore=totalscore+2.5;
    console.log(totalscore);
});
$("#duck").click(function(){
    totalscore=totalscore+3;
    console.log(totalscore);
});


 