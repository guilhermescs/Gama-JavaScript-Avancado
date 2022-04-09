const nomeEmpresa = "Sistema Omma";
console.log(nomeEmpresa);

let listaDeReceitas = [
    {
    id: 1,
    titulo: "Cachorro quente",
    dificuldade: "simples",
    ingredientes: ["1 pão francês", "1 salsicha", "1 colher de batata palha"],
    preparo: "Loren ipsum doloe sit amet , consectetur adipiscing alit.",
    link: "http://youtube.com",
    vegano: false,
    },
];

const cadastrarReceita = (
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano
) => {
    const novaReceita = {
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano,
    };

    listaDeReceitas.push(novaReceita);
    console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};

function exibirReceitas() {
    for (let i = 0; i < listaDeReceitas.length; i++) {
      const receita = listaDeReceitas[i];
  
      console.log("--------------");
      console.log(`Título: ${receita.titulo}`);
  
      console.log("Ingredientes:");
      for (let j = 0; j < receita.ingredientes.length; j++) {
        console.log(`- ${receita.ingredientes[j]}`);
      }
  
      console.log("É vegano? ", receita.vegano ? "Sim" : "Não");
      console.log("--------------");
    }
  }

  function deletarReceita(id) {
    let novaListaDeReceitas = [];
  
    for (let i = 0; i < listaDeReceitas.length; i++) {
      const receita = listaDeReceitas[i];
  
      if (receita.id !== id) {
        novaListaDeReceitas.push(receita);
      }
    }
  
    if (novaListaDeReceitas.length === listaDeReceitas.length) {
      return console.log("Receita não encontrada");
    }
  
    listaDeReceitas = novaListaDeReceitas;
    console.log("Receita deletada com sucesso!");
  }

  cadastrarReceita(
    2,
    "Ovo frito",
    "simples",
    ["1 ovo", "1 colher de azeite", "Sal a gosto"],
    "Quebre o ovo em um copo americano, jogue sal, e leve à frigideira.",
    "https://google.com",
    false
  );

  exibirReceitas();
  deletarReceita(1);
  exibirReceitas();