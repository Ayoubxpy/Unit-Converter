
let inputEl = document.getElementById("input-btn")
let convertEl = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204
const feetToMeter = 0.305
const gallonToLiter = 3.788
const poundToKilo = 0.454

convertEl.addEventListener("click", function() {
    let inputValue = inputEl.value
    lengthEl.textContent = `${inputValue} meters = ${(inputValue * meterToFeet).toFixed(3)} feet | ${inputValue} feet = ${(inputValue * feetToMeter).toFixed(3)} meters`
    volumeEl.textContent = `${inputValue} Liter = ${(inputValue * literToGallon).toFixed(3)} Gallon | ${inputValue} Gallon = ${(inputValue * gallonToLiter).toFixed(3)} Liter`
    massEl.textContent   = `${inputValue} Kilogram  = ${(inputValue * kiloToPound).toFixed(3)} Pound | ${inputValue} Pound = ${(inputValue * poundToKilo).toFixed(3)} Kilogram `
})