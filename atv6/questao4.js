var pa = 80000
var pb = 200000
var tempo = 0

while(pa <= pb) {
    pa = pa  * (1 + 0.03)
    pb = pb  * (1 + 0.015)
    tempo++
}

console.log('Vão ser necessários', tempo, ' anos')