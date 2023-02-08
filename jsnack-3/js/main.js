// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

const animali = [
    { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
    { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
    { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
]

// Crea un nuovo array con la lista dei mammiferi.

// ? VERSIONE 1

// const mammiferi = animali.filter((animale) => {
//     if (animale.classe == "mammiferi") {
//         return true;
//     }

//     return false;
// });

// ? VERSIONE 2

// const mammiferi = animali.filter((animale) => {
//     return animale.classe == "mammiferi";
// });

// ? VERSIONE 3

const mammiferi = animali.filter((animale) => animale.classe == "mammiferi");