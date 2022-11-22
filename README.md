<h1>Store Manager</h1>
<p>Este projeto foi desenvolvido em outubro de 2022 durante meus estudos na <a href="https://www.betrybe.com/">Trybe</a>.</p>

<br/>

<h2>O quê foi desenvolvido</h2>
<p>Foi desenvolvida uma API RESTful de gerenciamento de vendas no formato dropshipping onde é possível fazer um CRUD (Create, Read, Update e Delete) de produtos e vendas com o auxílio do banco de dados MySQL.<p>
<br/>
  
<h2>O quê foi avaliado</h2>
<ul>
  <li>Aderência do código às especificações</li>
  <li>Organização do código. Uso de camadas Model, Services e Controller;</li>
  <li>Aderência ao padrão REST.</li>
</ul>

<br/>

<h2>Endpoints</h2>

<h3>/products</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna todos os produtos | |
|POST| Cadastra produto | { "name": string } |

<h3>/products/:id</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna produto com base no id | |
|PUT| Atualiza produto com base no id | { "name": string } |
|DELETE| Deleta produto com base no id | |

<h3>/products/search?q=searchTerm</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna produtos com base na query | |

<hr />
<h3>/sales</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna vendas | |
|POST| Cadastra vendas | [ { "productId": number, "quantity": number } ] |

<h3>/sales/:id</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna venda com base no id | |
|PUT| Atualiza venda com base no id | [ { "productId": number, "quantity": number } ] |
|DELETE| Deleta venda com base no id | |

<hr/>

<br/>

<h2>Guia de instalação</h2> 
<ol>
  <li>
    <p>Clone o repositório</p>
    <pre>git clone git@github.com:celso-rodrigo/store-manager.git</pre>
  </li>
  <li>
    <p>Abra a pasta do repositório</p>
  </li>
  <li>
    <p>Instale as dependências</p>
    <pre>npm install</pre>
  </li>
  <li>
    <p>Inicie o projetot</p>
    <pre>npm start</pre>
  </li>
</ol>
