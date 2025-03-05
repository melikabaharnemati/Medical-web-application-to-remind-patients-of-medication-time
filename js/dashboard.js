document.addEventListener("DOMContentLoaded", function () {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
        document.getElementById("user-name").textContent = userData.name + " " + userData.lastname;
    }
});

document.getElementById("drug-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addDrug();
});

function addDrug() {
    const name = document.getElementById("drug-name").value.trim();
    const dose = document.getElementById("drug-dose").value.trim();
    const schedule = document.getElementById("drug-schedule").value.trim();
    const instruction = document.getElementById("drug-instruction").value.trim();

    if (!name || !dose || !schedule || !instruction) {
        alert("لطفا تمام فیلدها را پر کنید");
        return;
    }

    const table = document.getElementById("drug-list");
    const row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = dose;
    row.insertCell(2).textContent = schedule;
    row.insertCell(3).textContent = instruction;

    document.getElementById("no-drugs-msg").style.display = "none";
    closePopup();
}

function openPopup() {
    document.getElementById("drug-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("drug-popup").style.display = "none";
}