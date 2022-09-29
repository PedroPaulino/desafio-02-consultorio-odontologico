function irPara(seletor){

  var divSelecionada = document.getElementById(seletor).offsetTop;
  window.scrollTo({ top: divSelecionada, behavior: 'smooth'});
}
