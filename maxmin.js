// Sa se calculeze maximul si minimul dintre trei numere. Rezultatele vor fi salvate in variabilele max, respectiv min

const a = 13;
const b = 9;
const c = 32;

let max, min;

// maxim

if (a >= b && a >=c) {
    
    max = a;
} else if( b >= a && b >=c) { 
    
    max = b;
}
else {
    max = c;
}
console.log("Maximul este: ", max);

// minim

if (a <= b && a <=c) {
    
    min = a;
} else if( b <= a && b <=c) { 
    
    min = b;
}
else {
    min = c;
}
console.log("Minimul este: ", min);