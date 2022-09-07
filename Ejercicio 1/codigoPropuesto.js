function FormatString (sentence) {
    let result = [];

    sentence = sentence.toUpperCase(); // Al hacer esto estamos transformando todo el codigo a mayusculas y perdemos el formato con el que se recibio.

    let i = 0;
    let j = 0;
    while (i < sentence.length){
        if (
            //Este if no cumple con la consigna ya que no permite guiones bajos o minisculas, si bien es cierto que al hacer toUpperCase() 
            //convertimos todo a mayusculas y no hace falta comparar por minuscula, perdemos el formato como mencione anteriormente.
            (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90) || 
            (sentence.charCodeAt(i) >= 48 && sentence.charCodeAt(i) <= 57) || 
            (sentence.charCodeAt(i) == 32) || 
            (sentence.charCodeAt(i) == 45)  
        ) {
            sentence[j] = result[i]; // Esta asignacion lo que hace es escribir un valor indefinido ya que a result nunca se le asigno un valor. Ademas que esta deberia ser al reves result[j] = sentence[i]
            j += 1;
        }
        i += 1;
    }

    //Nunca controla si cadena no tiene caracter permitido por lo cual nunca devolvera error
    return result.join('');
}

let entrada1 = "Lavase las manos, por favor!";
let entrada2 = "Consultar al #0800-999-100.";
let entrada3 = "####";

let salida1 = FormatString(entrada1);
let salida2 = FormatString(entrada2);
let salida3 = FormatString(entrada3);

console.log(salida1);
console.log(salida2);
console.log(salida3);