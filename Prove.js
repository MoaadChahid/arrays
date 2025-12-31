//if e else


let a = 10
let b = 15

if (a > b ) {
   console.log(`A è più grande di B, quindi il suo valore è: ${a}`)
} else {
    console.log (`B è più grande di A, quindi il suo valore è: ${b}`)

}

let c = 25
let d = 30

c+= 10

console.log (`Il nuovo valore di C è: ${c}`)

if (c < d ) {
    console.log (`C è più piccolo di D, quindi il valore di C è: ${c}`)
    } else {
        console.log (`D è più piccolo di C, quindi il valore di D è: ${d}`)
}


//ARRAY

let Studenti = `Mario, Luca , Leo, Edoardo e Giulio `
let Studentese = `Anna, Giulia, Francesca, Martina e Sara `

console.log (`Gli studenti maschi sono: ${Studenti} ed le studentesse sono: ${Studentese}`)

let inegnanti = `Paolo, Marco e Giovanni`
let bidelli = `Silvia e Laura`
let preside = `Dott.ssa Rossi`

console.log (`Gli insegnanti Iniziano alle 8.00, è sono: ${inegnanti}, i bidelli iniziano alle 7:45, è sono: ${bidelli} e il preside Inizia alle 9:00 ,e il preside è : ${preside}`)

//

let età = 20
let CartaIdentità = false

if (età >= 18 && CartaIdentità == true) {
    console.log (`Puoi entrare nel locale, benvenuto!`)
} else if (età < 18 && CartaIdentità == true) {
    console.log (`Mi dispiace, non puoi entrare nel locale, sei minorenne!`)
}
else {
    console.log (`Mi dispiace, non puoi entrare nel locale, non hai la carta d'identità!`)
}
