import { setTimeout } from "timers";

function hacerAlgoPromesa () {
    return new Promise (
        function (resolve, reject) {
            console.log ('hacer algo que ocupa un tiempo...');
            setTimeout (resolve(

            ), 1000);
        }
    )
}

hacerAlgoPromesa().then(
    () => {console.log('Todo OK.')}, //en caso de acierto
    () => {}  //en caso de error 
)