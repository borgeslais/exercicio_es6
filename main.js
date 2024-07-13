// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: "Ana", nota: 7 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carla", nota: 8 },
    { nome: "Diego", nota: 6 },
    { nome: "Elena", nota: 4 }
  ];
  
  // Função para filtrar alunos com nota maior ou igual a 6
  function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
  }
  
  // Chamando a função e exibindo os alunos aprovados
  const alunosAprovados = filtrarAprovados(alunos);
  console.log(alunosAprovados);
  