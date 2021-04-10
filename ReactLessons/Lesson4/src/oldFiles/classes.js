// ES5
// var infoData = function(){
   
// }

// const myData = new infoData();

// console.log(myData);

// ES6

class infoData{
        constructor(name,year){
                this.addName = name;
                this.addYear = year;
        }

        calculAge(){
            return new Date().getFullYear() - this.addYear;
        }

        sayHi(item){
                return `${item}, My name is ${this.addName} `;
        }
}


class schoolData extends infoData{
            constructor(name,year,subject){
                    super(name,year);
                    this.subjectAdd = subject;
            }

            learn(){
                    return `I learn ${this.subjectAdd}`;
            }
}

const myData = new schoolData("Nicat",1997,"Programming");
console.log(myData.calculAge());
console.log(myData.sayHi("hi"));
console.log(myData.learn());
