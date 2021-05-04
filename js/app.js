'use strict'

// Construction Function
function Donor(name,amount){
    this.name = name;
    this.age = this.randomAge();
    this.amount = amount;
    Donor.prototype.Donors.push(this);
}

// Donors Array
Donor.prototype.Donors = [];


let min = Math.ceil(18);
let max = Math.floor(30);

Donor.prototype.randomAge = function() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let table = document.getElementById ('table');

// Render Header
function renderHeader(){
    let headerRow = document.createElement('tr');
    table.appendChild (headerRow);

    let nameCell = document.createElement('th');
    nameCell.textContent = 'Donor Name';
    headerRow.appendChild(nameCell);

    let ageCell = document.createElement('th');
    ageCell.textContent = 'Donor Age';
    headerRow.appendChild(ageCell);

    let amountCell = document.createElement('th');
    amountCell.textContent = 'Amount';
    headerRow.appendChild(amountCell);
}

renderHeader();

// Render Function
Donor.prototype.render = function() {
    let donorRow = document.createElement('tr');
    table.appendChild (donorRow);

    let donorName = document.createElement('td');
    donorName.textContent = this.name;
    donorRow.appendChild(donorName);

    let donorAge = document.createElement('td');
    donorAge.textContent = this.age;
    donorRow.appendChild(donorAge);

    let donorAmount = document.createElement('td');
    donorAmount.textContent = this.amount;
    donorRow.appendChild(donorAmount);
}

// Local Storge
let saveToLocalStorge = localStorage.getItem ('Donors');
if (saveToLocalStorge) {
    saveToLocalStorge = JSON.parse(saveToLocalStorge);
    table.ineerHTML = '';
    // renderHeader();
    console.log(saveToLocalStorge);
    for (let i = 0; i < saveToLocalStorge.lenght ; i++){
        let saveToLS = new Donor (saveToLocalStorge[i].name, saveToLocalStorge[i].amount);
        let saveToLSAge = saveToLocalStorge[i].age;
        saveToLS.render();
    }
}

// Form
let form = document.getElementById ('donorForm');
form.addEventListener ('submit',addDonor);

function addDonor (event){
    event.preventDefault();
    let donName = event.target.donorName.value;
    let donAmount = event.target.amount.value;
    let newDonor = new Donor (donName,donAmount);
    newDonor.render();
    form.reset();
    localStorage.setItem('Donors',JSON.stringify(Donor.prototype.Donors));
}