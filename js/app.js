let contadorFone = 0;
let contadorCelular = 0;
let contadorOculus = 0;
let valorTotalFone = 0;
let valorTotalCelular = 0;
let valorTotalOculus = 0;
let carrinho = document.getElementById('lista-produtos');
let subTotal = 0;
let textoSubTotal = document.getElementById('valor-total');

document.addEventListener('DOMContentLoaded', function() {
    let textolistaCarrinho = document.getElementById('lista-produtos').innerText;       
    let listaCarrinho = textolistaCarrinho.split('\n\n');    
    
    for (var i = 0; i < listaCarrinho.length; i++) {
        if (listaCarrinho[i].includes('Celular')) {
            contadorCelular = parseInt(listaCarrinho[i].split('x')[0]);
            valorTotalCelular = parseInt(extrairNomeValor(listaCarrinho[i]));
        }
        if (listaCarrinho[i].includes('Fone de ouvido')) {
            contadorFone = parseInt(listaCarrinho[i].split('x')[0]);
            valorTotalFone = parseInt(extrairNomeValor(listaCarrinho[i]));
        }
        if (listaCarrinho[i].includes('Oculus VR')) {
            contadorOculus = parseInt(listaCarrinho[i].split('x')[0]);
            valorTotalOculus = parseInt(extrairNomeValor(listaCarrinho[i]));
        }
    }

    subTotal = valorTotalCelular + valorTotalFone + valorTotalOculus;    
    textoSubTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${subTotal}</span>`;    
})

function adicionar() {
    let itemSelecionado = document.getElementById('produto').value;    
    let valorItemSelecionado = parseInt(extrairNomeValor(itemSelecionado));    
    let qtdeSelecionada = parseInt(document.getElementById('quantidade').value);      

    if (itemSelecionado.includes('Celular')) {
        contadorCelular = contadorCelular + qtdeSelecionada;
        valorTotalCelular = contadorCelular * valorItemSelecionado;
    }

    if (itemSelecionado.includes('Fone de ouvido')) {
        contadorFone = contadorFone + qtdeSelecionada;
        valorTotalFone = contadorFone * valorItemSelecionado;
    }

    if (itemSelecionado.includes('Oculus VR')) {
        contadorOculus = contadorOculus + qtdeSelecionada;
        valorTotalOculus = contadorOculus * valorItemSelecionado;
    }

    carrinho.innerHTML = '';

    if (contadorCelular > 0) {
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${contadorCelular}x</span> Celular <span class="texto-azul">R$${valorTotalCelular}</span>
        </section>`;
    }

    if (contadorFone > 0) {
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${contadorFone}x</span> Fone de Ouvido <span class="texto-azul">R$${valorTotalFone}</span>
        </section>`;
    }

    if (contadorOculus > 0) {
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${contadorOculus}x</span> Oculus VR <span class="texto-azul">R$${valorTotalOculus}</span>
        </section>`;
    }

    subTotal = valorTotalCelular + valorTotalFone + valorTotalOculus;
    textoSubTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${subTotal}</span>`;
}

function limpar() {
    contadorCelular = 0;
    contadorFone = 0;
    contadorOculus = 0;
    valorTotalCelular = 0;
    valorTotalFone = 0;
    valorTotalOculus = 0;
    subTotal = 0;

    carrinho.innerHTML = '';
    textoSubTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${subTotal}</span>`;
}

function extrairNomeValor(item) {
    var nomeValorItem = [];
        
    if (item.includes(' - ')) {
        nomeValorItem = item.split(' - R$')[1];
        return nomeValorItem;
    } else {
        nomeValorItem = item.split('R$')[1];
        return nomeValorItem;
    }
}