function mostrarMais(){
    var reticencias=document.getElementById("reticencias");
    var maisTexto=document.getElementById("mais");
    var btnMostrarMais=document.getElementById("btnMostrarMais");
  
    if(reticencias.style.display==="none"){
      reticencias.style.display="inline";
      maisTexto.style.display="none";
      btnMostrarMais.innerHTML="Mostrar Mais"
    }else{
      reticencias.style.display="none";
      maisTexto.style.display="inline";
      btnMostrarMais.innerHTML="Mostrar Menos"
    }
  }