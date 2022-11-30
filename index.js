var numfield1 = document.getElementById('numfield1');
var numfield2 = document.getElementById('numfield2');
var resultfield = document.getElementById('resultfield')


function ageofpeople(){
    if(!numfield1.value || !numfield2.value ){
        alert('please enter a valid value');
    }else{
        var x = numfield1.value;
        var y = numfield2.value;
        var results = x-y;
        var ageindays = results * 365;
        // alert(ageindays);

        resultfield.innerText += 'The result is: ' + ageindays;
        event.preventDefault();

    }
} 



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }



  // console.log("this a script entry point");
  // document.body.onclick = () => {
  // console.log("onclick");
  // };
  // setTimeout(() => {
  // console.log("setTimeout callback log 1");
  // console.log("setTimeout callback log 2");
  // }, 100);


//CLASSES

// class car{
//   constructor(name, age){
//     this.name = 'Shola';
//     this.age = 24;
//     console.log(this);
//   }
// }

// class MyClass {
//   static myStaticMethod() {
//   return 'Hello';
//   }
//   static get myStaticProperty() {
//   return 'Goodbye';
//   }
//   }

// console.log(MyClass.myStaticMethod()); // logs: "Hello"
// console.log(MyClass.myStaticProperty); // logs: "Goodbye"



// element.addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Alert me when i click");
// }

// id = setInterval(frame, 5);

// function myMove() {
//   let id = null;
//   const elem = document.getElementById("animate");
//   let pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML =
  "My car is " + myCar.age() + " years old.";


// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
// console.log(fruits);

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits);