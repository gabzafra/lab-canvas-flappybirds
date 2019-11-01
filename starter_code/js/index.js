window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      document.getElementById("start-button").className = "hidden"; //esto oculta la parte del boton viene conectado del css
      flappyGame.init();
    };

  
  };
  