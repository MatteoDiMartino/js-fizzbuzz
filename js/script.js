// definisco il contenitore con una variabile che in questo caso 
// sarà una ul

// Prendo i numeri
    // per far ciò necessiterò di un ciclo for
        // e andrò a raccogliere tutto tramite una variabile
            // all'interno del ciclo
                // definisco la creazione di una nuova li
                    // per poi inserirli dentro una li
                        // e buttarlo dentro l'html
                            // e verificarne il funzionamento
// Verifico i numeri multipli di 3
//  poi di 5
//  poi di entrambi
    // Devo ragionare con le condizioni if, else if, else

let unoList = document.querySelector('#unList');

for (let i = 1; i<=100; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = i;
    unoList.append(newLi);

    if (i % 3 === 0 && i % 5 === 0) {
        newLi = 'fizzbuzz';
    } else if (i % 3 === 0) {
        newLi = 'fizz';
    } else if (i % 5 === 0) {
        newLi = 'buzz';
    } else {
        newLi = i;
    }

    console.log (newLi);
    
};
