function newDice (){
    var randomNumbOne = Math.ceil(Math.random() * 6);
    var randomNumbTwo = Math.ceil(Math.random() * 6);
    // document.getElementsByTagName("p")[0].innerHTML=randomNumbOne;
    if(randomNumbOne==1){
            document.getElementById("firstDice").src = "img/01.png";
    }
    else if(randomNumbOne==2){
        document.getElementById("firstDice").src = "img/02.jpg";
}
else if(randomNumbOne==3){
    document.getElementById("firstDice").src = "img/03.png";
}
else if(randomNumbOne==4){
    document.getElementById("firstDice").src = "img/04.png";
}
else if(randomNumbOne==5){
    document.getElementById("firstDice").src = "img/05.png";
}
else if(randomNumbOne==6){
    document.getElementById("firstDice").src = "img/06.png";
}
if(randomNumbTwo==1){
    document.getElementById("secondDice").src = "img/01.png";
}
else if(randomNumbTwo==2){
document.getElementById("secondDice").src = "img/02.jpg";
}
else if(randomNumbTwo==3){
document.getElementById("secondDice").src = "img/03.png";
}
else if(randomNumbTwo==4){
document.getElementById("secondDice").src = "img/04.png";
}
else if(randomNumbTwo==5){
document.getElementById("secondDice").src = "img/05.png";
}
else if(randomNumbTwo==6){
document.getElementById("secondDice").src = "img/06.png";
}

}


// Daha qisa yazilisi
// function newDice (){
// var randomNumbOne = Math.ceil(Math.random() * 6);
// var randomNumbTwo = Math.ceil(Math.random() * 6);
// document.getElementById("firstDice").src = "img/0"+randomNumbOne+".png";
// document.getElementById("secondDice").src = "img/0"+randomNumbTwo+".png";

// }
