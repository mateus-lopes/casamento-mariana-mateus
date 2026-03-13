# Convite de Casamento — Mateus & Mariana

Convite interativo em HTML para o casamento de Mateus e Mariana (05/09/2026).

## Como usar

1. Abra o arquivo `index.html` no navegador.
2. Para publicar online no GitHub Pages, veja a seção Deploy abaixo.

## Deploy no GitHub Pages

O repositório já está inicializado. Para publicar:

1. **Crie o repositório no GitHub:** [github.com/new](https://github.com/new) — nome: `casamento`, deixe vazio (sem README)
2. **Se seu usuário for diferente de `mateus-lopes`**, atualize o remote:
   ```bash
   git remote set-url origin https://github.com/SEU-USUARIO/casamento.git
   ```
3. **Envie o código:**
   ```bash
   git push -u origin main
   ```
4. **Ative o Pages:** Settings > Pages > Source: Deploy from branch > Branch: main, pasta: / (root) > Save

O site ficará em `https://SEU-USUARIO.github.io/casamento/`

## Personalização

### Dados editáveis

Edite o arquivo `js/main.js` para configurar:

- **listaPresentesUrl**: link da lista de presentes (quando disponível)
- **enderecoMaps**: endereço completo para o Google Maps (quando disponível)

### Horário

O horário está definido como 18h no HTML. Para alterar, edite o elemento `<time>` em `index.html` e o link do Google Calendar na seção de ações.

## Estrutura

```
casamento/
├── index.html      # Página principal
├── css/style.css   # Estilos
├── js/main.js      # Configuração e interatividade
├── assets/         # Imagens (foto do casal, etc.)
└── README.md
```

## Funcionalidades

- Confirmação de presença via WhatsApp (mensagem pré-preenchida)
- Link para localização no Google Maps
- Adicionar ao Google Calendar
- Lista de presentes (configurável)
- Contato via WhatsApp
