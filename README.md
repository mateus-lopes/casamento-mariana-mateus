# Convite de Casamento — Mateus & Mariana

Convite interativo em HTML e PDF para o casamento de Mateus e Mariana (05/09/2026).

## Como usar

1. **Instale as dependências:** `npm install`
2. **Gere o CSS:** `npm run build:css`
3. Abra o arquivo `index.html` no navegador.

### Opção: usar PDF

Para compartilhar o convite como PDF (evita problemas de dark mode em alguns navegadores):

```bash
npm run pdf
```

O PDF será gerado em `pdf/casamento.pdf` com links clicáveis para confirmação via WhatsApp, lista de presentes e localização.

## Comandos disponíveis

| Comando | Descrição |
|---------|------------|
| `npm run build:css` | Compila o Tailwind CSS |
| `npm run build:css:watch` | Compila o CSS em modo watch (recompila ao alterar arquivos) |
| `npm run pdf` | Gera o CSS e cria o PDF do convite |

## Deploy no GitHub Pages

1. **Crie o repositório no GitHub:** [github.com/new](https://github.com/new)
2. **Configure o remote** (se necessário) e envie o código:
   ```bash
   npm run build:css
   git add .
   git commit -m "Convite de casamento"
   git push -u origin main
   ```
3. **Ative o Pages:** Settings > Pages > Source: Deploy from branch > Branch: main, pasta: / (root) > Save

## Personalização

### Dados editáveis

Edite o arquivo `js/main.js` para configurar:

- **listaPresentesUrl**: link da lista de presentes (Havan, etc.)
- **enderecoMaps**: endereço para o Google Maps

### Horário

Edite o elemento `<time>` em `index.html` e o link do WhatsApp em `index.html` para alterar data e horário.

## Estrutura

```
casamento/
├── index.html           # Página principal
├── package.json
├── tailwind.config.js   # Tema (cores, fontes, breakpoints)
├── css/
│   ├── input.css        # CSS fonte (Tailwind + custom)
│   └── output.css       # CSS compilado
├── js/
│   ├── main.js          # Configuração e interatividade
│   └── pdf.js           # Geração do PDF (Puppeteer)
├── assets/              # Imagens
├── pdf/
│   └── casamento.pdf    # PDF gerado (npm run pdf)
└── README.md
```

## Funcionalidades

- Confirmação de presença via WhatsApp
- Lista de presentes (Havan)
- Localização no Google Maps
- PDF para compartilhar sem problemas de dark mode
