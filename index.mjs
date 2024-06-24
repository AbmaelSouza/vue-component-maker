import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenha o nome do arquivo atual e seu diretório
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Verifique se o nome do componente foi fornecido
if (process.argv.length < 3) {
    console.log('Uso: node create-vue-index.mjs NomeDoComponente');
    process.exit(1);
}

// Nome do componente com diretórios
const componentName = process.argv[2];

// Caminho do componente
const componentPath = path.join(__dirname, 'src', 'components', componentName);

// Verifique se o componente já existe
if (fs.existsSync(componentPath)) {
    console.log(`Componente ${componentName} já existe em ${componentPath}`);
    process.exit(1);
}

// Crie a pasta do componente
fs.mkdirSync(componentPath, { recursive: true });

// Nome do arquivo do componente (sem diretórios)
const componentBaseName = path.basename(componentName);

// Crie o arquivo Vue
const vueContent =
    `<template src="./${componentBaseName}.html"></template>
<style lang="scss" src="./${componentBaseName}.scss"></style>
<script> export default {
  name: '${componentBaseName}',
  data() {
    return {
      // Adicione suas propriedades de dados aqui
    };
  },
   methods: {
    // Adicione seus métodos aqui
  },
  beforeCreate() {
    // Chamado antes da instância ser criada
  },
  created() {
    // Chamado quando a instância é criada
  },
  beforeMount() {
    // Chamado antes do montamento no DOM
  },
  mounted() {
    // Chamado após o montamento no DOM
  },
  beforeUpdate() {
    // Chamado antes de um update
  },
  updated() {
    // Chamado após um update
  },
  beforeDestroy() {
    // Chamado antes da destruição
  },
  destroyed() {
    // Chamado após a destruição
  },
};

</script>
`;

fs.writeFileSync(path.join(componentPath, `${componentBaseName}.vue`), vueContent);

// Crie o arquivo HTML
const htmlContent = `<div class="${componentBaseName}">
  <!-- Adicione seu HTML aqui -->
</div>
`;

fs.writeFileSync(path.join(componentPath, `${componentBaseName}.html`), htmlContent);

// Crie o arquivo SCSS
const scssContent = `.${componentBaseName} {
  /* Adicione seu SCSS aqui */
}
`;
fs.writeFileSync(path.join(componentPath, `${componentBaseName}.scss`), scssContent);
console.log(`Componente ${componentName} criado em ${componentPath}`);
