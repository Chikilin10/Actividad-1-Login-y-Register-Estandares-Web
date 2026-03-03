// Referencias
const selectDia = document.getElementById("dia");
const selectMes = document.getElementById("mes");
const selectAño = document.getElementById("año");

// DÍAS
for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectDia.appendChild(option);
}

// MESES
const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

meses.forEach((mes, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = mes;
    selectMes.appendChild(option);
});

// AÑOS (desde año actual hacia atrás 100 años)
const añoActual = new Date().getFullYear();

for (let i = añoActual; i >= añoActual - 100; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectAño.appendChild(option);
}