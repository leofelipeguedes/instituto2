let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function dados() {
  // declaração de variáveis
  var result = document.getElementById('result');

  // json
  var dados = {
      'nome': document.getElementById('nome').value,
      'idade': document.getElementById('idade').value,
      'email': document.getElementById('email').value,
      'profissao': document.getElementById('profissao').value,
      'comentario': document.getElementById('comentario').value
  };

  // out put
  result.innerHTML = 'Nome: ' + dados.nome + '/ Idade: ' + dados.idade + '/ Profissao: ' + dados.profissao + '/ E-mail: ' + dados.email + '<br /> Comentario: ' + dados.comentario; 
}

function avisar() {
  alert("Em breve \nestamos preparando um novo espaço");
}