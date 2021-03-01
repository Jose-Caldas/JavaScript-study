5 erros que você deve evitar ao escrever funções - Clean Code 02 | JavaScript

# 1 Evitar Funções com mais de dois Parâmetros

Para que não exija de uma função mais doque ela deveria fazer.
Funções com até no máximo dois parãmetros aumentama legibilidade do seu código, e fazem com que ela sejam mais testáveis

# 2 Evitar funçoes que fazem mais de uma ação

Uma função deve simplismente executar uma ação, executar bem essa ação e somente essa ação

# 3 Evitar funções que não dizem exatamente o que ela faz

Nomear função com uma descrição que ela faz

# 4 Evitar funções que produzem efeitos colaterais (side efect)

Efeito colateral = é qualquer mudança de estado na aplicação, que seja observada fora da função invocada e que não seja o que a função retorna, támbem modificar qualquer variável externa e propriedade do objeto

# 5 Não encapsular condicionais

Deixar mais claro as condicionais como if, else, for ... sobre quais varíaveis elas irão agir, ficando mais claro pra quem está vendo o código pela primeira vez
