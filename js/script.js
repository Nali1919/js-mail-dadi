console.log('Js Ok!')

const numeroUtente = Math.floor(Math.random() * 6) +1;

console.log(numeroUtente)

document.getElementById('utente').innerHTML = numeroUtente

const numeroPc = Math.floor(Math.random() * 6) +1;

console.log(numeroPc)

document.getElementById('pc').innerHTML = numeroPc

const risultato = document.getElementById('risultato')

const solution = document.createElement('div')

risultato.append(solution)

let result 



if (numeroUtente > numeroPc)
    
    result='Vincitore utente'
    
    console.log(result)

    solution.innerHTML= (result)

if (numeroPc > numeroUtente)
    result='Vincitore Pc'

    console.log(result)

    solution.innerHTML= (result)

if (numeroPc === numeroUtente)
    result='X'

    console.log(result)

    solution.innerHTML= (result)

    