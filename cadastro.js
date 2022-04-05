let dataEvento = new Date(2022, 06, 01)
let dataAtual = new Date()
let dataNascimento = (18)
let participantesPalestrantes = (100)

if (dataEvento > dataAtual) {
  console.log ("Evento confirmado. Informe a data de nascimento.")  
} else {
  console.log ("data inválida. Não é possível realizar o cadastro")
}

if (dataAtual - dataNascimento >=18) {
  console.log ("Acessar cadastro de participantes")
} else {
  console.log ("Não é permitido cadastro de menores")
}

if (participantesPalestrantes >100) {
  console.log ("Não é possivel realizar o cadastro. Excedido o número de vagas, cadastre-se no próximo evento")
} else {
  console.log ("informe seu NOME")
}
//No material do curso não aprendi e não é abordado funções do java script que façam a função leia. Como no fluxograma que fiz
// usei esse comando, não consegui aplicar na tarefa por não saber como fazer.

 //Leia (nome)
 console.log ("Informe seu CPF")
 //Leia (CPF)
 console.log ("Cadastro concluído com sucesso")
