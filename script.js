function soma(n1, n2) {
  return n1 + n2
}

function subtracao(n1, n2) {
  return n1 - n2
}

function multiplicacao(n1, n2) {
  return n1 * n2
}

function divisao(n1, n2) {
  return n1 / n2
}

let option 

while(true) {
 option = prompt('Escolha uma opção: 1-sum 2-sub 3-mult 4-div')
  if([1, 2, 3, 4].includes(Number(option))) {
    break;
  }
  alert('Valor inválido. Digite novamente!')
}

let n1

while (true){
  n1 = prompt('Escreva o primeiro valor: ')
  if(isNaN(n1)) {
    alert('Valor inválido. Digite novamente!')
  }
  else {
    break;
  }
}

let n2 

while (true){
  n2 = prompt('Escreva o segundo valor: ')
  if(isNaN(n2)) {
    alert('Valor inválido. Digite novamente!')
  }else {
    break;
  }
}

let resultado

switch(Number(option)){
  case 1:
    resultado = soma(n1, n2)
    alert(`A soma de ${n1} e ${n2} = ${resultado}`)
    break;

  case 2:
     resultado = subtracao(n1, n2)
    alert(`A subtração de ${n1} e ${n2} = ${resultado}`)
    break;

  case 3:
     resultado = multiplicacao(n1, n2)
    alert(`A multiplicação de ${n1} e ${n2} = ${resultado}`)
    break;

  case 4:
     resultado = divisao(n1, n2)
    alert(`A divisão de ${n1} e ${n2} = ${resultado}`)
    break;

  default:
    alert('[ERRO] opção inválida!')
    break;
}