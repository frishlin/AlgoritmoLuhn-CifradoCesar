/*
Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo funciona el algoritmo de Luhn.

Consideraciones Específicas

Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío
*/

/*Variables globales y definición de un arreglo vacío que aceptará el número de
tarjeta por parte del usuario*/
var cardNumber = prompt("Número de tarjeta:");
var sum=0;
var arrayCardNumber=[];
//Función isValidCard
var isValidCard = function(){
  //Inicia for desde 0 hasta el tamaño del arreglo, incrementando en 1
  for(var i=0; i<cardNumber.length;i++){
    /*se recorre el array y se convierte a entero, se aplica charAt para
    separar la cadena, restando i y 1 para que se cree otro arreglo
    pero ordenado inversamente*/
    arrayCardNumber[i] = parseInt(cardNumber.charAt(cardNumber.length-i-1));
    //console.log(arrayCardNumber[i]); //muestra arreglo separado e inverso
    /*Si módulo de i es diferente de 0, es decir, si está en una posición par,
    se multiplican por 2 cada elementos correspondiente*/
    if(i%2!=0){
      arrayCardNumber[i]= arrayCardNumber[i] * 2;
      /*Si el producto resultante es mayor o igual a 10, divide el elemento/10
      para obtener el cociente y el módulo del mismo de 10, para obtener el
      residuo y separar ambos elementos para posteriormente sumarlos y obtener
      un sólo dígito*/
      if(arrayCardNumber[i]>=10){
        arrayCardNumber[i] = parseInt(arrayCardNumber[i]/10) + arrayCardNumber[i]%10;
      }
    }
    //Se acumula la suma de todos los elementos del arreglo
    sum=sum+arrayCardNumber[i];
    //console.log(arrayCardNumber[i]);
  }
  /*Si con el total obtenido se obtiene un módulo de 10 diferente de 0,
  se muestra el mensaje "Número de tarjeta inválido"*/
  if(sum%10!=0){
    document.write("Número de tarjeta inválido!");
  }
  //Si el resultado del módulo es igual a 0, se muestra el mensaje "tarjeta válida"
  else{
    document.write("Tarjeta válida!");
  }
}

//Llamada de función
isValidCard();
