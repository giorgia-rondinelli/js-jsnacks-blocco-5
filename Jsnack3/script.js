function parolaInversa(word){
  
 const inverso= word.split('').reverse().join('')
 return inverso
}


const testo = prompt('inserici una parola')

console.log(parolaInversa(testo))


