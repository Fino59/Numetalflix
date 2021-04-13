function addVideo() {
    var videoField = document.querySelector('#video')
    var ytSong = videoField.value
    if (validateLink(ytSong)) {
      showVideoOnScreen(validateLink(ytSong))
    } else {
      alert("Este não é um endereço válido do YouTube")
    }
    videoField.value = ""
  }
  
  function validateLink(url) {
    var v = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    return (url.match(v)) ? url.match(v)[1] : false
  }
  
  function showVideoOnScreen(codVideo) {
    var listaTrailers = document.querySelector('#showVideos')
    var videoElement = "<iframe width='500' height='300' src='https://www.youtube.com/embed/" + codVideo + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    listaTrailers.innerHTML += videoElement
  }
  
  /*function limparPagina() {
    var listaTrailers = document.querySelector('#listaTrailers')
    listaTrailers.innerHTML = ""
  }*/