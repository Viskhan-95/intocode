let array = ["java", "javascript", "C", "C++", "C#", "Phyton", "Pascal", "Basic", "PHP", "Goland"];
let iter = 0;
let accumulator = [];

for (let i = 0; i < array.length; i++) {
    if(array[i].length  > 3) {
        accumulator.push(array[i]);
    }
}

while(iter < array.length) {
    if(array[iter].length > 3) {
        accumulator.push(array[iter]);
    }
    iter++;
}