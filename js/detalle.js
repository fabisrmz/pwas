const coffees = [

    {
        id: 1,
        nombre: "Café Americano",
        descripcion: "Un café clásico de sabor intenso y equilibrado.",
        imagen: "images/coffee1.jpg",
        precio: "$45",
        tamano: "Mediano",
        ingredientes: "Espresso y agua caliente",
        recomendacion: "Ideal para comenzar el día o acompañar un desayuno."
    },

    {
        id: 2,
        nombre: "Cappuccino",
        descripcion: "Una combinación de espresso, leche y espuma cremosa.",
        imagen: "images/coffee2.jpg",
        precio: "$55",
        tamano: "Mediano",
        ingredientes: "Espresso, leche y espuma de leche",
        recomendacion: "Perfecto para acompañar galletas, pan dulce o postres."
    },

    {
        id: 3,
        nombre: "Latte",
        descripcion: "Café suave y cremoso preparado con leche caliente.",
        imagen: "images/coffee3.jpg",
        precio: "$55",
        tamano: "Grande",
        ingredientes: "Espresso y leche caliente",
        recomendacion: "Recomendado para quienes prefieren un café de sabor suave."
    },

    {
        id: 4,
        nombre: "Moka",
        descripcion: "Una deliciosa combinación de café y chocolate.",
        imagen: "images/coffee4.jpg",
        precio: "$60",
        tamano: "Grande",
        ingredientes: "Espresso, chocolate y leche",
        recomendacion: "Excelente opción para los amantes del chocolate."
    },

    {
        id: 5,
        nombre: "Espresso",
        descripcion: "Café concentrado de sabor fuerte e intenso.",
        imagen: "images/coffee5.jpg",
        precio: "$40",
        tamano: "Pequeño",
        ingredientes: "Café espresso",
        recomendacion: "Recomendado para quienes disfrutan un café fuerte."
    },

    {
        id: 6,
        nombre: "Frappe",
        descripcion: "Bebida fría y refrescante preparada con café y hielo.",
        imagen: "images/coffee6.jpg",
        precio: "$65",
        tamano: "Grande",
        ingredientes: "Café, leche, hielo y azúcar",
        recomendacion: "Ideal para días calurosos y tardes relajadas."
    },

    {
        id: 7,
        nombre: "Café con leche",
        descripcion: "Café tradicional combinado con leche caliente.",
        imagen: "images/coffee7.jpg",
        precio: "$50",
        tamano: "Mediano",
        ingredientes: "Café y leche",
        recomendacion: "Una excelente opción para acompañar el desayuno."
    },

    {
        id: 8,
        nombre: "Café frío",
        descripcion: "Café refrescante servido con hielo.",
        imagen: "images/coffee8.jpg",
        precio: "$55",
        tamano: "Grande",
        ingredientes: "Café, hielo y leche",
        recomendacion: "Recomendado para disfrutar en una tarde calurosa."
    },

    {
        id: 9,
        nombre: "Café especial",
        descripcion: "Una combinación especial para disfrutar un sabor diferente.",
        imagen: "images/coffee9.jpg",
        precio: "$70",
        tamano: "Grande",
        ingredientes: "Café, leche y sabores especiales",
        recomendacion: "Ideal para quienes quieren probar algo diferente."
    },

    {
        id: 10,
        nombre: "Café cremoso",
        descripcion: "Café suave con una textura cremosa y agradable.",
        imagen: "images/coffee10.jpg",
        precio: "$60",
        tamano: "Mediano",
        ingredientes: "Café, leche y crema",
        recomendacion: "Perfecto para acompañar un postre."
    }

];


// Obtener el ID de la URL

const parametros = new URLSearchParams(window.location.search);

const id = parseInt(parametros.get("id"));


// Buscar el café

const coffee = coffees.find(cafe => cafe.id === id);


// Mostrar información

if (coffee) {

    document.getElementById("imagen-cafe").src = coffee.imagen;

    document.getElementById("imagen-cafe").alt = coffee.nombre;

    document.getElementById("nombre-cafe").textContent = coffee.nombre;

    document.getElementById("descripcion-cafe").textContent = coffee.descripcion;

    document.getElementById("precio-cafe").textContent = coffee.precio;

    document.getElementById("tamano-cafe").textContent = coffee.tamano;

    document.getElementById("ingredientes-cafe").textContent = coffee.ingredientes;

    document.getElementById("recomendacion-cafe").textContent = coffee.recomendacion;

}