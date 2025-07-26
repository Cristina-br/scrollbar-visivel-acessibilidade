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

  /* botões de navegação (setinhas) */
  ::-webkit-scrollbar-button:single-button:vertical:decrement {
    display: block !important;
    height: 16px !important;
    width: 16px !important;
    background: rgba(40, 40, 40, 1) !important;
    border: 1px solid rgba(255,255,255,0.8) !important;
    border-radius: 4px !important;
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    display: block !important;
    height: 16px !important;
    width: 16px !important;
    background: rgba(40, 40, 40, 1) !important;
    border: 1px solid rgba(255,255,255,0.8) !important;
    border-radius: 4px !important;
  }

  /* setinhas mais escuras ao passar o mouse */
  ::-webkit-scrollbar-button:single-button:vertical:decrement:hover,
  ::-webkit-scrollbar-button:single-button:vertical:increment:hover {
    background: rgba(60, 60, 60, 1) !important;
    border-color: rgba(255,255,255,1) !important;
  }
`;
const style = document.createElement('style');
style.textContent = css;
document.documentElement.appendChild(style);
