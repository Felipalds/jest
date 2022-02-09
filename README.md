# Testes com Jest em TypeScript
## Setup
``` yarn init -y ``` <br>
``` yarn add typescript ```<br>
``` tsc --init ```<br>
``` yarn add --dev jest ```<br>
``` yarn add --dev @types/jest```<br>
``` yarn add --dev babel-jest @babel/core @babel/preset-env ```<br>
``` yarn add --dev babel-jest @babel/preset-typescript ```<br>

Podemos configurar pela .env o modo de desenvolvimento.<br>

1. Criamos um arquivo sum.ts
2. Criamos um arquivo sum.test.ts
3. Criamos um arquivo babel.config.js:
```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

```

## Primeiro teste:
No arquivo src/sum.ts, vamos fazer uma função de soma <br>
Dentro da pasta src/tests, vamos colocar todos os nossos arquivos de teste. Cada arquivo terá seus próprios testes. A sintaxe é a seguinte: <br>
```
test('adds 1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3)
})

```
Primeiro damos um "título" para o teste atual. Depois, na função de callback, damos um expect, passando a função desejada e seus argumentos. No toBe colocamos o que deve ser retornado.
- toBe (valor exato);
- toEqual (objetos)
- not.toBe (não)