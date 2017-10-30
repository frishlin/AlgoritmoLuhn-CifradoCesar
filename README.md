//#Nombre Ejercicio
# __CIFRADO CÉSAR__
Crea una web que pida, por medio de un _prompt()_, una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

__Por ejemplo:__

Texto original: __ABCDEFGHIJKLMNOPQRSTUVWXYZ__

Texto codificado: __HIJKLMNOPQRSTUVWXYZABCDEFG__

__ Consideraciones Específicas __

Tu programa debe ser capaz de _cifrar y descifrar_ tanto letras _mayúsculas_ como _minúsculas_. La fórmula para descifrar es: __(x - n) % 26__
````
* Tu código debe estar compuesto por 2 funciones con los siguientes nombres: _cipher_ y _decipher_
* El usuario no debe poder ingresar un campo vacío o que contenga números
````
## Pseudocódigo
1. Definir variables globales e inicializarlas, así como definir el arreglo para el alfabeto, desde A hasta Z:
  * __message = ""__
  * __verifyString = true__
  * __codMessage=""__
  * __alphabet = ['A'. 'B', 'C', ..., 'Z']__
2. Crear funciones __cipher__ y __descipher__ con sus respectivos parámetros: cipher(msg,displace) y decipher(msg, displace)
3. Crear un ciclo for, que inicie desde 0 y que sea menor que el tamaño del mensaje, incrementando en 1.
  1. Si __message__ está dentro del rango de código ascii permitido, entonces:
    * __concat__ caracter por caracter hasta formar el mensaje cifrado, con la fórmula (x - 65 + n) % 26 + 65.
  2. Si no, __verifyString__ == _false_ y romper el ciclo con un _break_
4. Si __verifyString__ es true, entonces:
  1. Imprimir el mostrar el mensaje codificado
5. Si no, que imprima un mensaje de error
6. Hacer los mismos pasos para la función __decipher__, pero con la fórmula (x + 65 - n) % 26 + 65
7. Definir la variable __option__ para que el usuario elija si desea cifrar o descifrar el mensaje
8. Si elige la opción 1: cifrar, llama a la función _cipher()_ y con un _prompt()_ solicita que se ingrese el mensaje, el cual será convertido a mayúsculas y será mostrado.
9. Si no, si elige la opción 2: descifrar, llama a la función _decipher()_ y con un _prompt()_ solicita que se ingrese el mensaje, el cual será convertido a mayúsculas y será mostrado.
10. Si no elige alguna de esas dos opciones, se mostrará un mensaje de error.


## Imagen

![Diagrama](https://github.com/frishlin/final-project-test/blob/master/cesar/assets/images/diagrama.jpeg?raw=true)
