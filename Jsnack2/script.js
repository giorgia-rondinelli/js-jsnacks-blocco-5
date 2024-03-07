const zucchine=[
  {
    varieta:'verdi',
    peso:70,
    lunghezza:15
  },
  {
    varieta:'chiare',
    peso:65,
    lunghezza:13
  },
  {
    varieta:'tonde',
    peso:40,
    lunghezza:8
  },
  {
    varieta:'fiorentine',
    peso:55,
    lunghezza:17
  },
  {
    varieta:'trombetta',
    peso:65,
    lunghezza:25
  },
  {
    varieta:'gialle',
    peso:74,
    lunghezza:15
  },
  {
    varieta:'siciliane',
    peso:63,
    lunghezza:18
  },
  {
    varieta:'bianche',
    peso:57,
    lunghezza:12
  },
  {
    varieta:'ortolana',
    peso:81,
    lunghezza:10
  },
  {
    varieta:'striata',
    peso:68,
    lunghezza:15
  }
 
]
// creo i 2 Array
const zucchineCorte=zucchine.filter(zucchina=>{
  if (zucchina.lunghezza<15){
    return true
  }
  return false
})
console.log(zucchineCorte)

const zucchineLunghe=zucchine.filter(zucchina=>{
  if(zucchina.lunghezza>=15){
    return true
  }
  return false
})
console.log(zucchineLunghe)


// somme 
let sommaCorte=0 

zucchineCorte.forEach(zucchina=>{
  return sommaCorte+=zucchina.peso
})
console.log(sommaCorte)

let sommaLunghe=0 

zucchineLunghe.forEach(zucchina=>{
  return sommaLunghe+=zucchina.peso
})
console.log(sommaLunghe)