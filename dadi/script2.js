//Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// step 1: creo un array con i numeri da 1 a 6.
const dadi = [1, 2, 3, 4, 5, 6];

// step 2: devo scegliere un elemento a caso dall'array.
// genero un decimale che trasformo in intero fra 0 e 5.
// Math.random genera un numero <= 0 ma <1 escluso, moltiplicato per 6 arriverò
// massimo a qualcosa tipo 5,99999, con math.floor arrotondo per difetto e il risultato
// corrispodnerà al valore dell'indice di un elemento dell'array
const indiceCasualeGiocatore = Math.floor (Math.random()  *6);

// step 3: creo 2 variabili una tiroGiocatore l'altra tiroPc 
let tiroGiocatore = dadi[indiceCasualeGiocatore];

// qui mi sono reso conto che servono due indici casuali altrimenti se uso lo stesso,
// giocatore e pc avranno sempre lo stesso numero.

// step 4: creo un indice casuale per il pc e la sua variabile tiro.
const indiceCasualePc = Math.floor (Math.random() *6);
let tiroPc = dadi[indiceCasualePc];

// step 5: creo un if dove se è maggiore TiroGiocatore, giocatore vince, se è maggiore
// tiroPc, Pc vince e se esce lo stesso numero ci sarà un pareggio.
