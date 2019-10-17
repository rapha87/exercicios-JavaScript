// ---> ARRAY <---

/*let num= [2, 8, 9, -3, 5, 1, 6]
num.sort()
let pos=num.indexOf(7)
if(pos == -1){
    console.log('O valor nao foi encontrado')
} else{
    console.log(`O valor está na posiçao ${pos}`)
}
for(let pos= 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
/*num.push(7)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)*/ 

/*---modo mais simplificado para array---*/
/*for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

// ---> AULA DE FUNÇAO <---
/*function parimp(n){
    if(n%2 == 0){
        return 'par'
    } else{
        return 'ímpar'
    }
}
let res = parimp(12)
console.log(`Número é ${res}`)
function soma(n1, n2) {
    return n1 + n2
}
let res = soma (31, 13)
console.log(`A soma é ${res}`)
//console.log(soma (16, 31))
// ** jogando uma funçao dentro de uma váriavel
let v = function(x) {
    return x*2
}
console.log(v(5))
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
        
    }
    return fat 
}
console.log(fatorial(5))*/
// --> RECURSIVIDADE <--

function fatorial(n) {
    if(n==1) {
        return 1
        
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))