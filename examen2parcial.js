function obtenerPrecio(nombre) {
    let productos = [
        ["laptops", 1200],
        ["celulares", 850],
        ["memorias", 160],
        ["computadoras",1000],
        ["pantallas",500]
    ]
    let precio = productos.filter((producto)=> producto[0]== nombre);
    console.log("el precio es " + precio[0][1])
    }
    obtenerPrecio("pantallas")

    // 2. Calcular el total de productos seleccionados
function calcularTotal(arreglo) {
    let productos = [
      ["laptops", 1200],
      ["celulares", 850],
      ["memorias", 160],
      ["computadoras", 1000],
      ["pantallas", 500]
    ]
    let total = arreglo
      .map(nombre => productos.filter(precio => precio[0] === nombre)[0][1])
      .reduce((producto, precio) => producto + precio, 0);
    console.log("El total es " + total);
  }
  calcularTotal(["laptops","pantallas","memorias"]);


  // 3. Aplicar descuento a un producto
function aplicarDescuento(nombre, descuento) {
    let productos = [
      ["laptops", 1200],
      ["celulares", 850],
      ["memorias", 160],
      ["computadoras", 1000],
      ["pantallas", 500]
    ]
    let resultado = productos
      .filter(articulo => articulo[0] === nombre)
      .map(articulo => articulo[1] - (articulo[1] * descuento / 100));
    console.log("Precio con descuento: " + resultado[0]);
  }
  aplicarDescuento("laptops",50)

 // 4. Eliminar producto específico
function eliminarProducto(nombre) {
    let productos = [
      ["laptops", 1200],
      ["celulares", 850],
      ["memorias", 160],
      ["computadoras", 1000],
      ["pantallas", 500]
    ]
    let nuevos = productos.filter(palabra => palabra[0] !== nombre);
    console.log("Productos después de eliminar: ", nuevos);
  }
  eliminarProducto("laptops")
  
  // 5. agregar productos
  function agregarProducto(nombre, precio) {
    let productos = [
      ["laptops", 1200],
      ["celulares", 850],
      ["memorias", 160],
      ["computadoras", 1000],
      ["pantallas", 500]
    ];
  
    let agregar = [productos];
    agregar.push([nombre, precio]);
    console.log("Lista con nuevo producto: ", agregar);
  }
  agregarProducto("consola", 850)

  // 6. buscar producto
  function buscarProducto(nombre) {
    let productos = [
      ["laptops", 1200],
      ["celulares", 850],
      ["memorias", 160],
      ["computadoras", 1000],
      ["pantallas", 500]
    ];
  
    let encontrado = productos.find(objeto => objeto[0] === nombre);
    console.log("Producto encontrado: ", encontrado);
  }
  buscarProducto("pantallas")

  function servicio(dia) {
    let encargado= [
      ["lunes", "patron"],
      ["martes", "antonio"],
      ["miércoles", "segundo"],
      ["jueves", "alan"],
      ["viernes", "vale"]
    ];    
        let resultado = encargado.find(encargado => encargado[0] === dia);
        let mensaje = resultado ? "Este día se encarga " + resultado[1] : "No hay servicio";
        console.log(mensaje);
      }
  
  servicio("jueves")


  // 8. calculo de factorial
  function factorial(num) {
    return num === 1 ? 1 : num * factorial(num - 1);
  }
  
  let numero = 5;
  console.log("El factorial de " + numero + " es: " + factorial(numero));

  // 9. calcular numero de fibonacci
  function fibonacci(numeros) {
    return numeros<= 1 ? numeros : fibonacci(numeros - 1) + fibonacci(numeros - 2);
  }
  let num2 =10;
  console.log("Fibonacci: " + fibonacci(num2));

  //10. fibonaci recursivo
  function invertir(texto) {
    let separar = texto.split("")
    let invertir = separar.reverse()
    let unir = invertir.join("")
console.log("el texto es: " + unir)
}
invertir("valeria")


 /* function invertirTexto(texto) {
    return texto === "" ? "" : invertirTexto(texto.slice(1)) + texto[0];
  }
  let textos ="lorena";
  console.log("Texto invertido: " + invertirTexto(textos));*/











  // 11 contar vocales

function contarvocales(texto){
  let textos = "lorena";
  let contar = 0;
  let vocales= ["a","e","i","o","u"];
for (let i = 0 ; i > textos.length; i++){
  if (vocales.includes(texto[i])){
    contar++
console.log("las vocales son :" + texto + contar  ) 
 
  }
  }
  }
contarvocales("lorena")










