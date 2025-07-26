# Scrollbar Visível

Uma extensão do Chrome que torna a barra de rolagem sempre visível e com alto contraste em qualquer site.

## 📋 Descrição

Esta extensão personaliza a aparência das barras de rolagem (scrollbars) em todos os sites, garantindo que o polegar da barra seja sempre visível e tenha bom contraste, independentemente da cor de fundo da página.

**Criada com fins de acessibilidade**, esta extensão foi desenvolvida para pessoas que, como eu, têm dificuldade de encontrar e utilizar o polegar da scrollbar quando ele possui efeitos de transparência ou baixo contraste.

## ✨ Características

- **Alto contraste**: Polegar preto com borda branca para máxima visibilidade
- **Compatibilidade universal**: Funciona em fundos claros e escuros
- **Barra mais espessa**: 16px de largura para melhor usabilidade
- **Design limpo**: Sem rastros visuais ou vazamentos durante o uso
- **Aplicação forçada**: Usa `!important` para sobrescrever estilos de sites

## 🎨 Especificações Visuais

- **Largura da scrollbar**: 16px
- **Cor do polegar**: Preto sólido (`rgba(20, 20, 20, 1)`)
- **Borda**: Branca de 2px (`rgba(255,255,255,1)`)
- **Trilha**: Transparente (herda o fundo da página)
- **Bordas arredondadas**: 8px de border-radius

## 🚀 Como Instalar

1. Faça o download dos arquivos da extensão
2. Abra o Chrome e vá para `chrome://extensions/`
3. Ative o "Modo do desenvolvedor" no canto superior direito
4. Clique em "Carregar sem compactação"
5. Selecione a pasta contendo os arquivos da extensão
6. A extensão será instalada e ativada automaticamente

## 📁 Estrutura dos Arquivos

```
meu_scrollbar/
├── manifest.json    # Configurações da extensão
├── content.js       # Script que aplica os estilos CSS
└── README.md        # Este arquivo de documentação
```

## 🔧 Funcionamento Técnico

A extensão injeta CSS personalizado usando webkit-scrollbar pseudo-elementos:

- `::-webkit-scrollbar` - Define o tamanho da barra
- `::-webkit-scrollbar-track` - Estiliza a trilha (fundo)
- `::-webkit-scrollbar-thumb` - Estiliza o polegar (parte arrastável)

O script é executado em `document_start` para garantir que seja aplicado antes do carregamento completo da página.

## 🌐 Compatibilidade

- **Navegadores**: Chrome, Edge, Opera (navegadores baseados em Chromium)
- **Sites**: Funciona em todos os sites (`<all_urls>`)
- **Limitações**: Alguns sites com policies de segurança restritivas podem bloquear

## 👤 Autor

**Cristina** - Versão 1.0

*Este foi meu primeiro projeto desenvolvido com ajuda de IA generativa! 🤖✨*

## 📄 Licença

Este projeto é de uso pessoal e educacional.

---

*Última atualização: Janeiro 2025*
