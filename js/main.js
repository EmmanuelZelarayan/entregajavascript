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