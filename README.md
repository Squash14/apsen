# Introdução

Estas instruções lhe darão uma cópia do projeto utilizando framework cypress para o funcionamento em sua máquina local para fins de desenvolvimento e teste.

# Linguagens e frameworks utilizados

O projeto utiliza o framework Cypress de automação de testes e linguagem de programação JavaScript.

## Pré-requisitos

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)(versão ^8)
- [Npm](https://docs.npmjs.com/cli/init/)
- [Java](https://www.java.com/pt_BR/download/)(versão ^8)
- [git](https://git-scm.com/downloads/)


# Estrutura do Projeto

| Diretório                    	| Finalidade dos arquivos 	                                                                                | 
|------------------------------	|---------------------------------------------------------------------------------------------------------- |
| \cypress\fixtures   			| Configuração, dados de envio, retorno e resultado esperado utilizados nos testes                          |
| \cypress\e2e          		| Cenários de testes automatizados                                                     						|
| \cypress\plugins    			| Relacionados com plugins instalados                                               	            		|
| \cypress\reports              | Relacionados com os reports gerados ao rodar os testes via linha de comando                      			|
| \cypress\support    			| Comandos customizados e de configurações globais                   	                    				|

> Para verificar a versão do Node.js instalada em seu computador, execute o comando `node -v`, você dever ver algo como `v18.17.1`. Caso não tenha o Node.js instalado, utilize a tecla `Ctrl` + o link acima para baixá-lo e instalá-lo.

> Para verificar a versão do gerenciador npm instalada em seu computador, execute o comando `npm -v`, você dever ver algo como `9.8.1`. Caso não tenha o npm instalado, utilize a tecla `Ctrl` + o link acima para baixá-lo e instalá-lo.

> Para verificar a versão do Java instalada em seu computador, execute o comando `java -version`, você dever ver algo como `java version "17.0.8" 2023-07-18 LTS`. Caso não tenha o java instalado, utilize a tecla `Ctrl` + o link acima para baixá-lo e instalá-lo.

> Para verificar a versão do git instalada em seu computador, execute o comando `git --version`, você dever ver algo como `git version 2.46.0.windows.1`. Caso não tenha o git instalado, utilize a tecla `Ctrl` + o link acima para baixá-lo e instalá-lo.

# Variaveis de ambientes

> Caso não tenha visualizado nenhuma das versões acima, deve verificar as variaveis de ambientes das respectivas versões acima.

Windows 10
> Em Pesquisar, procure e selecione: Sistema (Painel de Controle)

> Clique no link Configurações avançadas do sistema.

> Clique em Variáveis de Ambiente. Na seção Variáveis do Sistema localize a variável de ambiente PATH e selecione-a. Clique em Editar. Se a variável de ambiente PATH não existir, clique em Novo.

> Na janela Editar Variável de Sistema (ou Nova Variável de Sistema), especifique o valor da variável de ambiente PATH. Clique em OK. Feche todas as janelas restantes clicando em OK.

> Reabra a janela Prompt de comando e execute os comandos acima listados.

## Problemas resolvidos durante a configuração

Caso dê erro "Cypress verification timed out"
```
baixar o zip do cypress e substituir todos os arquivos na pasta onde estiver informando
```
Caso dê erro "verification timed out after 30000 milliseconds"
```
alterar o valor no seguinte caminho: node_modules\cypress\lib\tasks\verify.js para 100000
Ex.: const VERIFY_TEST_RUNNER_TIMEOUT_MS = 100000;
```
Caso dê erro de certificado
```
baixar o zip do cypress e adicionar para instalar direto pelo binário, colocando no .npmrc com o caminho do zip

Criar duas novas variaveis de sistema:

AVM_NTLM_DISABLED
Valor: 1

NODE_TLS_REJECT_UNAUTHORIZED
Valor: 0
```

# Instalando a biblioteca Cypress

1. Inicie o VSCode
```
Execute o comando: .code
```
2. Acesse o `Terminal`

3. Executar o comando para instalar a biblioteca Cypress com a versão utilizada no projeto
```
npm install cypress@13.1.0
```
4. Será iniciada a instalação da biblioteca Cypress:

# Executando os testes

Alguns commandos foram configurados no arquivo package.json, basta rodar:
```
npm run <comando>
```
Exemplo:
- Para executar os testes no navegador, execute o comando `npx cypress open` no console (cmd) ou no terminal VSCode.
- Para executar os testes através do terminal, execute o comando `npm run test` no console (cmd) ou no próprio terminal VSCode para iniciar o painel do cypress (headless).


# Desenvolvida

Suíte de testes desenvolvida por **Rafael Torres dos Santos**

Qualquer dúvida fiquem a vontade para me chamar que ajudo no que for possível!

# Referências

https://www.cypress.io/

https://www.npmjs.com/

https://git-scm.com/