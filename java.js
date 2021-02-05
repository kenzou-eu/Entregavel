
var url = 'https://api.polijunior.com.br/produtos/';


var request= new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.onload = function(){
    const dados = request.response
    console.log(dados);
    var caixa = document.getElementById("caixa");
    for (var i = 0; i < 6; i++) {
        if (i == 0) {
            var newUl = document.createElement("ul");
            newUl.classList.add("container");
            caixa.appendChild(newUl);
        }   
        if (i == 3) {
            var newUl = document.createElement("ul");
            newUl.classList.add("container");
            caixa.appendChild(newUl);
        }   
        var newDiv = document.createElement("div");
        newDiv.classList.add("img_wrap");
        newUl.appendChild(newDiv);
        var newImg = document.createElement("img");
        newImg.classList.add("foto");
        newImg.src = dados[i].foto
        newDiv.appendChild(newImg);
        var newP = document.createElement("p");
        newP.classList.add("nomeCapsula")
        newP.innerHTML = dados[i].nome;
        newDiv.appendChild(newP)
        var newP = document.createElement("p");
        newP.innerHTML = "Intensidade: " + dados[i].intensidade;
        newDiv.appendChild(newP)
        var newP = document.createElement("p");
        newDiv.appendChild(newP)
        newP.innerHTML = "Preço: R$ " + dados[i].preco;
        var newP = document.createElement("p");
        newDiv.appendChild(newP)
        newP.innerHTML = dados[i].descricao;
    }

}
request.send()


