# Eslint e Prettier Config

## Instalação

1. Mais simples, impossível:

```
npm i -D eslint-config-cestari
npx install-peerdeps --dev eslint-config-cestari
```

2. Agora no seu `.eslintrc.json` (ou no seu `package.json`) coloque:

```
{
  'extends': ['cestari']
}
```

3. Copie o arquivo `.prettierrc` deste pacote para suas configs:

```
{
  "semi": true,
  "singleQuote": true
}
```

## Configurações

- Estende as configs do Airbnb
- Estende as configs do react-hooks/recommended
- Desabilita regras que podem conflitar com prettier (usa prettier como formatador)
- Coloquei algumas regras do meu gosto (para ver quais, dá uma espiada no `.eslintrc.js`).


## Atenção

- Essa config não usa o `eslint-plugin-prettier`, mas apenas o `eslint-config-prettier`.
- A diferença é que o `config` apenas desabilita regras conflitantes no `eslint`. 
- Já o plugin integra o `prettier` ao `eslint` de forma que o `eslint` fica responsável por mostrar erros do prettier e também por formatar o código. 
- Como não estamos utilizando o `eslint-plugin-prettier`, então devemos usar sempre o prettier no VSCode para formatar, e o eslint para mostrar erros. 
- Além disso os erros de formatação do prettier não irão aparecer como erros. 
- Isso é o recomendado pela [documentação do prettier](https://prettier.io/docs/en/integrating-with-linters.html#:~:text=Linters%20usually%20contain%20not%20only,as%20outlined%20in%20Prettier%20vs.)
- Uma boa síntese da diferença entre o plugin e o config está [aqui](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint)
