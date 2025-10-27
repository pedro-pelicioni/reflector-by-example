# Reflector by Example

> Master Oracle Integration on Stellar's Soroban

Um guia prático e interativo para aprender a integrar Reflector Oracle em contratos inteligentes Soroban.

## 🎯 O Que É Este Projeto

Reflector by Example é uma documentação interativa que ensina desenvolvedores a usar Reflector Oracle através de exemplos práticos de código. Cada tutorial inclui:

- 📚 Explicações conceituais claras
- 💻 Código Rust completo e comentado
- 🎮 Playground interativo integrado (Soroban IDE)
- ✅ Melhores práticas de produção

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
git clone https://github.com/pedro-pelicioni/reflector-by-example.git
cd reflector-by-example
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000

### Build de Produção

```bash
npm run build
```

O build gera um site estático na pasta `out/` pronto para deploy.

## 📖 Tutoriais Incluídos

### Getting Started
- **Introduction** - O que são oracles e por que usar Reflector
- **Installation** - Setup do ambiente Soroban

### Basics
- **First Query** - Sua primeira consulta ao oracle
- **Price Consumer** - Contrato com error handling e validações

### Advanced
- **Multi-Asset Queries** - Consultas em batch eficientes
- **Lending Protocol** - Protocolo DeFi completo com liquidações

## 🛠️ Tecnologias

- **Next.js 14+** - Framework React com App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização
- **MDX** - Conteúdo com componentes React
- **next-mdx-remote** - Processamento de MDX

## 📁 Estrutura do Projeto

```
reflector-by-example/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Homepage
│   └── [slug]/page.tsx    # Rotas dinâmicas dos tutoriais
├── components/            # Componentes React
│   ├── Header.tsx        # Cabeçalho
│   ├── Sidebar.tsx       # Navegação lateral
│   └── Playground.tsx    # Integração Soroban Playground
├── content/              # Tutoriais MDX
│   ├── introduction.mdx
│   ├── first-query.mdx
│   └── ...
├── snippets/            # Código Rust dos exemplos
│   ├── first-query.rs
│   ├── price-consumer.rs
│   └── ...
└── lib/                # Utilidades
    └── content.ts      # Carregamento de conteúdo MDX
```

## 🎮 Integração com Soroban Playground

Este projeto usa uma integração única com o [Soroban Playground](https://soropg.com) via GitHub Raw URLs:

1. Snippets de código Rust são armazenados em `/snippets/*.rs`
2. Após commit, ficam disponíveis via GitHub Raw
3. Playground carrega o código via parâmetro `?codeUrl=`
4. Sem problemas de CORS, sem servidor adicional necessário

```typescript
// Exemplo de uso do componente Playground
<Playground snippetFile="first-query.rs" />
```

## 🎨 Branding

Cores oficiais do Reflector:
- Primary: `#6366f1`
- Secondary: `#818cf8`
- Background: `#0f172a`

## 📝 Adicionando Novos Tutoriais

1. Crie um snippet Rust em `/snippets/novo-tutorial.rs`
2. Crie o conteúdo MDX em `/content/novo-tutorial.mdx`:

```mdx
---
title: Título do Tutorial
description: Descrição breve
---

# Título do Tutorial

Conteúdo do tutorial...

<Playground snippetFile="novo-tutorial.rs" />
```

3. Adicione à navegação em `/components/Sidebar.tsx`

## 🚢 Deploy

### GitHub Pages

```bash
npm run build
# Faça deploy da pasta out/
```

### Vercel

```bash
vercel deploy
```

### Netlify

```bash
netlify deploy --dir=out --prod
```

## 🔗 Links Úteis

- [Reflector Network](https://reflector.network)
- [Documentação Oficial](https://reflector.network/docs)
- [Discord](https://discord.com/invite/v2ggfDty2d)
- [Twitter](https://x.com/in_reflector)
- [Soroban Docs](https://soroban.stellar.org)

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovoTutorial`)
3. Commit suas mudanças (`git commit -m 'Add: novo tutorial X'`)
4. Push para a branch (`git push origin feature/NovoTutorial`)
5. Abra um Pull Request

## 💬 Suporte

- Abra uma [Issue](https://github.com/pedro-pelicioni/reflector-by-example/issues)
- Entre no [Discord do Reflector](https://discord.com/invite/v2ggfDty2d)

## 🙏 Agradecimentos

- Time Reflector pela infraestrutura de oracle
- Stellar Development Foundation pelo Soroban
- Comunidade open-source

---

Desenvolvido com ❤️ para a comunidade Stellar
