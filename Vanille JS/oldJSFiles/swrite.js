// if      -> əgər
// elseif  -> deyilsə əgər
// else    ->  deyilsə

// var saat = "22:00";


// if(saat == "00:00"){
//     document.write("Gecədir");
// }else if(saat == "13:00"){
//     document.write("Gün Ortadır");

// }else if(saat == "17:00"){
//     document.write("Axşam üstüdür");

// }else if(saat == "21:00"){
//     document.write("Axşamdır");

// }else{
//     document.write("Vaxt sistemində ifadə bitmişdir");
// }

// var text = true;
// var misal = (b**2)-4*a*c;

// if(misal == 1){
//     document.write("qısa söz");
// }else if(textl <= 15){
//     document.write("uzun söz");
// }else if(textl >= 15){
//     document.write("bu artıq cümlədir");

// }else{
//     document.write("Xəta");
// }





// var sozQısa = "Bu qısa bir sözdür <br>";
// var sozUzun = "Bu uzun bir sözdür <br>";
// var sozCumle = "Bu bir cümlədir <br>";
// var soz = "Bazada bel soz tapilmadi axtaris edin";
// var sozUzunluq = soz.length;

// console.log(sozUzunluq);

// if(sozUzunluq <= 5){
//         document.write(sozQısa);
//         if(soz == "Salam"){
//             document.write("Cavab:Aleykum Salam")

//             if(soz.startsWith("S") == true){
//                 document.write("<br> Bas herfimiz S-dir")
//         }else{
//             document.write("<br> Bas herfimiz S-deyildir")

//         }



//     }else if(soz == "nece"){
//             document.write("Cavab:Yaxşı");
//     }else{
//             document.write("Cavab:Bazada belə söz yoxdur");
//     }






// }else if(sozUzunluq > 5 && sozUzunluq <= 20){
//     document.write(sozUzun);

//             if(soz == "Tesekkur edirem"){
//                 document.write("<ox sag olun");
//             }else if(soz  == "Allah razi olsun"){
//                 document.write("Cumlemizden")
//             }

// }else{
//         document.write(sozCumle);
//         if(soz == "Bazada bel soz tapilmadi axtaris edin"){
//             document.write("not found");
//         }else if(soz  == "Allah razi olsun"){
//             document.write("Cumlemizden")
//         }
// }


// switch
// case
// break
// default

// var metn = "a";
// var metnUzunluq = metn.length;
// console.log(metnUzunluq);

// switch(metnUzunluq){
//     case 0:
//     document.write("Simvol sayi: 0-dir");
//     break;

//     case 1:
//     document.write("Simvol sayi: 1-dir");
//     break;

//     case 2:
//     document.write("Simvol sayi: 2-dir");
    break;

    case 3:
    document.write("Simvol sayi: 3-dir");
    break;

    case 10:
    document.write("Simvol sayi: 10-dur");
    break;
    
}

var metn = true;

switch(metn){
    case true:
    document.write("Bu JS dir");
    break;

    case "Php":
        document.write("Bu PHPdir");
        break;

        default:
        document.write("Bele dil yoxdur");
}

var metn = "Javascript".length;

 metn==10 ? document.write("Duz") : document.write("Sehv") ;
sert   ?       if  -> true     :        else -> false

// try
// catch,
// finally 
// throw 




try{

    var metn = "Salam <br>";
    document.write(metn);
    throw ("Bu bir istisnadir");
    document.write(e);

}
catch(err){
    // document.write("Xeta var <br>");
    document.write(err);
}
finally{
    document.write("<br> xeta olsada olmasa da isleyirem")
}







