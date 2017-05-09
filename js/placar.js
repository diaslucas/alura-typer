$("#botao-placar").click(mostraPlacar);

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Lucas";
    var numPalavras = $("#contador-palavras").text();
    var botaoRemover = "<a href='#' class='botao-remover'><i class='small material-icons'>delete</i></a>"


    var linha = "<tr>" +
                    "<td>" + usuario + "</td>" +
                    "<td>" + numPalavras + "</td>" +
                    "<td>" + botaoRemover + "</td>"  
                "</tr>";

var linha = novaLinha(usuario, numPalavras);
linha.find(".botao-remover").click(removeLinha);

corpoTabela.prepend(linha);
$(".placar").slideDown(500);
scrollPlacar();
}


function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top;
    $("body").animate(
    {
        scrollTop: posicaoPlacar+"px"
    }, 1000);
}

function novaLinha(usuario, palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(){
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut(800);
    setTimeout(function(){
        linha.remove();
    },800);
    
    //$(this).parent().parent().remove();
}


function mostraPlacar(){
    $(".placar").stop().slideToggle(800);
}