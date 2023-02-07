// ! ESEMPIO ARRAY DI STRINGHE

const personaggi_stringhe = ["pippo", "PLUTO", "Paperino"];

const personaggi_ucfirst_stringhe = personaggi_stringhe.map((personaggio) => {
    const iniziale = personaggio[0];
    const resto_del_nome = personaggio.slice(1);
    return iniziale.toUpperCase() + resto_del_nome.toLowerCase();
});

// const personaggi_ucfirst = personaggi.map((personaggio) => personaggio[0].toUpperCase() + personaggio.slice(1).toLowerCase());

console.log(personaggi_ucfirst_stringhe);

// ! ESEMPIO ARRAY DI STRINGHE

const personaggi_oggetti = [
    {
        nome: "pippo"
    },
    {
        nome: "PLUTO"
    },
    {
        nome: "Paperino"
    }
];

const personaggi_ucfirst_oggetti = personaggi_oggetti.map((personaggio) => {
    const iniziale = personaggio.nome[0];
    const resto_del_nome = personaggio.nome.slice(1);

    const new_personaggio = {
        nome: iniziale.toUpperCase() + resto_del_nome.toLowerCase()
    };

    return new_personaggio;
})

console.log(personaggi_ucfirst_oggetti);
