
const { error } = require('console');
const fs = require ('fs');

//leer un archivo 
fs.readFile('equipo4.txt','utf8',(error,datos)=>{
    if(error){
        console.log('no se pudo leer el archivo')
    }else{
        console.log('se pudo leer el archivo')
    }
}

);

//Escribir en un archivo
fs.writeFile('archivon.txt','Este es un nuevo archivo nuevo.',(error) => {
    if(error){
        console.log('Error al escribir el archivo');
    }else{
        console.log('Se pudo leer el archivo');
    }
}
);

//Verificar si un archivo existe
fs.access('mensaje.txt',fs.constants.F_OK,(error)=>{
    if(error){
        console.log('El archivo no existe');
    }else{
        console.log('El archivo si existe');
    }
}
);

//Cambiar nombre de un archivo
fs.rename('mensaje.txt','nuevonombre.txt',(error) =>{
if(error){
    console.log('No se le cambio el nombre');
}else{
    console.log('Se le cambio el nombre');
}
}
);

//Eliminar un archivo
fs.unlink('olademar.txt',(error) =>{
    if(error){
        console.log('No se elim ino el archivo');
    }else{
        console.log('Se elimino el archivo');
    }
}
);

//Lista de nombres en una carpeta
fs.readdir('.',(error, archivos)=>{
    if(error){
        console.log('No se pudo leer la carpeta')
    }else{
        console.log('Se pudo leer la carpeta')
    }
}
);
// Manejo de asicronia

//Callbacks funciones de retrollamada

const fs = require('fs');  // importa el modulo fs
fs.readFile('archivo.txt', 'utf8', (err, data) =>  {  // lee el archivo
    if (err){ // manejar errores 
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log('Contenido del archivo:', data)
});

//Promesas

const fsPromises = require('fs').promises //importar el modulo
fsPromises.readFile('archivo.txt', 'utf8') // lee el archivo 
.then(data => {  // se ejecuta si la promesa es resuelta
    console.log('Contenido del archivo:', data) 
})
.catch(err => {  // se ejecuta si la promesa es rechazada 
console.error('Error al leer el archivo:', err)
})
const fs = require('fs')
const fsPromises = fs.promises
async function leerArchivo(){
    try{
        const data = await fsPromises.readFile('archivo.txt', 'utf8')
    } catch (err){
        console.error('Error al leer el archivo:', err)
    }
}
leerArchivo1()

// uso con async/await
const fs = require('fs')
const fsPromises = fs.promises
async function leerArchivo1(){
    try{
        const data = await fsPromises.readFile('archivo.txt', 'utf8')
    } catch (err){
        console.error('Error al leer el archivo:', err)
    }
}
leerArchivo1()

// operaciones asicronas 

 const fsPromises1= require('fs').promises

 async function manipularArchivo(){
    try{
        //Leer archivo
        const data = await fsPromises1.readFile('archivo.txt', 'utf8')
        console.log('Archivo leido:', data)

        // Escribir en el archivo
        await fsPromises.writeFile('archivo.txt', 'Nuevo contenido')
        console.log('Archivo actualizado')

        //Renombrar el archivo
        await fsPromises.rename('archivo.txt', 'nuevoArchivo.txt')
    }catch (err){
        console.error('Error:', err)
    }
 }

 manipularArchivo()



const cortesdeCarne = [
    {
        nombre: 'Aguja norteña',
        precio: 156.5,
        puntuacion: 5
    },
    {
        nombre: 'Arrachera',
        precio: 148,
        puntuacion: 4
    },
    {
        nombre: 'Sirloin',
        precio: 190,
        puntuacion: 5

    },
]
const obtenerCortes1 = (conError) => {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(conError) {
                reject(new Error('Hubo un error al obtener los cortes de carne'))
            }else{
                resolve(obtenerCortes1)
            }

        },2000)
    })
}
obtenerCortes(true)
.then(data => console.log(data), error => console.log(error))
.then(() => console.log(data))

.catch(error => console.log(error))
.finally(() => console.log('final'))

const fs = require('fs-extra');

//mover el archivo "copiar.txt" a la carpeta "backup"
fs.move('C:\Users\scarl\Desktop\Programacion\esVocal.js', 'backup/C:\Users\scarl\Desktop\Programacion\.vscode')
.then(()=>
console.log('Archivo movido correctamente'))
.catch((error)=>
console.log('Error al mover el arcivo: ', error))