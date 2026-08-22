//1. Crear un array con 5 nombres de estudiantes y 
// mostrar cada nombre en consola usando un ciclo.

let estudiantes = ["maria","juan","laura","carlos","ana"];
for(let i=0; i < estudiantes.length; i++){
    console.log(estudiantes[i]);
}

//2. Imprimir cuantos estudiantes hay en el arreglo.

console.log(estudiantes.length);


// 3.Crear un array de números y calcular la suma total
let num = [10, 20, 30, 40, 50];

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
