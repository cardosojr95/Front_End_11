let listadepecas = ['Filtro de ar ','Roda','Pneus','Disco de freio','Motor','Amortecedor']

if (listadepecas.length < 10){
    console.log('É possível cadastrar mais peças')
}
else{
    console.log('Não há mais espaço na lista')
}

let peso = 80

if (peso < 100){
    console.log('A peça deve pesar no mínimo 100g')
}
else{
    console.log('A peça possui o peso adequado')
}

let nomepeca = 'Disco de freio'

if (nomepeca.length > 3){
    console.log('O nome da peça esta adequado para o cadastro')
}
else if(nomepeca.lenght == 0){
    console.log('O nome da peça não pode ser vazio')
}
else{
    console.log('O nome da peça deve ter mais de 3 caracteres, digite um nome adequado')
}
