//                                                  CLASE 4                                                     //


/* //Arreglos  (ARRAYS)

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

*/





//                                                  CLASE 5                                                     //


                                              //CALLBACK FUNTIONS

let multiplicarNumeros = (n1,n2) => n1*n2;
const pasarAGradosCentrigrados = gradosFahrenheit =>(5/9)*(gradosFahrenheit-32);



const imprimirGrados = (callbackFn, gradosFahrenheit) =>{
    //PASO LA TEMPERATURA A GRADOS C
    let temperatura = callbackFn(gradosFahrenheit)
    console.log(temperatura);
} 
imprimirGrados(pasarAGradosCentrigrados,90);





                                                //OBJETOS EN JAVASCRIPT
//1RA FORMA

const persona ={
    nombre : "Juan",
    apellido : "perez",
    edad : 27,
//UNA PROPIEDAD QUE ES UN OBJETO
    caracteristicas:{
        colorCabello: "Negro",
        ColorOjos:"Azules"

    }
}



//2DA FORMA
const person = {};

person.nombre = "Pedro";
person.apellido = "Zuares";
person.edad=44;
person.caracteristicas={
    colorCabello: "Morado",
    ColorOjos:"verde"
};


//3RA FORMA

let namee = "yeison";
let lastname="key";
let age = 22;
let caracteristics ={
    colorCabello: "Rubio",
    ColorOjos:"Negros"
}

const person3={namee, lastname, age, caracteristics};






console.log(persona,person,person3);



//CAMBIAR EL NOMBRE A TODOS LOS ARREGLOS

const ArregloDeObjeto = [persona,person];

ArregloDeObjeto.forEach((Objecto)=>{
    Object.nombre = "PABLO";
})




const Perro ={
    nombre: "Pulgas",
    edad:2,
    obtenerNombre(){
        return this.nombre;
    },
    cambiarNombre(nuevoNombre){
        this.nombre=nuevoNombre;
        return this.nombre;
    }
}
console.log(Perro.obtenerNombre());
console.log(Perro.cambiarNombre("Manchas"));




//DESTRUCTURING (OBTENER CARACTERISTICAS)

const {nombre,apellido,edad,caracteristicas}=persona

console.log(nombre)



const verObjeto=(Objecto)=>{

    const{nombre,apellido}=Objecto;
    console.log(nombre);
    console.log(apellido);
}
verObjeto(persona)















