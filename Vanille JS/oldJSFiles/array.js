// var progLang = ["php ","js ","pyhon"];
// var progLang1 = "php js python";
// document.write(progLang +"<br>"); //1
// document.write(progLang[0] ); //2
// document.write(progLang[1] ); //2
// document.write(progLang[2] ); //2
// document.write("<br>"+progLang1); //3



// var progLangW = new Array([1]);
// progLangW["birinci"] = "Bir";
// document.write("<br>"+progLangW["birinci"]);




// ------------------------------------------------------------

// 20/02/2021
// 1
// var misal = new Array("'qirmizi'qelem", "defer", "karandas");
// document.write(misal);

// 2
// var misal = new Array("qelem", "defer", "karandas");
// var levazimat = misal;
// document.write(levazimat);

// 3
// var misal = ['qelem', 'karandas', "defter"]; levazimat = new Array("sengulum", "mengulum", 'sungulum');
// document.write(misal+"<br>");
// document.write(levazimat);

// 4
// var misal;
// misal = new Array('qelem', 'karandas', "defter");
// document.write(misal);

// 5
// var misal = new Array("sengulum", "sungulum", "mengulum");
// document.write(misal[0]+"<br>");
// var letterPush = "bizgulum";
// document.write(letterPush[0]);

// 6
// var misal = new Array();
// misal[0] = "qelem";
// misal[1] = "defter";
// misal[2] = "karandas";
// document.write(misal);

//7
// var misal = new Array();
// misal["levazimat"] = "qelem";
// misal["levazimat1"] = "karandas";
// document.write(misal["levazimat"]);

//8
// var misal = new Array("Defter", "qelem", "Karandas");
// misal[1] = "bayram kurdexanli";
// document.write(misal);

//9
// var qutu = ['puste', 'badam',['nesle',['tv','notebook','phone'],'nasperi',["albali","kivi","uzum","nar"],'poshen','alpengold'], 'findik'];
// document.write(qutu[0]+"<br>");
// document.write(qutu[2][1]+"<br>");
// document.write(qutu[2][1][0]+"<br>");
// document.write(qutu[2][2]+"<br>");
// document.write(qutu[2][3][0]+"<br>");
// document.write(qutu[2][1][0]+qutu[0]+"<br>");
// document.write(qutu[2][3][0]+"<br>");

//10
// var misal = ['qelem', 'karandas', "defter"];
// var misal1 = ['tv','notebook','phone'];
// misal1[1] = misal;
// document.write(misal1);

// var misal = 'qelem';
// var netice = Array.isArray(misal);
// document.write(netice);

// Object
var qutu = {model:"audi",
            il:2020,
            hereket:(function(a) {
                document.write("Sur"+a);
                
            })("Masin")

};
document.write(qutu.hereket());



//Array
var qovluq = ['audi'];