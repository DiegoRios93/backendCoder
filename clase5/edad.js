const moment = require("moment");

let now = moment()
let cumple = moment("06-05-1993","MM-DD-YYYY")

const difAño = now.diff(cumple, "years")
const difDias = now.diff(cumple, "days")
const difMinutos = now.diff(cumple, "minutes")

console.log(`Hoy es ${now}`)
console.log(`Tengo ${difAño} años`)
console.log(difDias)
console.log(difMinutos)