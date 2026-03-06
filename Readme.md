# Convert
Aplicação web de conversão de moedas com interface moderna e intuitiva, desenvolvida com **HTML**, **CSS** e **JavaScript**. O projeto permite informar um valor em reais, selecionar uma moeda estrangeira e visualizar o resultado da conversão na tela.

A interface foi construída com foco em simplicidade e boa experiência visual, utilizando um layout centralizado, campos estilizados e área de exibição do resultado. A página possui formulário com entrada de valor, seleção de moeda e um rodapé dinâmico para mostrar o valor convertido. fileciteturn0file0 fileciteturn0file1

## Funcionalidades

- Inserção de valor em reais
- Seleção de moeda para conversão
- Exibição dinâmica do resultado
- Interface responsiva e estilizada
- Lista de moedas disponíveis:
  - Dólar Americano (USD)
  - Euro (EUR)
  - Libra Esterlina (GBP)
  - Peso Argentino (ARS)
  - Yuan Chinês (YUAN)

## Tecnologias utilizadas

- **HTML5** para a estrutura da aplicação fileciteturn0file0
- **CSS3** para estilização da interface fileciteturn0file1
- **JavaScript** para lógica de conversão e interação com a página
- **Google Fonts** para tipografia personalizada fileciteturn0file0

## Estrutura do projeto

```bash
.
├── index.html
├── styles.css
├── scripts.js
└── img/
    ├── bg.png
    ├── logo.svg
    └── chevron-down.svg
```

## Como executar o projeto

1. Clone este repositório:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto:

```bash
cd convert
```

3. Abra o arquivo `index.html` no navegador.

Se preferir, você também pode utilizar a extensão **Live Server** no VS Code para rodar o projeto localmente.

## Como funciona

O usuário informa um valor em reais no campo de entrada e escolhe a moeda desejada no seletor. Após enviar o formulário, o sistema processa a conversão e exibe o resultado no rodapé da aplicação, que inicialmente fica oculto e é mostrado somente quando houver retorno da conversão. fileciteturn0file0 fileciteturn0file1

## Layout da interface

O projeto possui:

- Fundo com imagem personalizada
- Container principal centralizado
- Formulário com campos estilizados
- Botão com efeito hover
- Área de resultado com rolagem e exibição condicional

Esses elementos ajudam a tornar a experiência mais agradável e organizada visualmente. fileciteturn0file1

## Melhorias futuras

- Consumir taxas de câmbio em tempo real por API
- Atualizar automaticamente a data da cotação
- Adicionar mais moedas
- Melhorar responsividade para telas menores
- Validar e formatar melhor o campo de valor
- Exibir mensagem de erro para entradas inválidas

## Observação

No HTML, a aplicação referencia um arquivo `scripts.js`, que deve conter a lógica da conversão. Como esse arquivo não foi enviado junto com os demais, este README descreve a estrutura visível e o comportamento esperado com base no layout atual. fileciteturn0file0

## Autor

Desenvolvido por **Matheus Sousa**.
