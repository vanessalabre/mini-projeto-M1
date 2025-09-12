let alunos = [] // lista de alunos 

function cadastrarAluno( nome,idade,notas){
    const aluno = {
        nome: nome,
        idade: idade,
        notas: notas
    }
    alunos.push(aluno)
}
cadastrarAluno('vanessa',18,[9,5,3])

//mostrando os alunos cadastrados
console.log(alunos)
alunos.forEach((aluno, index)=>
{
    console.log(
        (index + 1)+
        '-nome:' + aluno.nome +
        ' |idade:' + aluno.idade +
        ' | notas:' + aluno.notas 
    );
});

// calcular media 
function calcularmedia(notas){
    let soma = notas.reduce((acc,nota) => acc + nota, 0)
    return soma / notas.length
}

// relatorio de desempenho
function relatorio() {
  console.log('=== relatorio de aluno ===')
  alunos.forEach(aluno => {
    let media = calcularmedia(aluno.notas)
    let status = ''

    if (media >= 7) {
      status = 'aprovado'
    } else if (media >= 5) {
      status = 'recuperação'
    } else {
      status = 'reprovado'
    }

    console.log (`${aluno.nome} - media: ${media.toFixed(2)} - ${status}`)
  }) // fecha o forEach
} // fecha a função
function buscar(nome){
  console.log(alunos.filter((aluno) => 
  aluno.nome == nome
))
}
('buscar vanessa')
//chamando função
relatorio()