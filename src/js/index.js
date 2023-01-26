/**
  Passo 1 - dar um jeito de pegor o elemento que representa o botão na tela usando o js
 */

  const botaoTrailer = document.querySelector('.botao-trailer') ;
  const botaoFecharModal = document.querySelector(".fechar-modal");
  const video = document.getElementById("video");
  const modal = document.querySelector(".modal");
  const linkDoVideo = video.src;
  /* 
  Passo 2 - dar um jeito de identificar quando o usuario clicar no botão
  */
  
  botaoTrailer.addEventListener("click", () => {
      /*
 passo 4 abrir a modal na tela 
  */
 modal.classList.add("aberto")
 video.setAttribute("src", linkDoVideo)
  })
  


// passo 2 - identificar quando o usuario clicou no X
botaoFecharModal.addEventListener("click", () => {
    //passo 3 - Fechar a modal
    modal.classList.remove("aberto")
    video.setAttribute("src", "");
})


