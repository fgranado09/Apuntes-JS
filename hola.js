const miCompra = [
    { nombre: 'Desarrollo Web', precio: 20000 },
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 }
]

const total = miCompra.reduce((acc, el) => acc + el.precio, 0)
console.log(total) // 66250
