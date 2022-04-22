// {
//     "1":,
//     "2":,
//     "3":,
//     "4":,
//     "5":,
//     "6":,
//     "7":,
//     "8":,
//     "9":,
//     "10":,
//     "11":,
//     "12":,
//     "13":,
//     "14":,
//     "15":,
//     "16":,
//     "17":,
//     "18":,
//     "19":,
//     "20":
// }

const objetoNumeros={}

funcionAleatoria = () => Math.floor(Math.random()*20)+1;

for(let i=0; i<10000;i++){
    const numero = funcionAleatoria()
    if(!objetoNumeros[numero]){
        objetoNumeros[numero]++
    } else {
        objetoNumeros[numero]=1
    }
}

console.log(objetoNumeros)