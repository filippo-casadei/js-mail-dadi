// Crea una lista di email di invitati ad una festa.
// Chiedi all utente la sua email,
// Controlla che sia nella lista di chi può accedere,
// Stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.


// step 1: creo un array che contenga 10 mail.
const emails = ["Scar@gmail.com", "Jafar@gmail.com", "Ursula@gmail.com", "Malefica@gmail.com",
    "Crudelia@yahoo.it", "Ade@libero.it", "Gaston@libero.it", "Frollo@gmail.com",
    "Uncino@libero.it", "Yzma@yahoo.com"]

// step 2: devo chiedere un input all'utente quindi inserirò un prompt.
let emailUtente = prompt("Inserisci qui la tua mail");

// step 3: creo la variabile "trovato" alla quale darò valore "false" di base,
// che cambierà in true nel caso di corrispondenza con la mail inserita.
let trovato = false;

// step 4: creo un ciclo for che legga tutte le mail.