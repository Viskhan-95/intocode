let array = ["Висхан", "Ахьмад", "Амирхан", "Мохьмад", "Халид", "Асхаб", "Муса", "Дени", "Зелим", "Альви"];
let iter = 0;
let accumulator = [];

for (let i = 0; i < array.length; i++) {
    if(array[i][0].toUpperCase() === "А") {
        accumulator.push(array[i]);
    }
}

while(iter < array.length) {
    if(array[iter][0].toUpperCase() === "А") {
        accumulator.push(array[iter]);
    }
    iter++;
}