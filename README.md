# AngularBlog

Esse é um projeto de blog criado com Angular 15, usando componentes como title, big-card, small-card e menu. Os dados são obtidos de forma dinâmica a partir de um array de objetos chamado "dataFake".

Na página inicial do blog, o conteúdo é apresentado dinamicamente usando o ngFor, passando os dados para os componentes para renderização na tela. Cada card possui um link no título que, ao ser clicado, direciona para a página de conteúdo, passando o ID do conteúdo como parâmetro para renderizar o conteúdo específico daquele ID.

Para destacar, foi criada uma animação para simular o efeito de uma máquina de escrever para exibir um texto de forma animada. Essa animação é dinâmica e foi desenvolvida na classe "Typewriter".

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Como executar o projeto

1. Clone o repositório do projeto
2. Execute o comando `npm install` para instalar as dependências do projeto
3. Execute o comando `ng serve` para iniciar o servidor local
4. Acesse `http://localhost:4200` no seu navegador para visualizar o projeto

## Tecnologias utilizadas

* Angular 15
* HTML
* CSS
* TypeScript

## Autor

* Wellysson Nascimento Rocha

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE.md para mais detalhes.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
