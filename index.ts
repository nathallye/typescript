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
// interface IUsuario {
//   id: string;
//   email: string;
// }

// interface IAdmin extends IUsuario {
//   cargo: 'gerente' | 'coordenador' | 'supervisor'
// }

// function redirecione(usuario: IUsuario | IAdmin) {
//   if ('cargo' in usuario) {
//     // redirecionar para a área de admin
//   }

//   // redirecinar para a área do usuário
// }


// CARACTER "?" PARA VARIÁVEIS OPCIONAIS
// interface IUsuario {
//   id: string;
//   email: string;
//   cargo?: 'gerente' | 'coordenador' | 'supervisor' // valor que pode ou não está definido em IUsuário. Se estiver definifo, é um usuário admin
// }

// function redirecione(usuario: IUsuario) {
//   if (usuario.cargo) { // se usuário tiver o atributo cargo
//     // redirecionar para a área de admin
//   }

//   // redirecinar para a área do usuário
// }


// CRIANDO VARIÁVEIS COM PROPRIEDADE READONLY(SOMENTE LEITURA) & PRIVATE
// interface Cachorro {
//   nome: string;
//   idade: number;
//   parqueFavorito?: string; // valor de parqueFavorito que pode ou não está definido, variável opcional.
// }

// type CachorroSomenteLeitura = {
//   +readonly [K in keyof Cachorro]-?: Cachorro[K]; // interando todos os itens e informando que esses valores vão ser somente de leitura
//   // + adicionando o readony e - removendo os elementos opcionais dentro dessa classe
// }

// class MeuCachorro implements CachorroSomenteLeitura {
//   idade;
//   nome;
//   parqueFavorito;

//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
// }

// const cao = new MeuCachorro('Apolo', 12);


// IMPORTANDO BIBLIOTECAS COM TYPESCRIPT
// import $ from 'jquery';

// $.fn.extend({
//   novaFuncao() { // vamos extender a biblioteca
//     console.log('Chamou a nova função.');
//   }
// });

// $('body').novaFuncao();


// OMIT
interface Pessoa {
  nome: string;
  idade: number;
  nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> { // nesse caso a interface Brasileiro, recebe todos os atributos de Pessoa, exeto 'nacionalidade'

}

const brasileiro: Brasileiro = {
  nome: 'Gabriel',
  idade: 22
}