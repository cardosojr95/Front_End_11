let num_alunos = 10;

for (let contador = 0; contador<= num_alunos; contador++)
{
    if (contador==0){
        console.log(`${contador} - ZERO`)
    }
    else if((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
    else {
        console.log(`${contador} - ÍMPAR`)
    }
}