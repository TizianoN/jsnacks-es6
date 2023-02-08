// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const persone = [
    {
        nome: "tizio",
        cognome: "tizio",
        eta: 20
    },
    {
        nome: "caio",
        cognome: "caio",
        eta: 15
    },
    {
        nome: "sempronio",
        cognome: "sempronio",
        eta: 30
    }
];

const persone_patente = persone.map((persona) => {
    const guida = `${persona.nome} ${persona.cognome} ${(persona.eta < 18) ? "non " : ""}può guidare`;

    return {
        ...persona,
        guida
    }
})


console.log(persone);
console.log(persone_patente);