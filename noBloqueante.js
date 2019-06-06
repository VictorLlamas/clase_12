// Este codigo manda al event loop la funcion
setTimeout(printTwo, 0);

// Obtener la fecha en milisegundos
let myTime = Date.now();
// Agregamos 3 segundos a la fecha
const endTime = myTime + 3000;
// Funcion que imprime 2
function printTwo(){
    console.log(2);
}

console.log(1);

while(myTime < endTime){
    myTime = Date.now();
}

console.log(3);