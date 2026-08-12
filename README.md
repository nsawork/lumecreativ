# Lume Creativ Studio — Portfólio Digital

Portfólio digital desenvolvido para apresentar os serviços, projetos e posicionamento da **Lume Creativ Studio**, com foco em marketing, produção de conteúdo, captação audiovisual, eventos, automação e presença digital.

 **Site:** https://nsawork.github.io/lumecreativ/

---

##  Sobre o projeto

O projeto foi desenvolvido como uma página web responsiva e interativa para apresentar a atuação da Lume Creativ Studio e facilitar o contato com potenciais clientes.

A página reúne informações sobre serviços, processo de trabalho, posicionamento, portfólio, experiências de clientes e formulário de contato em uma única experiência digital.

O projeto também possui integrações externas para gerenciamento de experiências/depoimentos e comunicação direta com a responsável pelo atendimento.

---

##  Funcionalidades

###  Navegação

O site possui uma navegação interna por seções, permitindo acessar rapidamente diferentes partes da página.

* **Studio** → retorna ao início da página
* **Serviços** → seção de serviços oferecidos
* **Processo** → apresentação do processo de trabalho
* **Sobre** → informações e posicionamento da empresa
* **Contato** → formulário de diagnóstico e informações para contato
* **Diagnóstico gratuito** → direciona diretamente para a área de contato

As seções utilizam âncoras internas para facilitar a navegação pela página.

---

### 📱 Design responsivo

O site foi desenvolvido para funcionar em diferentes tamanhos de tela:

* Desktop
* Notebook
* Tablet
* Smartphone

A estrutura se adapta ao tamanho da tela, mantendo a navegação, conteúdo e formulários utilizáveis em dispositivos móveis.

---

###  HTML e CSS

A estrutura visual do projeto foi desenvolvida utilizando:

* HTML5
* CSS3
* Layout responsivo
* Animações e transições
* Componentes interativos
* Organização visual por seções

Os estilos principais estão organizados na pasta:

```text
styles/
└── upgrade.css
```

---

###  JavaScript

O arquivo `app.js` é responsável pela lógica e interações do site.

Entre as funcionalidades estão:

* Interações da navegação
* Scroll entre seções
* Modais
* Formulários
* Integração com Supabase
* Integração com EmailJS
* Manipulação dinâmica dos depoimentos
* Validação e envio de informações
* Comportamentos interativos da interface

---

##  Banco de dados — Supabase

O projeto utiliza **Supabase** para armazenar as experiências/depoimentos enviados pelos usuários.

Na seção de experiências, o visitante pode preencher:

* Depoimento
* Nome
* Cargo
* Empresa

Após o envio, os dados são armazenados no banco de dados e podem ser carregados dinamicamente na página.

Essa integração permite que novos depoimentos sejam adicionados sem precisar editar manualmente o HTML do site.

---

##  Experiências de clientes

O site possui uma seção dedicada às experiências de clientes.

O visitante pode clicar em **"Adicionar experiência"** e preencher seu depoimento sobre o trabalho realizado.

Os dados enviados são integrados ao Supabase, permitindo o gerenciamento dinâmico dessas informações.

---

##  Formulário de contato — EmailJS

Na parte final do site existe um formulário de **Diagnóstico gratuito**.

O visitante pode informar:

* Nome completo
* Empresa
* WhatsApp
* E-mail
* Serviço de interesse
* Informações sobre o projeto

Após o preenchimento e envio, a mensagem é encaminhada diretamente para o e-mail configurado através da integração com **EmailJS**.

Isso permite receber solicitações de potenciais clientes sem a necessidade de um backend próprio para o envio dos e-mails.

---

##  WhatsApp

O site também possui botões de contato direto pelo **WhatsApp**.

O visitante pode utilizar o botão para iniciar uma conversa diretamente pelo aplicativo ou WhatsApp Web, facilitando o contato comercial.

---

##  Favicon

O projeto possui um favicon personalizado para representar a identidade visual da marca na aba do navegador.

Arquivo:

```text
favicon.png
```

---

##  Estrutura do projeto

```text
lumecreativ/
│
├── index.html
├── app.js
├── favicon.png
│
└── styles/
    └── upgrade.css
```

---

##  Tecnologias utilizadas

| Tecnologia   | Utilização                       |
| ------------ | -------------------------------- |
| HTML5        | Estrutura da página              |
| CSS3         | Estilização e responsividade     |
| JavaScript   | Interações e lógica da aplicação |
| Supabase     | Banco de dados dos depoimentos   |
| EmailJS      | Envio do formulário para e-mail  |
| WhatsApp     | Comunicação direta com clientes  |
| Git          | Controle de versão               |
| GitHub       | Hospedagem do código             |
| GitHub Pages | Publicação do site               |

---

##  Publicação

O projeto está hospedado utilizando **GitHub Pages**.

 **Acessar o projeto:**
https://nsawork.github.io/lumecreativ/

---

##  Seções do site

### Serviços

Apresentação dos principais serviços oferecidos, incluindo:

* Captação em eventos
* Social media editorial
* Marketing de influência
* Sites
* Branding e posicionamento
* Automação de WhatsApp

### Processo

Apresentação do fluxo de trabalho:

1. Diagnóstico
2. Estratégia
3. Produção
4. Automação
5. Crescimento

### Sobre

Apresentação do posicionamento e da proposta da Lume Creativ Studio.

### Portfólio

Área destinada à apresentação de trabalhos, cases, bastidores e campanhas.

### Experiências

Área para clientes compartilharem suas experiências e resultados através do formulário integrado ao Supabase.

### Contato

Área final destinada à conversão de visitantes em potenciais clientes através do diagnóstico gratuito, formulário de contato, e-mail e WhatsApp.

---

##  Objetivo do projeto

O objetivo do projeto é criar uma presença digital profissional que não apenas apresente os serviços da empresa, mas também facilite a conversão de visitantes em contatos comerciais.

A combinação de:

* Apresentação dos serviços
* Portfólio
* Depoimentos dinâmicos
* Formulário de diagnóstico
* Integração com e-mail
* WhatsApp
* Design responsivo

cria uma estrutura centralizada para apresentação e aquisição de novos clientes.

---

##  Desenvolvimento

Projeto desenvolvido utilizando tecnologias web modernas e integrações com serviços externos, com foco em:

**Desenvolvimento Front-End • Experiência do Usuário • Responsividade • Integrações • Automação • Presença Digital**

---

##  Licença

Este projeto foi desenvolvido para fins de apresentação e portfólio.
