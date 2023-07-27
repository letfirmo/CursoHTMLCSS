function toggleMode() {
  const html = document.documentElement

  /*if(body.classList.contains('light')){
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }*/

  html.classList.toggle("light") //mais fácil e prático que o anterior

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar2.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos de sol e camisa preta, barba e fundo amarelo."
    )
  } else {
    //se não tiver light mode, mantes a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos de grau e camisa preta, barba e fundo amarelo."
    )
  }
}
