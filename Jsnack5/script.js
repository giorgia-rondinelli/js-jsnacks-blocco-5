const colori=['blu','rosso','verde','giallo','viola']
const num1=2
const num2=5

const compresi=colori.filter ((colore,indice)=>{
 if( indice>=num1 && indice<=num2){
 return true}
 return false
})
console.log(compresi)