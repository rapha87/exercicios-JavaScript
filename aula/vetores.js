// ------> ARRAY <------

/*let num= [2, 8, 9, -3, 5, 1, 6]
num.sort()
let pos=num.indexOf(7)
console.log(pos)

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

// --> AULA DE FUNÇAO <--
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
*//*let v = function(x) {
    return x*2
}
console.log(v(5))
/*function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
        
    }
    return fat 
}
console.log(fatorial(5))*/
// --> RECURSIVIDADE <--

/*function fatorial(n=0) {
    if (n == 1 || n == 0) {
        return 1

    } else {
        return n * fatorial(n - 1)
    }
}
console.log(fatorial(2))*/



/*function chirp(n) {
    if (n < 1 || isNaN(n)) return;
    return n < 2 ? 'chirp' : chirp(n - 1) + '-chirp';
}
console.log(chirp(3))
function chirp(n) {
    var ch = 'chirp'
    if( n < 1 || isNaN(n) ) return
    for( var i = n - 1; i--;) {
      ch += '-chirp'
    }
    return ch
}
console.log(chirp(4))

//--> object <--
let amigo = {
    nome:'marcus',
    sexo:'M', 
    peso:50,
    engordar(p=0) {
        console.log('engordou')
        this.peso +=p
    }
}
amigo.engordar()
console.log(`${amigo.nome} pesa ${amigo.peso}`)


for (c = 0; c <= 100; c++) {
    if (c % 3 == 0 && c % 5 == 0) {
    console.log("pingpong")
    }else if (c % 3 == 0) {
            console.log("ping")
    }else if (c % 5 == 0) {
            console.log("pong")
    }else {
        console.log(c)
    }
}
for(i=0; i<=50; i++){
    if(i % 2==0){
        continue
    }
    console.log(i)
}
//-->Usando o for of<--
let array=[2, 65, 4, 8, 98]
for(num of array){
    console.log(`${array.indexOf(num)} na posição ${num}`)
// -->um loop dentro de outro<--
for(i=0; i<=10; i++){
        for(c=1; c<=5; c++){
            console.log(`i: ${i} j:${c}`)
        }
    }
}
function ola() {
    console.log("olá mundo");
    
}
for(i=1; i<=10; i++){
    console.log(`${i}-${ola}`)
}
function somartudo(teste) {
    
}
let teste=somartudo([3, 4, 9, 4, 6])
console.log(Somar([5, 1, 2], 2));


const array = [10,5,5,10]

const soma = array.reduce((a,c) => a+c, 0)




function somartudo(numeros){
    let total= 0
    for(var num of numeros){
        total+=num
    }
    return total
}
console.log(soma)

let array=[3, 5, 7, 43, 5, 8]
let resultado= somartudo(array)
console.log(resultado)
;
// -->funhção autoinvocavel<--
(function autoExecuta(){
    console.log('invocar');
    
}())
// -->função call back<--
function somacallback(a, b, fncallback){
    return fncallback(a+b)
}
var mul= function(total) {
    return total*2
}
console.log(somacallback(10, 3, mul));*/
//--> object<--


 



















































































































































































































































/*
const func = () => ({
    nome : 'Marcus',
    idade : 17

})

console.log(func())
*/