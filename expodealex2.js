let arreglo =[1,2,3,4,5]
console.log(arreglo[0])


let Array = [1,2,3]
Array.push(4)
console.log(Array)

let Array2 = [1,2,3];
arreglo.pop()
console.log(Array2)

let animales= ["perro","gato","pajaro","elefante"]
animales.unshift("cuyo")
console.log(animales)

let miarreglo1 = ["caballo","gato","pajaro","vaca","elefante"]
miarreglo1.shift()
console.log(miarreglo1)

const cities= ["madrid","valencia","mexico"]
const first= cities.shift()
console.log(cities)
console.log(first)

let miarreglo3 = ["caballo", "vaca","burro"]
console.log(miarreglo3.includes("caballo"))
console.log(miarreglo3.includes("persona"))

 let miarreglo2 = ["caballo","vaca","burro"];
  console.log(miarreglo2.indexOf("caballo"))
  console.log(miarreglo2.indexOf("vaca"))

  let miarreglo4 = ["caballo","vaca","burro"]
  for (let i = 0; i < miarreglo4.length; i++){
    console.log(miarreglo4)
  }

    let palabra= ["the boos","hola","hamburgesa","haitiano","globo"]
let mas5letras = palabra.filter((x)=>x.length >=5 )
console.log(mas5letras)

let number = [1,4,9,16]
let raiz = number.map((num)=> Math.sqrt(num))
console.log(raiz)

let inicioen = 1;
let operacion = raiz.reduce((acumula,acumulado)=>acumula * acumulado,inicioen)
console.log(operacion)

let nump = [6,7,8,9,10]
let positivos = nump.every(num=>num >0)
console.log(positivos)

let numn = [1,-2,3,4,5]
let negativos = numn.some(num=>num>0)
console.log(negativos)

let nombre =["alex","citla","fanny","migue"]
nombre.sort()
console.log(nombre)

//citla
let numero= [1,2,3,4,5]

numero.reverse();
console.log(numero)

let arreglo6= [1,2,3]
let arreglo7=[4,5,6]

let combinado = arreglo6.concat(arreglo7)
console.log(combinado)

let nombresSalon = ["alex","cris"]
nombresSalon[0] = "dana"
console.log(nombresSalon)


let negativas = numn.some((num)=> num >0)
 function nombreequis(num){
    if(num < 0){
        console.log("true")
    }
 }
    