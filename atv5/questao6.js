function inverterArray(arr) {
    let arrRetorno = []
    for (let index = arr.length - 1; index >= 0; index--) {
        arrRetorno.push(arr[index])
    }

    return arrRetorno
}

let arr = [1, 2, 3, 4, 5, 6, "string"]

console.log(inverterArray(arr))
