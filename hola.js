const items = [
    { name: 'Squirtle', price: 21 },
    { name: 'Pikachu', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Charmander', price: 60 }
  ]
/* items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
}) */

items.sort ((a,b) => a.price > b.price );

