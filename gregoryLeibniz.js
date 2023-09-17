/**

 * 1. Crear una funcion para recibir un numero entero 'n'
 * 2. Definir una variable 'v' <- 0
 * 3. Definir un ciclo desde i hasta n, con incremento i = i + 4
 * 4. Dar el valor v = v + 1 / i - 1 / (i + 2)
 * 5. Fin del ciclo
 * 6. Return 4 * v
 * 
 * gregoryLeibniz(n)
 * // input: n where n E Z
 * // output: aproximation of pi (while n is bigger more accurate the aproximation)
 * v <- 0
 * FOR i <- 1, i <= n, i <- i + 4 DO:
 *      v <- v + 1 / i - 1 / (i + 2)
 * 
 * RETURN 4 * v
 */


function gregoryLeibniz(n) {
    var v = 0;
    for (i = 1; i <= n; i += 4) {  // increment by 4
        v = v +  1 / i - 1 / (i + 2); // add the value of the series
    }
    return 4 * v;                  // apply the factor at last
}

console.log(gregoryLeibniz(10000));
