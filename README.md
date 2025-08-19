# QA-Commerce

### Loja virtual Geek para simulação de testes 

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/
-Visual Studio Code ( ou editor de sua prefrência) - você encontra em: https://code.visualstudio.com/download
-Git: você encontra em: https://git-scm.com/downloads

Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/fabioaraujoqa/qa-commerce.git
```
```
cd qa-commerce
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para subir o servidor e o banco:
```
npm start
```

No console vai aparecer os endereços do site e do banco. 
O site você acessaem: http://localhost:3000/

A documentação funciona em: http://localhost:3000/api-docs/

*Parceria: Fábio Araújo, Bruna Emerich e Tamara Fontanella

### para teste foi criado cenarios 

acesso minha conta - para usuarios já cadastrados 
carrinho - para inclusão de novas compras e confirmação de produtos incluidos 
checkout compra - após adicionar compra fazer preenchimento do cadastro 
login - para acesso a pagina principal 
remover do carrinho - remoção de produtos e confirmação de carrinho vazio 

### fazer instalação 
-- no visual studio Cucumber (Gherkin) vai ajudar na montagem dos cenarios 
-- iniciar o projeto npm init -y
-- npm install atualização das dependencias 
-- Instalar o cypress npm install cypress@^14.5.4 --save-dev
-- Instalar o Cucumber Preprocessor 
      npm install @badeball/cypress-cucumber-preprocessor@^22.2.0 --save-dev
      npm install cypress-cucumber-preprocessor@^4.3.1 --save-dev
-- Instalar o Esbuild Preprocessor
       npm install @bahmutov/cypress-esbuild-preprocessor@^2.2.5 --save-dev
-- Configurar Cypress para usar Cucumber
      cypress.config.js 
           const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
  },
});

-- Criar estrutura de pastas
    cypress/
  e2e/
    features/
    step_definitions/
  support/

-- Rodar Cypress
    npx cypress open
ou para rodar headless: npx cypress run

### escolher icone e2e Testing - escolher browser a sua escolha dar start e testes E2E specs já serão apresentados 

Wilson Sousa - Qa automation 







