alert ("Bienvenido a LaSiamo");

//Indicanos tu nombre

let nombre= prompt("Ingrese su nombre");
alert("Bienvenid@ " + nombre + ".")
let edad = Number (prompt ("Ingrese su edad") );
if (edad >= 18){
    alert ("Sos mayor de edad. Podes ingresar");}
else { 
    alert("Sos menor de edad. No podes ingresar")
} 

//Indicanos tu fecha de visita
let dia = prompt("Ingrese un dia: " + "\n" + "Lunes" + "\n" + "Martes" + "\n" + "Miercoles" + "\n" + "Jueves" + "\n" + "Viernes" + "\n" + "Sabado") .toUpperCase();

let diaError = false

if ((dia === "LUNES" ) || (dia === "MARTES" ) || (dia === "MIERCOLES" ) || (dia === "JUEVES" ) || (dia === "VIERNES" ) || (dia === "SABADO" )) {
    alert ("Tu entrega sera el dia " + dia);
}else {
    alert  (prompt("Dia incorrecto"))
}

//Solicitar fecha

let fecha = prompt("Ingrese una fecha " + "\n" + "De 1 a 30")

for (let i = 10; i <= 20; i++){
    if ( i== 10 ) {
        break;
    }
    alert (i);
}

alert ("Bienvenido nuevamente: " + nombre + "\n" + "Tu entrega sera el dia:  " + dia + fecha )

alert ("Gracias por visitarnos")


// funciones declaradas
function saludar ( cliente) {
    console.log ("Hola " + nombre);
}
saludar("cliente");

// CANTIDAD DE PRENDAS  

var numero1 = prompt("Ingrese la cantidad de camisetas que desea:");
var numero2 = prompt("Ingrese la cantidad de pantalones:");

// Convertir los valores ingresados a números
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Suma
var suma = numero1 + numero2;
alert("El total de prendas es: " + suma);


// array

const productos = ["Camiseta", "Short", "Medias", "Canilleras"];

console.log (productos);
console.log (productos[0])


/* lenght */
console.log (productos.length);
for (let i = 0; i < productos.length; i++){
    console.log(productos [i]);
}
