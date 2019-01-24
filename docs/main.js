$(document).ready(function(){
    $('.submit').click(function(event){

        console.log('Clicked button')

        var nome = $('.nome').val()
        var telefone = $('.telefone').val()
        var mensagem = $('.mensagem').val()
        var empresa = $('.empresa').val()
        var cargo = $('.cargo').val()
        var site = $('.site').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(nome.length > 5){
            statusElm.append('<div>Nome válido</div>')
        }   else {
            event.preventDefault()
            statusElm.append('<div>Nome não é válido</div>')
        }

        if(telefone.length >= 8) {
            statusElm.append('<div>Número válido</div>')
        }   else {
            event.preventDefault()
            statusElm.append('<div>Número não é válido</div>')
        }

        if(empresa.length >= 2){
            statusElm.append('<div>Empresa válida</div>')
        }   else {
            event.preventDefault()
            statusElm.append('<div>Empresa não é válida</div>')
        }

        if(cargo.length >= 3){
            statusElm.append('<div>Posição válida</div>')
        }   else {
            event.preventDefault()
            statusElm.append('<div>Posição não é válida</div>')
        }

        if(site.length > 5){
            statusElm.append('<div>Site válido</div>')
        }   else {
            event.preventDefault()
            statusElm.append('<div>Site não é válido</div>')

        if(mensagem.length >= 5) {
            statusElm.append('<div>Mensagem válida</div>')
        }   else {
            event.preventDefault()
            statusElm.append('<div>Mensagem não é válida</div>')
        }

        }
    })
})