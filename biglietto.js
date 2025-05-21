console.log('form')


const inputChilometri = document.getElementById('chilometri')
const selectSconto = document.getElementById('sconto')
const buttonCalcolo = document.getElementById('calcolo')
const divRisultato = document.getElementById('risultato')

console.log(inputChilometri, selectSconto, buttonCalcolo, divRisultato)


buttonCalcolo.addEventListener('click', function (calcolo) {
    calcolo.preventDefault()
    
    
    //valore dei chilometri inseriti dall'utente convertito in numeri decimali
    const chilometri = parseFloat(document.getElementById('chilometri').value)

    //sconto selezionato dall'utente se under18 o over65
    const tipoSconto = document.getElementById('sconto').value

    //prezzo del biglietto al km
    const prezzokm = 0.21
    console.log('prezzo al km', prezzokm.toFixed(2))

    let sconto = 0
    if (tipoSconto === 'under18') {     //variabile del prezzo fisso nel caso l'utente selezioni lo sconto under18
        sconto = 0.20               
    }
    else if (tipoSconto === 'over65') { //variabile del prezzo fisso nel caso l'utente selezioni lo sconto over65
        sconto = 0.40
    }
    console.log('sconto applicato',sconto)
    
    const prezzoFinale = (chilometri * prezzokm) - sconto;  //prezzo finale con eventuale sconto
    console.log('prezzo finale con/senza sconto', prezzoFinale.toFixed(2))




    divRisultato.innerHTML = `€ ${prezzoFinale.toFixed(2)}`  //stampo nel div risultato il prezzo finale con eventuali sconti
})



