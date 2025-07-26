// Injeta um <style> com o CSS da scrollbar
const css = `
  /* largura/altura base */
  ::-webkit-scrollbar {
    width: 16px !important;
    height: 16px !important;
  }

  /* trilha herda a cor de fundo da página */
  ::-webkit-scrollbar-track {
    background: transparent !important;
  }

  /* polegar com contraste ― funciona em fundos claros ou escuros */
  ::-webkit-scrollbar-thumb {
    background: rgba(20, 20, 20, 1) !important;           /* preto quase sólido para máximo contraste */
    border: 2px solid rgba(255,255,255,1) !important; /* borda branca mais fina */
    border-radius: 8px !important;
  }
`;
const style = document.createElement('style');
style.textContent = css;
document.documentElement.appendChild(style);
