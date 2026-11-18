//RESUELVE LOS EJERCICIOS AQUI

//EJERCICIO 1

const numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados() {
    return numbers.map(function(number) { //Recorremos el array y ejecuta la funcion por cada elemento
        return Math.pow(number, number) //Elevo cada numero a si mismo
    })
}

//EJERCICIO 2

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']

const paises = ['Italia', 'Japón', 'Valencia'];

const result2 = foodList.map(function(comida, index) { //Recorremos el array 
    if (index === 3) {
        return `Aunque no como carne, el ${comida} es sabroso`; //Si el elemento esta en la posicion 3 devolvemos esto
    }
    else {
    return `Como soy de ${paises[index]}, amo comer ${comida}`} //Y sino este
})
// console.log(result2)

//EJERCICIO 3

const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

const result3 = staff.map(function(persona) { //Recorremos los staff
    return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies}`;
     // Devolvemos frase
});

console.log(result3)
 
//EJERCICIO 4

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(function(number) { //Filtramos los elementos number del array 
    return number % 2 !== 0 //devuelvo si no es par 
})



//EJERCICIO 5

const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }
];

const comidaVeg = foodList2.filter(function(food) { //filtramos la comida vegana 
    return food.isVeggie; //si es vegana, devolvemos
});

// console.log(comidaVeg)

const result5 = comidaVeg.map(function(food) { //recorremos la comida vegana que tenemos y poder pasarlo
    return `Que rica ${food.name} me voy a comer!` , `Que rico ${food.name} me voy a comer!`
})
console.log(result5)

//EJERCICIO 6

const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

const masDe300 = inventory.filter(function(elemento) { //filtramos los elementos que son mayor a 300
    return elemento.price > 300;
});

console.log(masDe300)
const result6 = masDe300.map(function(elemento) { //recorremos los elementos filtrados
    return elemento.name;
});

console.log(result6)

//EJERCICIO 7

const numeros3 = [39, 2, 4, 25, 62];

let result7 = 1;

for (let i = 0; i < numeros3.length; i++) { 
  result7 = result7 * numeros3[i]; // Multiplicamos el resultado por el numero
//que encontramos en la posición del array
}

console.log(result7);

//EJERCICIO 8




//EJERCICIO 9