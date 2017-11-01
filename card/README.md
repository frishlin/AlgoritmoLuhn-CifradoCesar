//#Nombre Ejercicio
# __TARJETA DE CRÉDITO VÁLIDA__
Crea una web que pida, por medio de un _prompt()_, el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.
````
__Consideraciones Específicas__
* Tu código debe estar compuesto por 1 función: __isValidCard__
* El usuario no debe poder ingresar un campo vacío
````

## Pseudocódigo

1. Definir variables globales y arreglo vacío
  * var cardNumber = prompt("Número de tarjeta:");
  * var sum=0;
  * var arrayCardNumber=[];
2. Definir la función __isValidCard__
3. Iniciar ciclo _for_ iniciando en 0, hasta el tamaño del arreglo, incrementando en 1
  1. convertir a entero para poder realizar operaciones matemáticas y aplicar _charAt()_ para
    separar la cadena, restando i y 1 para que se cree otro arreglo que abarca el arreglo, con la siguiente sentencia:
    _arrayCardNumber[i]=parseInt(cardNumber.charAt(cardNumber.length-i-1));_

        Ejemplo: si cardNumber = 3728293746339293
        arrayCardNumber[i]=16-0-1 = 15 (último elemento del array: 3)
        arrayCardNumber[i]=16-1-1 = 14 (penúltimo elemento del array: 9)
        arrayCardNumber[i]=16-2-1 = 13 (antepenúltimo elemento del array: 2)...
        así sucesivamente hasta:
        arrayCardNumber[i]=16-15-1 = 0 (3 primer elemento del array)
    2.  Si (i%2!=0) es diferente de 0, (si está en una posición par), multiplicar arrayCardNumber[i]= arrayCardNumber[i] * 2; cada elementos correspondiente
      1. Si el producto resultante es mayor o igual a 10, divide el elemento/10 para obtener el cociente y el módulo del mismo de 10, para obtener el residuo
      Ejemplo:
      9 * 2 = 18
      18 / 10 = 1
      18 % 10 = 8
      2. Se acumula la suma de todos los elementos (resultado de los productos pares y los elementos impares)
      sum=sum+arrayCardNumber[i];
4. Si (sum%10) es distinto de 0,
    1. Mostrar el mensaje "Número de tarjeta inválido"
5. Si no, si el resultado del módulo es igual a 0
    1. Mostrar el mensaje: "Tarjeta válida;
6. FIN

## Imagen

![Diagrama](https://github.com/frishlin/final-project-test/blob/master/card/assets/images/diagrama-de-flujo.png?raw=true)
