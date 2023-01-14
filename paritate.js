// Sa se calculeze, folosind instructiunea while, suma primelor n numere pare. 
//EX: Pentru n = 3, avem numerele 2,4,6 iar suma lor este 12

let counter = 1;
let limit = 6;
let sum = 0;
while (counter <= limit) {
 if (counter % 2 == 0){
   sum = sum + counter;
 }
   counter++;
}
console.log("Suma primelor 3 numere pare este egala cu: " +sum)

