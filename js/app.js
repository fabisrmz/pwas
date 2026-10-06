const coffees = [

    {
        id: 1,
        nombre: "Café Americano",
        descripcion: "Café tradicional recién preparado.",
        imagen: "images/coffee1.jpg"
    },

    {
        id: 2,
        nombre: "Cappuccino",
        descripcion: "Café con leche y espuma cremosa.",
        imagen: "images/coffee2.jpg"
    },

    {
        id: 3,
        nombre: "Latte",
        descripcion: "Café suave con leche caliente.",
        imagen: "images/coffee3.jpg"
    },

    {
        id: 4,
        nombre: "Moka",
        descripcion: "Café con chocolate y leche.",
        imagen: "images/coffee4.jpg"
    },

    {
        id: 5,
        nombre: "Espresso",
        descripcion: "Café intenso y concentrado.",
        imagen: "images/coffee5.jpg"
    },

    {
        id: 6,
        nombre: "Frappe",
        descripcion: "Bebida fría y refrescante.",
        imagen: "images/coffee6.jpg"
    },

    {
        id: 7,
        nombre: "Café con leche",
        descripcion: "Café suave acompañado de leche.",
        imagen: "images/coffee7.jpg"
    },

    {
        id: 8,
        nombre: "Café frío",
        descripcion: "Café refrescante servido frío.",
        imagen: "images/coffee8.jpg"
    },

    {
        id: 9,
        nombre: "Café especial",
        descripcion: "Una combinación especial de café.",
        imagen: "images/coffee9.jpg"
    },

    {
        id: 10,
        nombre: "Café cremoso",
        descripcion: "Café con una textura suave y cremosa.",
        imagen: "images/coffee10.jpg"
    }

];


const container = document.querySelector(".container");


coffees.forEach(coffee => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `

        <img 
            src="${coffee.imagen}" 
            alt="${coffee.nombre}"
        >

        <div class="card-content">

            <h3>${coffee.nombre}</h3>

            <p>${coffee.descripcion}</p>

            <button class="btn-ver-mas">
                Ver más
            </button>

        </div>

    `;


    const boton = card.querySelector(".btn-ver-mas");


    boton.addEventListener("click", () => {

        window.location.href = `detalle.html?id=${coffee.id}`;

    });


    container.appendChild(card);

});


// Service Worker

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("./serviceworker.js")
        .then(() => {
            console.log("Service Worker registrado correctamente");
        })
        .catch((error) => {
            console.log("Error al registrar el Service Worker:", error);
        });

}