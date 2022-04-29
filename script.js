//Ejercicio 1
const factura={
    numero: "45",
    nombreCliente: 'Valentina Paredes',
    fecha: '29/04/2022',
    items: [{id:"23", precio:"500", cantidad:"2"}, {id:"24", precio:"300", cantidad:"1"} ]
}

//Ejercicio 2
function createContador(){
    let contar=0;
    return function contador(){
        return contar+=1;
    }
}
const contar = createContador();
console.log(contar());//1
console.log(contar());//2
console.log(contar());//3

//Ejercicio 3
function createGame(){
    
    return function devolverNum(num){
        let numSecreto = Math.floor(Math.random()*101);
            if(num>numSecreto) return "Muy alto!";
            else if(num<numSecreto) return "Muy bajo!";
            else if(num===numSecreto) return "Lo adivinaste, felicitaciones!"
        }
}
const guess = createGame() // numero secreto: 5
console.log(guess(8)) // "Muy alto!"
console.log(guess(4)) // "Muy bajo!"
console.log(guess(5))// "Lo adivinaste, felicitaciones!"