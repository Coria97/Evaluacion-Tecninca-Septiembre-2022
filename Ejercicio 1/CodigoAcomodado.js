function formatString(sentence){ //Esto ya es a gusto de cada uno pero yo prefiero usar una notacion camelCase, sin embargo poner FormatString funciona igual.
  
  let result = [];
  //Aqui iria la sentencia toUpperCase(), pero como quiero que no pierda el formato no la voy a utilizar.
  let i = 0;
  let j = 0;

  while (i < sentence.length){
    let code = sentence.charCodeAt(i); //Si bien utilizar sentence.charCodeAt(i) para consultar siempre funciona, para mi gusto queda mas legible el codigo guardando la informacion en una variable.
    if ((code >= 65 && code <= 90) || (code >= 48 && code <= 57) || (code >= 97 && code <= 122) || (code == 32) || (code == 45) || (code == 95)){
      //Agregue la logica de si es minuscula o guion bajo
      result[j] = sentence[i];
      j += 1;
    }
    i = i + 1;
  }

  //Controla que la cadena sea mayor a 0, ya que si es 0 quiere decir que no tiene caracter permitido por lo que devolvera Error.
  if (result.length > 0)
    return result.join('');
  else
    return "ERROR";
  }
  
let entrada1 = "Lavase las manos, por favor!";
let entrada2 = "Consultar al #0800-999-100.";
let entrada3 = "####";
  
let salida1 = formatString(entrada1);
let salida2 = formatString(entrada2);
let salida3 = formatString(entrada3);
  
console.log(salida1);
console.log(salida2);
console.log(salida3);