# PD Case Projeto Front-End

Este é um projeto de front-end desenvolvido em Angular 17.3.11 e Node.js 20.18.0, projetado para uma equipe de desenvolvedores juniores. Este documento fornece informações completas sobre as versões escolhidas, configuração do ambiente de desenvolvimento, uso do Git e boas práticas de trabalho em equipe.

Optamos por **Angular 17.3.11** e **Node.js 20.18.0 LTS** para garantir compatibilidade e estabilidade. A versão 17.3.11 do Angular inclui melhorias de performance, segurança e escalabilidade que atendem às necessidades do projeto. A versão 20.18.0 do Node.js é a mais recente versão LTS (Long Term Support), garantindo suporte estendido, correções de segurança e confiabilidade em produção.

## Configuração do Ambiente de Desenvolvimento

Para garantir que todos os desenvolvedores utilizem a mesma versão do Node.js, recomendamos o uso do **NVM (Node Version Manager)** para gerenciar versões do Node.js. Abaixo estão as instruções detalhadas para configurar o NVM no Windows, além da instalação do Angular CLI.

### Instalando o NVM no Windows

1. Baixe o instalador do NVM para Windows:
   - Acesse [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) e baixe a versão mais recente do instalador (`nvm-setup.zip`).

2. Execute o instalador e siga as instruções. Certifique-se de instalar o NVM em um diretório diferente do diretório de instalação do Node.js para evitar conflitos.

3. Após a instalação, abra um novo terminal e verifique a versão do NVM:

```bash
nvm version
```

Instalando e Usando a Versão Correta do Node.js
Instale a versão LTS do Node.js que estamos utilizando no projeto (20.18.0):

```bash
nvm install 20.18.0
```

Defina essa versão como a ativa no ambiente:

```bash
nvm use 20.18.0
```

Verifique se a versão correta do Node.js está ativa:

```bash
node -v
```

Instalando o Angular CLI
Após configurar a versão correta do Node.js, instale o Angular CLI para facilitar o desenvolvimento Angular:

```bash
npm install -g @angular/cli@17.3.11
```

Clonando o Projeto e Instalando Dependências

Passo 1: Clonar o Repositório

Para clonar o repositório em seu diretório local, execute:

```bash
git clone https://github.com/sua-organizacao/nome-do-projeto.git
```

Passo 2: Navegar para o Diretório do Projeto
Acesse o diretório clonado:

```bash
cd nome-do-projeto
```

Passo 3: Instalar as Dependências

IMPORTANTE: Antes de instalar as dependências, confirme que está usando a versão correta do Node.js. Em alguns sistemas Windows, a execução do npm install pode exigir privilégios de administrador para evitar erros de instalação. Se necessário, abra o terminal como administrador.

Para instalar as dependências:

```bash
npm install
```

Este comando instalará todas as dependências do package.json no diretório node_modules, que é necessário para o projeto rodar corretamente.

## Estrutura de Branches no Git

Para manter a organização e a clareza no trabalho em equipe, utilizaremos uma estrutura de branches com nomenclatura específica:

- **main**: branch principal de produção, contendo a versão estável para deploy.
- **homologacao**: branch para desenvolvimento ativo e testes antes da integração na main.
- **feature**: branches curtas para novas funcionalidades ou melhorias. Removidas após o merge.
- **bugfix**: branches dedicadas a corrigir bugs específicos.
- **release**: branches usadas para preparar versões do projeto antes de lançar.
- **developer**: branches específicas para cada desenvolvedor trabalhar isoladamente.

## Convenção de Commits

Para padronizar a escrita de commits e manter um histórico organizado, seguimos a seguinte convenção:

- **feat**: Adição de uma nova funcionalidade ou serviço. 

    ```bash
    feat: criação do componente de login
    ```

- **fix**: Correção de bugs no sistema.

    ```bash
    fix: correção na função de autenticação
    ```

- **refactor**: Refatoração de código sem mudanças na lógica.

    ```bash
    refactor: renomear função de validação
    ```

- **test**: Criação ou modificação de testes.

    ```bash
    test: adicionar teste unitário para o componente de header
    ```

- **docs**: Alterações na documentação do projeto.

    ```bash
    docs: atualizar instruções de instalação no README
    ```

**Boas Práticas de Commits:**

- Commits Atômicos: Cada commit deve representar uma mudança única e lógica, facilitando o rastreamento e a reversão de alterações. Evite misturar correções de bugs com novas funcionalidades.
- Commits Pequenos e Frequentes: Preferimos commits menores e frequentes para que o histórico de desenvolvimento seja fácil de revisar e gerenciar.

## Executando o Projeto

Para iniciar o servidor de desenvolvimento primeiro certifique-se de estar no diretório do projeto e depois execute o comando:

```bash
ng serve
```

Acesse a aplicação no navegador em http://localhost:4200. O servidor recarregará automaticamente sempre que houver alterações no código.

Contribuindo

Crie uma branch para sua funcionalidade ou correção de bug:

```bash
git checkout -b feature/nome-da-feature
```

Commit e push das suas alterações para o repositório:

```bash
git add .
git commit -m "feat: descrição da feature"
git push origin feature/nome-da-feature
```

Abra um pull request para a branch principal no GitLab.
