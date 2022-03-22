# TypeScript

## O que é?
O TypeScript adiciona sintaxe ao JavaScript para oferecer suporte a uma integração mais estreita ao editor. Detecte erros no início do seu editor.

O código TypeScript é convertido em JavaScript, que é executado em qualquer lugar que o JavaScript seja executado: em um navegador, em Node.js ou Deno e em seus aplicativos.

O TypeScript entende JavaScript e usa inferência de tipos para fornecer ótimas ferramentas sem código adicional.


## bundle parcel para compilar o ts e funcionar no js (ler mais)

## JavaScript X TypeScript

**O que seria assim em JS:**
``` JavaScript
function soma (a, b) {
  if (typeof a === 'number' && typeof b === 'number');
  return a + b;
}

soma(1, 2); // não aceita string, como soma('a', 'b')
```

**Fica assim em TS:**
``` TypeScript
function soma (a: number, b: number) { // aqui conseguimos informar o tipo do parâmetro
  return a + b;
}

soma(1, 2); // não aceita string, como soma('a', 'b')
```

## Interfaces
São contratos para implementarmos as nossas classes.

**Exemplo**

``` TypeScript
interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
}

interface IFelino extends IAnimal { // forma de herança
  visaoNoturna: boolean;
}

const animal: IAnimal = {
  nome: 'Leão',
  tipo: 'terrestre' // o tipo dele pode ser somente terreste ou aquático, de acordo com o que foi definido na Iterface Animal
}

const felino: IFelino = {
  nome: 'Leão',
  tipo: 'terrestre',
  visaoNoturna: true,
}
```

## Types
Defini uma escrutura de dados para os parâmetros de classes ou funções, para fazer a validação deles.

``` TypeScript
interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
}

interface IFelino extends IAnimal { // forma de herança
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande';
}

const felino: IFelino = {
  nome: 'Leão',
  tipo: 'terrestre',
  visaoNoturna: true,
}

type IDomestico = IFelino | ICanino; // Podemos definir uma ou outra interface, utilizando o types

const animal2: IDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: 'grande',
  tipo: 'terrestre'
}
```

## Tratando a tag input
É necessário informar que esse elemento não é um elemento gênerico da página e sim especificamente um input.

``` TypeScript
const input = document.getElementById('input') as HTMLInputElement; // informando ao typescript que esse elemento é do tipo input

input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement;
});
```

## Generic types
Quando não sabemos o tipo do valor de entrada podemos usar os colchetes angulares **<>** e dentro dessa função passar um valor tipo vai ser inferido de acordo com a entrada. Comumente é usado o **<T>**.

O tipo **any** recebe qualquer tipo. Se passarmos **any[]** significa que vao receber um array de "qualquer coisa".

``` TypeScript
function adicionaApendiceALista<T>(array: any[], valor: T) {
  return array.map(item => item + valor);
}

adicionaApendiceALista([1, 2, 3, 4], 6);
```

## Condicionas a partir de parâmetros
Podemos usar condicionais com o **in** para verificar se determinado item possui determinado parâmetro.

``` TypeScript
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
```

## Caracter "?" para variáveis opcionais 
Usando o caracter "?" após o nome da variável faz com que ela seja um dado opcional.

 ``` JavaScript
interface IUsuario {
  id: string;
  email: string;
  cargo?: 'gerente' | 'coordenador' | 'supervisor' // valor que pode ou não está definido em IUsuário. Se estiver é um usuário admin
}

function redirecione(usuario: IUsuario) {
  if (usuario.cargo) { // se usuário tiver o atributo cargo
    // redirecionar para a área de admin
  }

  // redirecinar para a área do usuário
}
```

## Criando variáveis com propriedade readonly(somente leitura)
Usamos a propriedade readonly, para que não seja possível a alteração dos valores dos atributos de uma interface.

``` JavaScript
interface Cachorro {
  nome: string;
  idade: number;
  parqueFavorito?: string; // valor de parqueFavorito que pode ou não está definido, variável opcional.
}

type CachorroSomenteLeitura = {
  +readonly [K in keyof Cachorro]-?: Cachorro[K]; // interando todos os itens e informando que esses valores vão ser somente de leitura
  // + adicionando o readony e - removendo os elementos opcionais dentro dessa classe
}

class MeuCachorro implements CachorroSomenteLeitura {
  idade;
  nome;
  parqueFavorito;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro('Apolo', 12);
```

## Importando bibliotecas com typescript

### Como estender uma biblioteca sem mexer nos types já definidos dentro dela?
O typescript tem um padrão para isso.

1° Criar um arquivo typings.d.ts
Nesse vai ser definido os types gerais da aplicação. O que adicionarmos aqui, se tiver o mesmo nome dos types definidos da biblioteca externa que estamos utilizando, ele simplesmente vai juntar todas as informações.

## Omit
Para "excluir" um atributo na classe que "herda" uma determina interface.

``` TypeScript
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
```