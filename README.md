# Boas-vindas ao repositório do Desafio!

# Orientações

<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

	*  Use o comando: `git clone git@github.com:UnifelDesenvolvimentoWeb/VanillaChallengesJS.git`

* Entre na pasta do repositório que você acabou de clonar:

	*  `cd VanillaChallengesJS`

2. Instale as dependências

	* Para isso, use o seguinte comando: `npm install`

3. Crie uma branch a partir da branch `master`

	* Verifique se você está na branch `master`
	  * Exemplo: `git branch`
	* Se não estiver, mude para a branch `master`
	  * Exemplo: `git checkout master`
	* Agora, crie uma branch para qual você vai submeter os `commits` do seu projeto:
		* Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
		* Exemplo: `git checkout -b arthur-alves-vanillaChallenges`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
	* Verifique que as mudanças ainda não estão no _stage_
	  * Exemplo: `git status` (os arquivos no diretório `src` devem aparecer em vermelho)

	* Adicione o novo arquivo ao _stage_ do Git
	  * Exemplo: `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
	  *  `git status` (deve aparecer listado os arquivos do diretório `src` em verde)

	* Faça o `commit` inicial
	  * Exemplo: `git commit -m 'iniciando o projeto.'` (fazendo o primeiro commit)
	*  `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

	* Usando o exemplo anterior: `git push -u origin arthur-alves-vanillaChallenges`

