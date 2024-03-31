var prompt = require('prompt-sync')();
var array = []

for(i = 0; i < 5; i++) {
    array[i] = Number(prompt())
}

if(array[0] > array[1] && array[0] > array[2] && array[0] > array[3] && array[0] > array[4]) {
    console.log(array[0])
} else if(array[1] > array[0] && array[1] > array[2] && array[1] > array[3] && array[1] > array[4]) {
    console.log(array[1])
} else if(array[2] > array[0] && array[2] > array[1] && array[2] > array[3] && array[2] > array[4]) {
    console.log(array[2])
} else if(array[3] > array[0] && array[3] > array[1] && array[3] > array[2] && array[3] > array[4]) {
    console.log(array[3])
} else if(array[4] > array[0] && array[4] > array[1] && array[4] > array[2] && array[4] > array[3]) {
    console.log(array[4])
}

