# Testes com Jest em TypeScript
## Setup
``` yarn init -y ```
``` yarn add typescript ```
``` tsc --init ```
``` yarn add --dev jest ```
``` yarn add --dev @types/jest```
``` yarn add --dev babel-jest @babel/core @babel/preset-env ```
``` yarn add --dev babel-jest @babel/preset-typescript ```

Podemos configurar pela .env o modo de desenvolvimento.

1. Criamos um arquivo sum.ts
2. Criamos um arquivo sum.test.ts
3. Criamos um arquivo babel.config.js
```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

```
