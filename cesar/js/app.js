/*
CIFRADO CÉSAR
Crea una web que pida, por medio de un _prompt()_, una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.
Por ejemplo:
Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas.
La fórmula para descifrar es: (x - n) % 26
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
El usuario no debe poder ingresar un campo vacío o que contenga números*/

//Variables globales
var veriftyString=true;
var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var codMessage="";

//Función de cifrado
var cipher = function(message, displace){
    //Recorre la cadena del mensaje capturado desde prompt, caracter por caracter
    for(var i=0; i<message.length;i++){
      //Si el mensaje está dentro del alfabeto según su código ascii
      if(message.charCodeAt(i)>64 && message.charCodeAt(i)<91){
        //Se cifra el mensaje según la formula de cifrado César
        codMessage=codMessage.concat(String.fromCharCode((message.charCodeAt(i)-65+displace)%26+65));
      }
        //Si algún caracter no está dentro del alfabeto ascii se interrumpe el proceso y sale del ciclo for
      else {
        veriftyString=false;
        break;
      }
    }
    //Si no hay caracteres inválidos, se muestra el mensaje codificado (en mayúsculas)
    if(veriftyString){
      document.write(codMessage);
    }
    //Si se encuentra un caracter inválido, muestra un mensaje de error
    else{
      document.write("datos no válidos");
    }
}
//Función de descifrado
var decipher = function(message, displace){
  //Recorre la cadena del mensaje capturado desde prompt, caracter por caracter
  for(var i=0; i<message.length;i++){
    //Si el mensaje está dentro del alfabeto según su código ascii
    if(message.charCodeAt(i)>64 && message.charCodeAt(i)<91){
      codMessage=codMessage.concat(String.fromCharCode((message.charCodeAt(i)+65-displace)%26+65));
    }
    //Si algún caracter no está dentro del alfabeto ascii se interrumpe el proceso y sale del ciclo for
    else {
      veriftyString=false;
      break;
    }
  }
  //Si no hay caracteres inválidos, se muestra el mensaje codificado (en mayúsculas)
  if(veriftyString){
    document.write(codMessage);
  }
  //Si se encuentra un caracter inválido, muestra un mensaje de error
  else{
    document.write("datos no válidos");
  }
}
//Opción que tendrá que escribir el usuario para cifrar o descifrar un mensaje
var option = prompt("Escribe 1 para CIFRAR o 2 para DESCIFRAR").toLowerCase();
//Si el usuarui escribe 1, deberá escribir un mensaje para cifrarlo con el código césar
if(option==="1"){
  cipher(prompt("Escribe un mensaje para CIFRAR:").toUpperCase(),33);
}
//Si el usuario escribe 2, deberá escribir un mesnaje cifrado para conocer su significado
else if(option==="2"){
  decipher(prompt("Escribe un mensaje CIFRADO:").toUpperCase(),33);
}
//Si el usuario escribe algún dato que no sea 1 o 2, se mostrará un mensaje de error
else{
  console.log("ingresa una opción válida");
}
