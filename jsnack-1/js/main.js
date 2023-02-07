const macchine = [
    {
        marca: "Ford",
        modello: "Fiesta",
        alimentazione: "Benzina"
    },

    {
        marca: "Renault",
        modello: "Clio",
        alimentazione: "Diesel"
    },

    {
        marca: "Ford",
        modello: "Fiesta",
        alimentazione: "GPL"
    },

    {
        marca: "Renault",
        modello: "Clio",
        alimentazione: "Elettrico"
    },

    {
        marca: "Ford",
        modello: "Fiesta",
        alimentazione: "Metano"
    },

    {
        marca: "Ford",
        modello: "Fiesta",
        alimentazione: "Benzina"
    },

    {
        marca: "Renault",
        modello: "Clio",
        alimentazione: "Diesel"
    },

    {
        marca: "Ford",
        modello: "Fiesta",
        alimentazione: "GPL"
    },

    {
        marca: "Renault",
        modello: "Clio",
        alimentazione: "Elettrico"
    },

    {
        marca: "Ford",
        modello: "Fiesta",
        alimentazione: "Metano"
    },
];

// Dividi le automobili in 3 array separati: 

// nel primo array solo le auto a benzina,

// const macchine_benzina = macchine.filter((macchina) => {
//     if(macchina.alimentazione == "Benzina") {
//         return true;
//     }
//     return false;
// });

// const macchine_benzina = macchine.filter((macchina) => {
//     return macchina.alimentazione == "Benzina";
// });

const macchine_benzina = macchine.filter(macchina => macchina.alimentazione == "Benzina");

// nel secondo solo le auto a diesel,

const macchine_diesel = macchine.filter(macchina => macchina.alimentazione == "Diesel");

// nel terzo il resto delle auto.

const macchine_diverse = macchine.filter(macchina => macchina.alimentazione != "Benzina" && macchina.alimentazione != "Diesel");

// Infine stampa separatamente i 3 array.

console.log(macchine_benzina);
console.log(macchine_diesel);
console.log(macchine_diverse);