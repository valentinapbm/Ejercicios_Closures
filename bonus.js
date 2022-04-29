var numero;

process.stdout.write("Ingresa un número del 1 al 100:")
process.stdin.on('data', function devolverNum(num){
            let numSecreto = Math.floor(Math.random()*101);
            if(num>numSecreto){
                process.stdout.write("Muy alto!");
            }
            else if(num<numSecreto) {
                process.stdout.write( "Muy bajo!");
            }
            else if(num==numSecreto){
                process.stdout.write( "Lo adivinaste,felicitaciones!");
            
            }
            process.exit();
        }
)