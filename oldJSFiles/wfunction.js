// var kitab = function(){
//     document.write("Salam");
// }
// kitab();

// function kitab() {
//     var a = "Salam";
//     return a;
// }
// var netice = kitab();
// document.write(netice);

// function kitab() {
//     document.write("Metn1"+"<br>");
    
//     document.write("Metn2"+"<br>");
//     document.write("Metn3"+"<br>");
//     document.write("Metn4"+"<br>");
//     return;


// }
// kitab();


// function herf(text) {
//     const metn1 = text.toUpperCase(); 
//     document.write(metn1);
// }
// herf("yazi");   
// (function kitab(c) {
    
//     document.write(c+"<br>");
// })(5);
// var a = "metn";

// if (a=="metn") {

//     kitab(10);
// }else if (a=="reqem") {
//     (function kitab(c) {
    
//         document.write(c);
//     })(15);
// } else {
    
// }





// kitab();





// var kitab = function() {
//     document.write("Salam");
// }();




// funk();

// var a = "a";

// if (a=="a") {
//     function test() {
//         document.write("Birinci");
//     } 
// }else if(a=="a"){
//     function test() {
//         document.write("Ikinci");
//     }
// }else{
//     function test() {
//         document.write("Hec biri");
//     }
// }


// test();

// (function(a) {
//     document.write(a+"<br>");

// })(5);

// var misal = function(b) {
//     document.write(b);
// }(10);

// function defter(parametrbir, parametriki = "Necesen?") {
//     document.write(parametrbir + "<br>" + parametriki);
// }
// defter("Salam", 10);


// function mezenne(pulVahidi, qiymet) {
//     if (pulVahidi == "manat") {
//         var faiz = 1;
//     }else if (pulVahidi == "dollar") {
//         var faiz = 2; 
//     }else if (pulVahidi == "euro"){
//         var faiz = 3;
//     }
//    return hesabla(faiz, qiymet);
// }
// function hesabla(gelenFaiz, gelenPul) {
//             var hesabEt = gelenFaiz * gelenPul;
//             document.write(hesabEt);
// }

// mezenne("dollar", 200);


// function numune() {
//         // document.write(arguments); 
//         for (var index = 0; index < arguments.length; index++) {
//             document.write(arguments[index] + "<br>")
            
//         }   
// }

// numune("Resad","Aliyev","Salam");

// function esas() {   //1
//    for (let index = 0; index < esas.caller.arguments.length; index++) {
//        document.write(other1.arguments[index]);
       
//        }
       
//     }
// function other(ad, soyad) { //2
//     // esas();
// }
// function other1(ad, soyad) {
//     esas();
// }

// other("Resad", "Aliyev");
// other1("Resad1", "Aliyev1");

var insan = function() { //1
    var adSoyad = "Resad Aliyev"; //2
    return{
        adApar:function() {
            return adSoyad;
        },
        adGetir:function(yeniAd) {
            adSoyad = yeniAd;
        }
    }
}();


insan.adGetir("Nicat Aliyev");
var netice = insan.adApar();
document.write(netice);
