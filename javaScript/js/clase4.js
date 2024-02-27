//Arreglos  (ARRAYS)

let varios = [1, "Juan", "Bogota", 20.45, true];
//EN CONSOLA EL TAMAÑO DEL ARREGLO

console.log(varios.length);
console.log(varios[0]);

//AGREGAR UN SOLO VALOR
varios.push(30);
console.log(varios);

//SACAR UN ELEMENTO DEL ARREGLO(EL ULTIMO)
varios.pop();

let enteros = [1,2,3,4,5,6,7,8];
//concatenar
let concat = varios.concat(enteros);
console.log(concat);


//AGREGAR AL INICIO
let inicio = concat.unshift("Inicio");
console.log(inicio);

//QUITAR EL PRIMER ELEMENTO
inicio= concat.shift();

const arregloUno = inicio;



for(i=0; i<varios.length;i++){
    console.log(varios[i]);
}



//PRIMER ELEMENTO PARA ARREGLOS
//
varios.forEach(elemento=>{
    console.log(elemento)
})


//.reduce()

let numeros = [100,300,2,5,10];

let resultados = numeros.reduce((acomulador,ValorActual)=>{
    return acomulador*ValorActual;

});
console.log(resultados);



//.filter()
let filtrado = numeros.filter(numero =>{
    return numero >10;

});
console.log(filtrado);


let paises = ["Colombia", "Usa", "Brasil", "Canada"]

let filtro2 = paises.filter(pais =>{
    return pais.startsWith("C")
});
console.log(filtro2);


//.map()

const saludarPais = paises.map(country =>{
    return "BIENVENIDO PASAJEROS DE "+ country;
})

console.log(saludarPais);


