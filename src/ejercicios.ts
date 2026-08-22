//1. Crear un array con 5 nombres de estudiantes y 
// mostrar cada nombre en consola usando un ciclo.

let estudiantes = ["maria","juan","laura","carlos","ana"];
for(let i=0; i < estudiantes.length; i++){
    console.log(estudiantes[i]);
}

//2. Imprimir cuantos estudiantes hay en el arreglo.

console.log(estudiantes.length);


// 3.Crear un array de números y calcular la suma total
let num = [10, 20, 30, 60, 50];

let suma = 0;
for (let i = 0; i < num.length; i++) {
    suma = suma + num[i];}

console.log(suma); 

4//Crear un array de números (mínimo 15) y calcular la suma total
let num2 = [10, 20, 30, 40, 50,10, 20, 30, 40, 50,10, 20, 30, 40, 50];

let suma2 = 0;
for (let i = 0; i < num2.length; i++) {
    suma2 = suma2 + num2[i];}

console.log(suma2); 



//5. Calcular el promedio de los números del punto 3
let promedio = suma / num.length;

console.log(promedio);


//6. Imprimir los números mayor a 50 del punto 3.

for (let i = 0; i < num.length; i++) {
    if (num[i] > 50) {
        console.log(num[i]);
    }
}

//7.Crear un objeto de persona con nombre, edad, ciudad e imprimir sus valores
let persona = {
    nombre: "Maria",
    edad: 21,
    ciudad: "El Retiro"
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

8//Crear un array de productos (nombre y precio) e imprimirlos
let productos = [
    {
        nombre: "camiseta",
        precio: 30000
    },
    {
        nombre: "pantalon",
        precio: 60000
    },
    {
        nombre: "zapatos",
        precio: 100000
    }
];

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre);
    console.log(productos[i].precio);
}


//9.Encontrar el producto con mayor precio del array e imprimirlo
let productoMayor = productos[0];

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > productoMayor.precio) {
        productoMayor = productos[i];
    }
}
console.log(productoMayor.nombre);
console.log(productoMayor.precio);

//10. Agregar la cantidad de unidades disponibles a cada producto y calcular el valor total de mi inventario.
let productosInventario = [
    {
        nombre: "camiseta",
        precio: 30000,
        cantidad: 10
    },
    {
        nombre: "pantalon",
        precio: 60000,
        cantidad: 5
    },
    {
        nombre: "zapatos",
        precio: 100000,
        cantidad: 3
    }
];
let totalInventario = 0;

for (let i = 0; i < productosInventario.length; i++) {
    let valorProducto = productosInventario[i].precio * productosInventario[i].cantidad;

    totalInventario = totalInventario + valorProducto;
}
console.log(totalInventario);

//11.. Crear un array de estudiantes donde cada estudiante tiene nombre,
//  semestre y un array de materias (cada materia tiene nombre, nota).
//  Calcular el promedio de cada estudiante y el promedio de todos los estudiantes.
let estudiantes2 = [
    {
        nombre: "Maria",
        semestre: 3,
        materias: [
            {
                nombre: "Programacion",
                nota: 4.5
            },
            {
                nombre: "Matematicas",
                nota: 3.8
            },
            {
                nombre: "Ingles",
                nota: 4.0
            }
        ]
    },
    {
        nombre: "Juan",
        semestre: 3,
        materias: [
            {
                nombre: "Programacion",
                nota: 3.0
            },
            {
                nombre: "Matematicas",
                nota: 3.5
            },
            {
                nombre: "Ingles",
                nota: 4.0
            }
        ]
    }
];
for (let i = 0; i < estudiantes2.length; i++) {

    let sumaNotas = 0;

    for (let j = 0; j < estudiantes2[i].materias.length; j++) {
        sumaNotas = sumaNotas + estudiantes2[i].materias[j].nota;
    }

    let promedio = sumaNotas / estudiantes2[i].materias.length;

    console.log(estudiantes2[i].nombre);
    console.log(promedio);
}

//12. Imprimir el nombre de los estudiantes que tiene promedio mayor a 3.5
for (let i = 0; i < estudiantes2.length; i++) {
    let sumaNotas = 0;
    for (let j = 0; j < estudiantes2[i].materias.length; j++) {
        sumaNotas = sumaNotas + estudiantes2[i].materias[j].nota;
    }
    let promedio = sumaNotas / estudiantes2[i].materias.length;
    if (promedio > 3.5) {
        console.log(estudiantes2[i].nombre);
    }
}
