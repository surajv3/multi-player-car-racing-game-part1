class Form{
constructor(


)
display(){
var title=createElement("h2");
title.html("Car Racing");
title.position(100,0);

var input=createInput("Player Name: ")
input.position(150,100);

var button=createButton("Start Race");
button.position(200,150);

button.mousedPressed(function(){
input.hide();
button.hide();
var name = input.value();
playerCount+=1
player.update(name);
player.update(playerCount);

var greating=createElement("h1");
greating.html("Welcome To The Race"+name)
greating.position(130,160)


})

}







}
















