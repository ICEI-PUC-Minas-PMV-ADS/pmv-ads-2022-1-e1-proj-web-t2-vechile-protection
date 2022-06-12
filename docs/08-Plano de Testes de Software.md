# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
*	Site publicado na Internet
*	Navegador da Internet - Chrome, Firefox ou Edge


Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

|     Caso de teste      | CT-01 – Acessar avaliações                                                                                                                                                                                                                                                                                            |
|:----------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados	 | RF-009	A aplicação deve mostrar no local correto, as melhores comentários e avaliações da empresa feito por alguns usuários                                                                                                                                                        |
|   Objetivo do Teste    | 	Verificar se a página está direcionando o usuário para as avaliações.                                                                                                                                                                                                                           |
|        Passos	         | 1) Acessar o Navegador <br> 2) Informar a URL https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-vechile-protection <br> 3) Visualizar a página principal <br> 4) Clicar em "Sobre a empresa" 5) Clicar em Avaliações clientes.                                                                                                                                                       |
|   Critérios de Êxito   | 	Ao clicar no link o usuário deve ser direcionado para a página de avaliações. 
 
 
|     Caso de teste      | CT-02 – Cotação de veículos                                                                                                                                                                                                                                                                         |
|         :---:          | :---                                                                                                                                                                                                                                                                                                                |
| Requisitos Associados	 | RF-001	No site deve ter um formulário para preenchimento de dados sobre o carro e o cliente para cálculo e contratação da proteção automotiva                                                                                                                            |
|   Objetivo do Teste    | 	Verificar se  o fomulário de cotação funciona de modo adequado.                                                                                                                                                                                                                                                    |
|        Passos	         | 1) Acessar o Navegador <br> 2) Informar a URL https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-vechile-protection e clicar no menu "Proteção Veicular" <br> 3) Visualizar a página de cotação - cotacao.html <br> 4) Preencher os campos presentes no formulário de cotação, e, após a inserção dos dados, clicar no botão de envio ao final do formulário com a seguinte descrição: "Fazer cotação" - Os campos presentes no formulário de contato são de preenchimento obrigatório. |
| Critérios de Êxito |	Após o preenchimento dos campos obrigatórios, ao clicar no botão de envio, não deverá nenhum tipo de mensagem alertando que os campos não foram preenchidos adequadamente, e será informado o valor de mensalidade.


|     Caso de teste      | CT-03 – Utilização do formulário de contato / trabalhe conosco.                                                                                                                                                                                                                                                                       |
|         :---:          | :---                                                                                                                                                                                                                                                                                                                |
| Requisitos Associados	 | RF-002 - O site deve deixar claro as formas do cliente contactar a empresa para envio de currículos e trabalhar na empresa.                                                                                                 |
|   Objetivo do Teste    | 	Verificar se  o fomulário de contato funciona de modo adequado.                                                                                                                                                                                                                                                    |
|        Passos	         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site <br> 3) Visualizar a página de contato - trabalheconosco.html <br> 4) Preencher os campos presentes no formulário de contato, e, após a inserção dos dados, clicar no botão de envio ao final do formulário com a seguinte descrição: "ENVIAR CURRICULO" -|
| Critérios de Êxito |	Após o preenchimento dos campos obrigatórios, ao clicar no botão de envio, não deverá nenhum tipo de mensagem alertando que os campos não foram preenchidos adequadamente, fazendo o email da empresa receber os dados do formulario.


|     Caso de teste      | CT-04 – Utilização do Cadastro/Login.                                                                                                                                                                                                                                                                       |
|         :---:          | :---                                                                                                                                                                                                                                                                                                                |
| Requisitos Associados	 | RF-003 O site deve ter uma tela de cadastro e login para acesso a demais funcionalidades         |                                                                                       
|   Objetivo do Teste    | 	Verificar se usuario está sendo cadastrado e se é possível efetuar o login.                                                                                                                                                                                                                                                    |
|        Passos	         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site <br> 3) Visualizar a página de login/cadastro - login.html <br> 4) Preencher os campos com nome, email e senha, e, após a inserção dos dados, clicar no botão de "LOGIN"(com email e senha) ou "CADASTRO"(Com nome, email e senha) -|
| Critérios de Êxito |	Após o preenchimento dos campos obrigatórios, ao clicar no botão de envio, não deverá nenhum tipo de mensagem alertando que os campos não foram preenchidos adequadamente ou informando que os dados estão incorretos.


|     Caso de teste      | CT-05 – Utilização das avaliações dos clientes.                                                                                                                                                                                                                                                                       |
|         :---:          | :---                                                                                                                                                                                                                                                                                                                |
| Requisitos Associados	 | RF-006| A aplicação deve mostrar no local correto, os melhores comentários e avaliações da empresa feito por alguns usuários, possibilitando também a postagem de novas avaliações pelos clientes.        |                                                                                       
|   Objetivo do Teste    | 	Constar na pagina o comentario mais atual feito pelo cliente e também os comentários/avaliações mais antigas.                                                                                                                                                                                                                                                    |
|        Passos	         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site <br> 3) Visualizar a página de avaliações - avaliacoes.html <br> 4) Preencher os campos como por ex: Nome, Veículo, Estrelas de avaliação e a mensagem desejada, após a inserção dos dados, clicar no botão de "ENVIAR" fazendo a mensagem ser a mais recente do site. -|
| Critérios de Êxito |	Após o preenchimento dos campos obrigatórios, ao clicar no botão de envio, não deverá nenhum tipo de mensagem alertando que os campos não foram preenchidos adequadamente ou informando que os dados estão incorretos.


