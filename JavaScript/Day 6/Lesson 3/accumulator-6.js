let array = [1, 10, 20, 5, 8, 7, 9, 6, 2, 3];
let iter = 0;
let accumulatorEven = [];

for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
        accumulatorEven.push(array[i]);
    }
}

while(iter < array.length) {
    if(array[iter] % 2 !== 0) {
        accumulatorEven.push(array[iter]);
    }
    iter++;
}

for (let i = 0; i < accumulatorEven.length; i++)
{
    console.log(accumulatorEven[i]);
}