let array = [1, 10, 20, -5, 8, 7, -9, 6, -2, 3];
let i = 0;
let sum = 0;

while(i < array.length) {
    if(array[i] > 0) {
        sum += array[i];
    }
    i++;
}
