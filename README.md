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
