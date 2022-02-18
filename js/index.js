//!Inicializar datos, nombre, clave, saldo

// ! Datos Dumy

const datosDumy = [{
        nombre: "Juan",
        clave: "1234",
        saldo: 500,
    },
    {
        nombre: "Daniel",
        clave: "1234",
        saldo: 500,
    },
];

// !Variables Globales
const d = document;
const nombreIngresado = d.querySelector("#nombre"),
    claveIngresada = d.querySelector("#clave"),
    saldoIngresado = d.querySelector("#saldo-inicial"),
    saldoFinal = d.querySelector("#saldo-final"),
    buttonCrear = d.querySelector("#button-crear"),
    divGridBotones = d.querySelector("#gridbotones"),
    buttonIngresar = d.querySelector("#button-ingresar"),
    divCreateAccount = d.querySelector("#create-account"),
    monto = d.querySelector("#monto"),
    imprimirTotal = d.querySelector("#saldo-inicial"),
    buttonRetirar = d.querySelector("#button-retirar"),
    buttonConsignar = d.querySelector("#button-consignar");

let ingreso;

divGridBotones.style.display = "none";
divCreateAccount.style.display = "none";

//! Ingreso

buttonIngresar.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i < datosDumy.length; i++) {
        if (
            datosDumy[i].nombre === nombreIngresado.value &&
            datosDumy[i].clave === claveIngresada.value
        ) {
            divGridBotones.style.display = "block";
            divCreateAccount.style.display = "none";

            break;
        } else {
            divGridBotones.style.display = "none";
            divCreateAccount.style.display = "block";
        }
    }
});
const agregarUsuario = (name, password, amount) => {
    datosDumy.push({
        nombre: name,
        clave: password,
        saldo: parseFloat(amount),
    });
    console.log(datosDumy);
};


//! Creación de cuenta

function CapturarDatos(id) {
    let numero = parseInt(id);

    if (divCreateAccount.style.display == "block") {
        if (imprimirTotal.value === "") {
            imprimirTotal.value = numero;
            console.log(imprimirTotal);
        } else {
            imprimirTotal.value += numero;
        }
    } else if ((divGridBotones.style.display = "block")) {
        if (monto.value === "") {
            console.log(monto.value);
            monto.value = numero;
            console.log(monto.value);
        } else {
            monto.value += numero;
        }
    }
}

buttonCrear.addEventListener("click", (e) => {
    e.preventDefault();

    if (
        nombreIngresado.value !== "" &&
        claveIngresada.value !== "" &&
        imprimirTotal.value !== ""
    ) {
        agregarUsuario(
            nombreIngresado.value,
            claveIngresada.value,
            imprimirTotal.value
        );
    } else {
        alert(`Rellene los todos los campos`);
    }
});

//! Retirar

buttonRetirar.addEventListener("click", (e) => {
    e.preventDefault();
    for (i = 0; i < datosDumy.length; i++) {
        if (
            datosDumy[i].nombre === nombreIngresado.value &&
            datosDumy[i].clave === claveIngresada.value
        ) {
            if (parseInt(monto.value) > datosDumy[i].saldo) {
                alert(`No tienes tanto dinero en tu cuenta`);
            } else {
                datosDumy[i].saldo = datosDumy[i].saldo - parseInt(monto.value);
                console.log(datosDumy);
            }
            break;
        }
    }
});


//! Consignar
buttonConsignar.addEventListener("click", (e) => {
    e.preventDefault();
    for (i = 0; i < datosDumy.length; i++) {
        if (
            datosDumy[i].nombre === nombreIngresado.value &&
            datosDumy[i].clave === claveIngresada.value
        ) {
            datosDumy[i].saldo = datosDumy[i].saldo + parseInt(monto.value);
            console.log(datosDumy);
            break;
        }
    }
});