# 🐰 RabbitDeals - Front-end

> Plataforma de promoções fitness, suplementos, roupas e acessórios. Rápido, fácil e objetivo!

---

## 🚀 Como rodar o projeto

1. **Pré-requisitos:**
	- Node.js 18+ ([Download Node.js](https://nodejs.org/en/download))
	- Backend rodando em `http://localhost:8080` (verifique com o responsável pelo backend)

2. **Instale as dependências:**
	```bash
	npm install
	```

3. **Inicie o front-end:**
	```bash
	npm run dev
	```
	O app estará disponível em [http://localhost](http://localhost)

---

## 🗂️ Estrutura do Projeto

```
front-end-RabbitDeals/
├── src/
│   ├── api/           # Integração com backend (axios)
│   ├── assets/        # Imagens e arquivos estáticos
│   ├── components/    # Componentes reutilizáveis (Header, ProductCard...)
│   ├── features/      # Features e lógica de domínio
│   ├── hooks/         # Custom React hooks
│   ├── layouts/       # Layouts de página
│   ├── pages/         # Páginas principais (HomePage...)
│   ├── routes/        # Rotas da aplicação
│   ├── store/         # Gerenciamento de estado
│   ├── styles/        # Estilos globais (CSS)
│   └── utils/         # Funções utilitárias
├── index.html         # HTML principal
├── package.json       # Dependências e scripts
├── vite.config.js     # Configuração do Vite
└── README.md          # Este arquivo
```

---

## 🔗 Principais Tecnologias
- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/) (requisições HTTP)
- [Material UI](https://mui.com/) (componentes visuais)

---

## 💡 Funcionalidades
- Listagem de anúncios vindos do backend real
- Visual moderno e responsivo
- Código limpo, organizado e fácil de entender

---

## 📝 Dicas rápidas
- O Header exibe apenas a logo "RabbitDeals"
- O backend precisa estar rodando em `http://localhost:8080/anuncios`
- Para customizar estilos, edite `src/styles/global.css`
- Para adicionar novas páginas, crie arquivos em `src/pages/`

---

## 👤 Autor
- Alejandro Fadim
- Felipe Albertim

---

## 📢 Dúvidas?
Abra uma issue ou entre em contato!
