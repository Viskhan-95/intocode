let array = [1, 10, 20, -5, 8, 7, -9, 6, -2, 3];
let iter = 0;

for (let i = 0; i < array.length; i++) {
    if(array[i]  > 0) {
        console.log(array[i]);
    }
}

while(iter < array.length) {
    if(array[iter] > 0) {
        console.log(array[iter]);
    }
    iter++;
}