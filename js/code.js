lightbox.option({
    albumLabel: 'Foto %1 de %2',
    fadeDuration: 200 
});

AOS.init();

$(window).scroll(function(){
    //console.log($(window).scrollTop());
    if($(window).scrollTop() >= 550)
    {
        $('.seta-sobe').fadeIn();

    }
    else{
        $('.seta-sobe').fadeOut();

    }
});

$('.seta-sobe').click(function(){
    //aplica animação de rolagem no body,html até o topo
    $('body, html').animate({
       //fontSize: 30,
       //margin: 100
       scrollTop: 0
    }, 800);
});

$('.rolagem').click(function(){
    var id = $(this).attr('href');
    var destino = $(id).offset().top
    $('html,body').animate({
        scrollTop: destino
    });
});

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
      var forms = document.getElementsByClassName('needs-validation');
      // Faz um loop neles e evita o envio
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  /*$.ajax({
      url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      success: function(dados){
        for (let i = 0, i < dados.lengh; i++ ){
            tag = ('<option>'+ dados[7].nome + '</option>');
        }  
        
      },
      error: function(msg){


      }
  });*/