6. Crie um novo `Pull Request`  _(PR)_
	* Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/UnifelDesenvolvimentoWeb/VanillaChallengesJS/pulls)
	* Clique no botão verde _"New pull request"_
	* Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
	* Coloque um título para o seu _Pull Request_
    * Exemplo: _"Cria função x"_
	* Clique no botão verde _"Create pull request"_
	* Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
	*  **Não se preocupe em preencher mais nada por enquanto!**
	* Volte até a [página de _Pull Requests_ do repositório](https://github.com/UnifelDesenvolvimentoWeb/VanillaChallengesJS/pulls) e confira que o seu _Pull Request_ está criado.
	
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />
   Todos os requisitos do projeto serão testados automaticamente por meio do Jest.

  Para rodar o avaliador automático localmente no seu projeto, execute um dos comandos abaixo:

  Para executar todos os testes utilize:
  ```bash
  npm test
  ```

  ***ou***

  Para executar um arquivo de teste específico, utilize `npm test nomeDoArquivoDeTeste`:

  ```bash
  npm test taxesCalcul
  ```

</details>

<details>
  <summary><strong>🔗 Links auxiliares para o desenvolvimento
do projeto</strong></summary><br />
  
  - [JavaScript.com](http://javascript.com/)

  - [W3Schools](https://www.w3schools.com/js/default.asp)

  - [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  - [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

</details>

## 1 - Implemente a função printElements

<details>
  <summary>
    Implemente a função <code>printElements</code> escreva um código que imprima todos os elementos de um array.
  </summary> <br />

A função `printElements` recebe um arrray por parâmetro e imprime um por um dos elementos do aray:

</details>

## 2 - Crie uma função que acha o maior número

<details>
  <summary>
  Implemente a função <code>biggerNumber</code> que retorna o maior númeo dentro de um array
 
  </summary> <br />

A função `biggerNumber` recebe um array por parâmetro.

**O que será testado:**
Exemplo
  
- Retorna o valor 20 quando a função é chamada com o parâmetro [1, 6, 8, 5, 19, 20, 10];

- Retorna o valor 5 quando a função é chamada com o parâmetro [1, 5, 3, 2];

- Retorna o valor 10 quando a função é chamada com o parâmetro [5, 8, 4, 10];

</details>


## 3 - Crie a função ignoreFirstAndLastElement

<details>
  <summary>
Implemente a função <code>ignoreFirstAndLastElement</code> e escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último

  </summary> <br />
A função `ignoreFirstAndLastElement` recebe um array como parâmetro e deve imprimir todos os elementos menos o primeiro e o ultimo.

Se o array tiver um tamanho menor que 3 deve imprimir a seguinte mensagem `'Tamanho do array inválido'`
  
  Exemplo: se a função receber o array `[1, 5, 10, 12]`, o retorno deverá ser `[5, 10]`.

**O que será testado:**
  
- Retorne o valor `['JavaScript']` se a função receber `['HTML', 'JavaScript', 'CSS']`;

- Retorne o valor `[10, 5, 20]` se a função receber `[8, 10, 5, 20, 6]` ;

- Retorne o valor `'Tamanho do array inválido'` se a função receber `[4, 7]`.


</details>


## 4 - Crie uma função que inverte a ordem de um array

<details>
  <summary>
Escreva um código que inverta a ordem dos elementos de um array.
Implemente a função <code>invertElementsArray</code> que recebe um array e retorna esse array invertido 

  </summary> <br />
  
  Exemplo:

- Caso o parâmetro passado para a função `invertElementsArray` seja o array `[8, 4, 60, 15]`, a função deverá retornar `[15, 60, 4, 8]`.

**O que será testado:**
  
- Retorne `[10, 7, 23]` quando o parâmetro passado na funcão concatName seja `[23, 7, 10]`;

- Retorne `['uva', 'banana', 'maça']` quando o parâmetro passado na funcão concatName seja `['maça', 'banana', 'uva']`;

</details>

## 5 - Crie uma função que inverte uma string

<details>
  <summary>
Implemente a função <code>invertString</code> que inverte uma string 

  </summary> <br />

A função `invertString` recebe uma string por parâmetro e retorna essa string invertida

Exemplo:

**O que será testado:**

- Retorne `etrevni` quando a string passada por parâ for `inverte`;

- Retorne `olleh` quando a string passada por parâ for `hello`;

</details>


## 6 - Crie uma função que retira os elementos duplicados

<details>
  <summary>
Implemente a função <code>noDuplicates</code> e escreva um código que receba um array de números por parâmetro e retorne o array com os elementos duplicados removidos.

  </summary> <br />
  
  Por exemplo:

- Caso o parâmetro seja um array com valores `[9, 1, 2, 3, 9, 2, 7]`, a função deverá retornar `[9, 1, 2, 3, 7]`

**O que será testado:**

- Retorne `[9, 2, 3, 1]` quando o parâmetro passado na função noDuplicates seja `[9, 1, 2, 3, 9, 1, 3]`;

- Retorne `[0, 4, 9, 1]` quando o parâmetro passado na função noDuplicates seja `[0, 4, 4, 4, 9, 1]`;

- Retorne `[0]` quando o parâmetro passado na função noDuplicates seja `[0, 0, 0]`.


</details>


## 7 - Crie uma função que calcula o salário liquido a ser receido

<details>
  <summary>
Implemente a função <code>taxesCalcul</code> que recebe por parâmetro o valor bruto (do tipo number) do salário e calcula o valor líquido.

</summary> <br />
Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

Para as faixas de impostos, use as seguintes referências:

INSS
Salário bruto até R$ 1.556,94: alíquota de 8%;
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
IR
Até R$ 1.903,98: isento de imposto de renda;
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
O cálculo deve ser o demonstrado a seguir
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

R$ 2.670,00 - salário com INSS já deduzido;
7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
R$ 142,80 - parcela a ser deduzida do imposto de renda.
Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: Salário: R$ 2612.55.
   
Exemplo:

**O que será testado:**

- A função recebe um valor do tipo number por parâmetro

- Retorna `'Salário: R$ 2612.55.'` caso o parâmeto passado seja 3000;

- Retorna `'Salário: R$ 1820'` caso o parâmeto passado seja 2000;

- Retorna `'Salário: R$ 3532.1.'` caso o parâmeto passado seja 4200;


</details>

## 8 - Crie uma função de número de telefone

<details>
  <summary>
Implemente a função  <code>formatPhoneNumber</code> que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

  </summary> <br />

Exemplo: caso o parâmetro da função seja `[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]`, a função `formatPhoneNumber` deverá retornar `(12) 34567-8901`.

- Retorne a frase `'Array com tamanho incorreto.'` se a função receber um array com tamanho diferente de 11;

- Retorne a string `'não é possível gerar um número de telefone com esses valores'` caso algum dos números do array seja **menor** que 0, **maior** que 9 ou se repita 3 vezes ou mais.


**O que será testado:**
  
- Retorne a string 'Array com tamanho incorreto.' caso o array tenha o tamanho diferente de 11;

- Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0;

- Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array seja maior que 9;

- Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais;

- Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array estejam de acordo com as especificações.


</details>

## 9 - Crie uma função que retorna o intevalo dentro de um array

<details>
  <summary>
Implemente a função  <code>getArrayNoIntervalo</code> que recebe um array e retorna um objeto com duas key, uma delas é arrayNoIntervalo que deve conter um array com o intervalo encontrado e a outa é o contador que deve conter quantos números contem nesse intervalo 
  </summary> <br />

  A função recebe 3 parâmetos, o primeiro é um `array` de números, o segundo é um número que representa o `inicio` do intervalo selecionado, o terceiro representa o `fim` do intervalo selecionado

Exemplo: caso o parâmetro da função seja `[1, 2, 3, 4, 5, 1], 2, 4`, a função `getArrayNoIntervalo` deverá retornar `{ arrayNoIntervalo: [2, 3, 4], contador: 3 };`.

**O que será testado:**

- Retorne o objeto `{ arrayNoIntervalo: [2, 3, 4], contador: 3 };` se a essa função for chamada com esses parâmetros `getArrayNoIntervalo([1, 2, 3, 4, 5, 1], 2, 4)`;

- Retorne o objeto `{ arrayNoIntervalo: [20, 63, 80], contador: 3 };` se a essa função for chamada com esses parâmetros `getArrayNoIntervalo([20, 14, 5, 6, 9, 63, 80, 120], 20, 80)`;

- Retorne o objeto `{ arrayNoIntervalo: [15, 21, 30], contador: 3 };` se a essa função for chamada com esses parâmetros `getArrayNoIntervalo([15, 4, 6, 9, 21, 30, 7], 15, 30)`;

</details>