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
console.log(somacallback(10, 3, mul));
//--> object<--
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


let a = {
    nome: 'Rafael',
    idade: 17,
    sexo: 'M',
    pais: 'Brasil'
}
var props= Object.keys(a)
for(b in a) {
    console.log(`${b} = ${a[b]}`)
    
}
for(b of props) {
    console.log(a[b])
}*/


// --->usando this<---

/*function usuario() {
    this.nome= 'rafel'
    this.idade=27;
    this.soma= function(a,b) {
        return a+b
    }
}

//usuario()
var Usuario= new usuario()
console.log(Usuario)

console.log(Usuario.nome)
console.log(Usuario.idade)
console.log(Usuario.soma(10, 4))

//call
function personagem(p1, p2, p3) {
    console.log('personagem this', this)
}
var perso= {
    nome: 'Rafael'
}
//personagem.call(perso, 'para', 123, [5])
//usando applay
var p = ['para', 123, [5, 3, 5]]
personagem.apply(perso, p)

//usando bind

var b= personagem.bind(perso)
b( 'olá', 'mundo', '!!!')



//-->Object<--

let usuario= {
    nome: 'rafael',
    idade: 16,
    curso: 'estagio NTI',
    'sobre-nome': 'santos', //quando for usar o hifen, é necessario colocar entre aspas('')
    competencias : ['java', 'php', 'java', 'c++']
}
usuario.ano= 2019
console.log(usuario)

for(i in usuario) {
        console.log(`${i} = ${usuario[i]}`)
}
 //vai percorre o objeto e colocar seu id
Object.keys(usuario).forEach(function(item){
    console.log(`${item} = ${usuario[item]}`);
});

var n= {
    digaoi(nome){//dentro do objeto nao e preciso usar o termo "function" e nem ":"
        return `olá ${nome}` 
    }
}
console.log(n.digaoi('rafael'))

var cor= 'rosa'
var r= {
    nome : 'rafael',
    cor // se tiver uma variavel igual a do objeto so é preciso repetir uma vez
}
console.log(r)


let usuario= {
    nome: 'rafael',
    idade: 16,
    curso: 'estagio NTI'
}
let es= {
    escola: 'liceu',
    ano: 2,
    turma: 201
}

//var merge= Object.assign({}, usuario, es)
var merge= {
    ...usuario,
    ...es
}
console.log(merge)
let ja = [
    a = {
        nome: 'joão',
        idade: 18
    },
    b = {
        nome: 'marcus',
        idade: 17
    },
    c = {
        nome: 'alex',
        idade: 16
    }
]
//console.log(ja[0].idade)
var ja2= {
    posição:0,
    get atual () {
        return ja[this.posição]
    },
    set atual (posição) {
        this.posição= posição
    },
    proximo() {
        ++this.posição
    },
    anterior() {
        --this.posição
    }
}
console.log(ja2.atual)
ja2.proximo()

console.log(ja2.atual)

ja2.proximo()
console.log(ja2.atual)

ja2.anterior()
console.log(ja2.atual)

ja2.atual=0
console.log(ja2.atual)


ja2.atual=2
console.log(ja2.atual)
const r = {
    j: {
        nome: 'rafael',
        idade: 17,
        rua: 10
    }
}
var { j: { rua ='joao do vale' } } =r //caso nao existir o elemento n objeto ele vai assumir um valor padrão
console.log(rua)

function r({nome, idade, sexo, pais='japão'}) {
    for(i in {nome, idade, sexo, pais} ){
        console.log(`${nome, idade, sexo, pais[i]}`)
    }
}
 var t= {
     nome: 'rafael',
     idade: 16,
     sexo: 'M',
     pais: 'Brasil'
 }
 console.log(Object.keys(t))
 console.log(Object.values(t))
 if(true) {
    var r= 'programdor'
    let autor= 'rafael'
    console.log(r)
    console.log(autor)
}
console.log(r)
console.log(autor)

// -->clojures<--
function imprimirnome(nome) {
    return function() {
        console.log(nome, 'santos')
    }
}
function inicializar() {
    let nome = 'Rafael'
    setTimeout(imprimirnome(nome), 2000milissegundo)
}
inicializar()

const a = [1,2, 3, 4]
a.push(9)
console.log(a)

//arrow function
var soma = (a, b) => {
    return a+b
}
console.log(soma(10, 3))

//hoisting
console.log(a)
var a= 123

console.log(b)
let b= 123

console.log(c)
const c= 123

console.log(a(12, 6))
function a(b, c) {
    return b+c   
}*/

//map, fiter e reduce
//const num = [2, 3, 6, 5, 10]
//let narraynumeros= []
/*for(i=0; i< num.length; i++) {
    narraynumeros.push(num[i]*2)
}


const novoarraymap= num.map(function (num) {
    return num *2
    
})
console.log(novoarraymap)
//usando map e arrow function
const modomaisfacil= num.map(num=> num*2)
console.log(modomaisfacil)

//filter
const c= num.filter(num => num % 2==0)
console.log(c)
//usando map e filter
const mapfilter= num.filter(num=> num%2==0).map(num=>num*2)
console.log(mapfilter)

//usando reduce
const valorTotal=num.reduce(function(valorAcumulador, valorArray) {
    return valorAcumulador+valorArray
}, 0)
console.log(valorTotal)

const somaReduce= num.reduce((valorAcumulador,
    valorArray)=>valorAcumulador+valorArray, 0)
console.log(somaReduce)

const array = [
    {
        nome: 'rafael',
        idade: 17
    },
    {
        nome: 'marcus',
        idade=18
    },
    {
        nome: 'jessica',
        idade: 19
    },
    {
        nome: 'alex',
        idade: 16
    }
]
const usandoreduce = array.reduce(function (valorAcumulador, valorArray) {
    const maiorOUmenor = valorArray.idade >= 18 ? 'maiores' : 'menores'
    valorAcumulador[maiorOUmenor].push(valorArray)
    return valorAcumulador
}, { maiores:[] , menores:[]})

console.log(usandoreduce)*/



































































































































































































































































/*
const func = () => ({
    nome : 'Marcus',
    idade : 17

})

console.log(func())
*/