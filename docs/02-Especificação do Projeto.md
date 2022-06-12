# Especificações do Projeto

As partes mais importantes para a solução do problema foi produzida como uma mistura de personas fictícias produzidas pelos membros do grupo e também baseadas em necessidades reais de possíveis usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

Lucas Pereira tem 25 anos, é estudante de TI na UFRN. Gosta muito de pedir comida por aplicativo e usa bastante UBER como meio de transporte, prefere o turno da noite e gosta de festas. Na horas livres gosta de ler sobre mecânica e acompanha as notícias da revista Quatro Rodas. Utiliza muitos aplicativos, alguns deles são: Instagram, Twitter, Facebook, Whatsapp, Telegram, Nubank, Youtube, Uber, iFood.

Iury Rodrigues tem 26 anos, é analista de sistemas júnior na TOTVS. Gosta de comprar boas roupas online, cuida da aparência, acorda cedo e aproveita de comidas saudáveis. No seu tempo livre joga no computador, lê livros de economias e técnicas de desenvolvimento. Usa no dia a dia mais frequentemente, os aplicativos como: Telegram, Whatsapp, Banco Inter, Uber, Linkedln.

Osvaldo Antunes tem 35 anos, é taxista. Se frustra por não ter completado o ensino médio, trabalhar muito e ter pouco retorno, pagar por muito combustível. Se motive no sonho de conseguir montar uma frota para administrar e ter condições para pagar por uma boa educação para a família. Entre suas corridas, Osvaldo gosta de ler notícias e ouvir podcasts relacionado a política do país. Usa com frequência, os aplicativos como: Youtube, Spotify e Facebook.

Lucas Guilherme tem 34 anos, é engenheiro mecânico aeronáutico e formado em engenharia mecânica pela UFMG. Lucas, gosta de jogar video games e praticar produção musical nas horas vagas. Se arrepende por investir em empresas e fornecedores que se dizem de qualidade mas decepcionam e de não obter as metas desejadas no aeroporto em que trabalha. Suas motivações são sua história e tudo que já percorreu para conquistar o que tem hoje Sua família. Usa Instagram, WhatsApp, Aplicativos Bancários, LinkedIn.

José Antônio Pereira da Silva tem 56 anos, desempregado e atualmente é motorista de aplicativo. Se motiva em sua família e sua fé em Deus. Se frustra por não conseguir ser presente no crescimento de seus filhos, por estar desempregado e não ter estudado. Gosta de assistir os jogos do Vasco da Gama, ir aos encontros familiares no domingo e após a empresa onde trabalhava falir, José que não achou espaço no mercado de trabalho, se viu obrigado a pegar o seu carro e trabalhar como motorista de aplicativo para sustentar sua família. Usa com mais frequência os seguintes aplicativos: Instagram, Uber, 99, In Driver.


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Osvaldo Antunes | Ter acesso as regras de utilização, meus direitos e deveres como um associado da proteção veicular de forma mais prática como por exemplo, um PDF online | Assim eu posso consultar qualquer tipo de dúvida de forma rápida e até mesmo pelo meu aparelho celular e em caso de perca do manual eu o tenho sempre a minha disposição de forma digital |
|Iury Rodrigues| Entrar em contato via e-mail ou WhatsApp com a proteção veicular | É mais prático e não preciso ficar no telefone à espera de um atendente, tenho a resposta assim que possível|
|Lucas Pereira | Aprender mais sobre direção defensiva e sobre automóveis | Apesar de ter uma proteção, é bom evitar acidentes tanto com carro quanto com pessoas|
|Iury Rodrigues | Queria ver todas opções de seguro antes de contratar, já com alguns preços | Não preciso ficar pedindo à algum atendente quando quiser mudar alguma opção, eu simulo do meu jeito o mais rápido possível |
| Lucas Guilherme | Queria saber todos opcionais de proteção que a empresa fornece | Gosto de modificar meu carro e ter todas as minhas modificações asseguradas e talvez até os itens internos do meu carro, isso seria muito bom. Se terei um carro reserva caso meu carro seja roubado |
| Lucas Guilherme | Gostaria de saber as empresas terceirizadas que fornecem serviços junto com a proteção automotiva que eu contratei | Mesmo que a empresa tenha bons índices no mercado e excelentes funcionalidades, as vezes a empresa de guincho, ou de aluguel de carros não é tão boa e seria interessante saber quem são os parceiros para que eu saiba se eles também prestam bom serviço quando eu precisar |
| Iury Rodrigues | Acessar os boletos online e pagar pelo aplicativo do banco | Não preciso esperar que chegue o boleto pelos correios |
| José Antônio Pereira da Silva | Gostaria de saber como funciona a proteção automotiva, como contratar e entrar em contato | Não queria entrar em contato já de imediato com a empresa e nem simular antes de saber como funciona |
| Lucas Pereira | Ter acesso ao site da proteção que seja de qualidade e otimizado | Muitas vezes acessarei pelo navegador do meu aparelho celular e já percebi que muitos sites as vezes acontecem alguns bugs |
| Iury Rodrigues | Gostaria de poder acessar o site tanto no computador quanto no meu celular | Trabalho no notebook, mas os aplicativos de banco em geral são nos celulares e seria mais prático acessar pelo celular do que baixar no computador |
| Iury Rodrigues | Queria saber o que outras pessoas acham da proteção veicular dessa empresa | Se as pessoas estão avaliando bem então, a possibilidade de contratar os serviços da empresa é maior e se for ruim eu nem faço pré cotação e nem entro em contato |


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| No site deve ter um formulário para preenchimento de dados sobre o carro e o cliente para cálculo e contratação da proteção automotiva | ALTA | 
|RF-002| O site deve deixar claro as formas do cliente contactar a empresa para envios de curriculos (Trabalhe conosco)  | ALTA |
|RF-003| O site deve ter uma tela de cadastro e login para acesso a demais funcionalidades   | MÉDIA |
|RF-004| Opção de manual do associado deve ser mostrado para o cliente no site, onde informa para o cliente todos os seus direitos, deveres e regras de utilização   | MÉDIA |
|RF-005| A aplicação deve ter a opção para requisitar impressão do boleto de mensalidade após login  | MÉDIA |
|RF-006| O site tem de mostrar as informações de serviços prestados disponíveis   | MÉDIA |
|RF-007| A aplicação deve mostrar no local correto, as melhores comentários e avaliações da empresa feito por alguns usuários   | BAIXA |
|RF-008| O site deve informar no momento da cotação todos os opcionais que o cliente poderá aderir.   | MÉDIA |

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve mudar seus elementos de acordo com a plataforma: celular, tablet ou computador | MÉDIA | 
|RNF-002| O site deve ser funcional em diversos navegadores que tem HTML5 |  MÉDIA | 


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| As linguagens serão limitadas à HTML, Javascript, CSS e C# |
|02| A aplicação web não terá banco de dados        |
|03| O projeto deve ser entregue até 14/07/2022 de acordo com o cronograma adotado pela PUC |


