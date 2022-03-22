// function soma(a: number, b: number) {
//   return a + b;
// }

// soma(2, 3)

// INTERFACES
// interface IAnimal {
//   nome: string;
//   tipo: 'terrestre' | 'aquático';
//   domestico: boolean;
//   executarRugido(alturaEmDecibeis: number): void; // podemos implementar funções também
// }

// interface IFelino extends IAnimal { // forma de herança
//   visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//   porte: 'pequeno' | 'medio' | 'grande';
// }

// const animal: IAnimal = {
//   nome: 'Elefante',
//   tipo: 'terrestre',
//   executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
// }

// animal.executarRugido(50);

// const felino: IFelino = {
//   nome: 'Leão',
//   tipo: 'terrestre',
//   visaoNoturna: true,
//   executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
// }

// felino.executarRugido(50);

// TYPES
// type IDomestico = IFelino | ICanino; // Podemos definir uma ou outra interface, utilizando o types

// const animal2: IDomestico = {
//   domestico: true,
//   nome: 'cachorro',
//   porte: 'grande',
//   tipo: 'terrestre'
// }

// TRATANDO A TAG INPUT
// const input = document.getElementById('input') as HTMLInputElement; // informando ao typescript que esse elemento é do tipo input

// input.addEventListener('input', (event) => {
//   const i = event.currentTarget as HTMLInputElement;
// });


// GENERIC TYPES
// function adicionaApendiceALista<T>(array: any[], valor: T) {
//   return array.map(item => item + valor);
// }

// adicionaApendiceALista([1, 2, 3, 4], 6);

// CONDICIONAIS A PARTIR DE PARÂMETROS 

interface IUsuario {
  id: string;
  email: string;
}

interface IAdmin extends IUsuario {
  cargo: 'gerente' | 'coordenador' | 'supervisor'
}

function redirecione(usuario: IUsuario | IAdmin) {
  if ('cargo' in usuario) {
    // redirecionar para a área de admin
  }

  // redirecinar para a área do usuário

}