$(document).ready(function(){$(".submit").click(function(e){console.log("Clicked button");var d=$(".nome").val(),v=$(".telefone").val(),i=$(".mensagem").val(),n=$(".empresa").val(),a=$(".cargo").val(),l=$(".site").val(),p=$(".status");p.empty(),d.length>5?p.append("<div>Nome válido</div>"):(e.preventDefault(),p.append("<div>Nome não é válido</div>")),v.length>=8?p.append("<div>Número válido</div>"):(e.preventDefault(),p.append("<div>Número não é válido</div>")),n.length>=2?p.append("<div>Empresa válida</div>"):(e.preventDefault(),p.append("<div>Empresa não é válida</div>")),a.length>=3?p.append("<div>Posição válida</div>"):(e.preventDefault(),p.append("<div>Posição não é válida</div>")),l.length>5?p.append("<div>Site válido</div>"):(e.preventDefault(),p.append("<div>Site não é válido</div>"),i.length>=5?p.append("<div>Mensagem válida</div>"):(e.preventDefault(),p.append("<div>Mensagem não é válida</div>")))})});