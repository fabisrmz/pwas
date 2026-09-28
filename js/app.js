const coffees = [

    {
        nombre: "Café Americano",
        descripcion: "Café tradicional recién preparado.",
        imagen: "images/coffee1.jpg",
        categoria: "caliente"
    },

    {
        nombre: "Cappuccino",
        descripcion: "Café con leche y espuma cremosa.",
        imagen: "images/coffee2.jpg",
        categoria: "caliente"
    },

    {
        nombre: "Latte",
        descripcion: "Café suave con leche caliente.",
        imagen: "images/coffee3.jpg",
        categoria: "caliente"
    },

    {
        nombre: "Moka",
        descripcion: "Café con chocolate y leche.",
        imagen: "images/coffee4.jpg",
        categoria: "especial"
    },

    {
        nombre: "Espresso",
        descripcion: "Café intenso y concentrado.",
        imagen: "images/coffee5.jpg",
        categoria: "caliente"
    },

    {
        nombre: "Frappe",
        descripcion: "Bebida fría y refrescante.",
        imagen: "images/coffee6.jpg",
        categoria: "frio"
    },

    {
        nombre: "Café con leche",
        descripcion: "Café suave acompañado de leche.",
        imagen: "images/coffee7.jpg",
        categoria: "caliente"
    },

    {
        nombre: "Café frío",
        descripcion: "Café refrescante servido frío.",
        imagen: "images/coffee8.jpg",
        categoria: "frio"
    },

    {
        nombre: "Café especial",
        descripcion: "Una combinación especial de café.",
        imagen: "images/coffee9.jpg",
        categoria: "especial"
    },

    {
        nombre: "Café cremoso",
        descripcion: "Café con una textura suave y cremosa.",
        imagen: "images/coffee10.jpg",
        categoria: "especial"
    }

];


const container = document.querySelector(".container");

const searchInput = document.querySelector("#searchInput");

const clearSearch = document.querySelector("#clearSearch");

const categories = document.querySelectorAll(".category");

const noResults = document.querySelector("#noResults");


/* =========================
   MOSTRAR CAFÉS
========================= */

function mostrarCafes(lista) {

    container.innerHTML = "";

    if (lista.length === 0) {

        noResults.style.display = "block";

        return;

    }

    noResults.style.display = "none";


    lista.forEach(coffee => {

        const card = document.createElement("div");

        card.classList.add("card");


        card.innerHTML = `

            <img
                src="${coffee.imagen}"
                alt="${coffee.nombre}"
            >

            <div class="card-content">

                <h3>
                    ${coffee.nombre}
                </h3>

                <p>
                    ${coffee.descripcion}
                </p>

                <button
                    class="more-button"
                    data-name="${coffee.nombre}"
                >
                    Ver más
                </button>

            </div>

        `;


        container.appendChild(card);

    });


    agregarEventosBotones();

}


/* =========================
   BUSCADOR
========================= */

searchInput.addEventListener("input", filtrarCafes);


function filtrarCafes() {

    const texto = searchInput.value
        .toLowerCase()
        .trim();


    const categoriaActiva =
        document.querySelector(".category.active")
            .dataset.category;


    const filtrados = coffees.filter(coffee => {

        const coincideTexto =
            coffee.nombre
                .toLowerCase()
                .includes(texto);


        const coincideCategoria =
            categoriaActiva === "todos" ||
            coffee.categoria === categoriaActiva;


        return coincideTexto && coincideCategoria;

    });


    mostrarCafes(filtrados);

}


/* =========================
   LIMPIAR BUSQUEDA
========================= */

clearSearch.addEventListener("click", () => {

    searchInput.value = "";

    filtrarCafes();

    searchInput.focus();

});


/* =========================
   CATEGORÍAS
========================= */

categories.forEach(button => {

    button.addEventListener("click", () => {

        categories.forEach(category => {

            category.classList.remove("active");

        });


        button.classList.add("active");


        filtrarCafes();

    });

});


/* =========================
   MODAL
========================= */

const modal =
    document.querySelector("#coffeeModal");

const modalImage =
    document.querySelector("#modalImage");

const modalTitle =
    document.querySelector("#modalTitle");

const modalDescription =
    document.querySelector("#modalDescription");

const closeModal =
    document.querySelector("#closeModal");

const modalCloseButton =
    document.querySelector("#modalCloseButton");


function agregarEventosBotones() {

    const buttons =
        document.querySelectorAll(".more-button");


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const coffee =
                coffees.find(
                    item => item.nombre === button.dataset.name
                );


            if (!coffee) {
                return;
            }


            modalImage.src = coffee.imagen;

            modalImage.alt = coffee.nombre;

            modalTitle.textContent = coffee.nombre;

            modalDescription.textContent =
                coffee.descripcion;


            modal.classList.add("show");

        });

    });

}


function cerrarModal() {

    modal.classList.remove("show");

}


closeModal.addEventListener(
    "click",
    cerrarModal
);


modalCloseButton.addEventListener(
    "click",
    cerrarModal
);


modal.addEventListener("click", event => {

    if (event.target === modal) {

        cerrarModal();

    }

});


/* =========================
   INICIAR
========================= */

mostrarCafes(coffees);


/* =========================
   SERVICE WORKER
========================= */

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("./serviceworker.js")

        .then(() => {

            console.log(
                "Service Worker registrado correctamente"
            );

        })

        .catch(error => {

            console.log(
                "Error al registrar el Service Worker:",
                error
            );

        });

}


/* =========================
   INSTALACIÓN PWA
========================= */

let deferredPrompt;

const installButton =
    document.querySelector("#installButton");


installButton.style.display = "none";


window.addEventListener(
    "beforeinstallprompt",
    event => {

        event.preventDefault();

        deferredPrompt = event;

        installButton.style.display = "block";

    }
);


installButton.addEventListener(
    "click",
    async () => {

        if (!deferredPrompt) {
            return;
        }


        deferredPrompt.prompt();


        await deferredPrompt.userChoice;


        deferredPrompt = null;

        installButton.style.display = "none";

    }
);