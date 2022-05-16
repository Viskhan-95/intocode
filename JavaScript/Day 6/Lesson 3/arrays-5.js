let array = ["Висхан", "Ахьмад", "Амирхан", "Мохьмад", "Халид", "Асхаб", "Муса", "Дени", "Зелим", "Альви"];
let iter = 0;

for (let i = 0; i < array.length; i++) {
    if(array[i][0].toUpperCase() === "А") {
        console.log(array[i]);
    }
}

while(iter < array.length) {
    if(array[iter][0].toUpperCase() === "А") {
        console.log(array[iter]);
    }
    iter++;
}