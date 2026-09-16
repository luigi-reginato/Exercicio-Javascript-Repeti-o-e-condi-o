//! iniciante 1 e 2
const botao_confirmar = document.querySelector(".botao");
const input_tabuada = document.querySelector(".numero");

botao_confirmar.addEventListener("click", () => {
    resultado = input_tabuada.value;
    
    for (let i= 1; i < 11; i++) {
        tabuada =  resultado * i;
        console.log(tabuada);
        
    }
});

//! iniciante 3

const botao_N_confirmar = document.querySelector(".botao_n");
const input_N = document.querySelector(".numero_n");

botao_N_confirmar.addEventListener("click", () => {
    resultado = input_N.value;
    temp = 0;

    for (let i = 1; i <= resultado; i++) {
        temp = i + temp;
        
        console.log(temp);
        
    }
});

//! intermediario 1


// for (let i = 1; i < 51; i++) {
    
//      if (i % 2 === 0) {
    //         console.log(i);
    //      }
    
    //     }
    
//! intermediario 2

const botao_advinha_confirmar = document.querySelector(".botao_advinha");
const input_advinha = document.querySelector(".numero_advinha");
const paragrafo = document.querySelector("#mensagem");
const imagem = document.querySelector("#imagemGato");


botao_advinha_confirmar.addEventListener("click", () => {
    const resultado = Number(input_advinha.value);
    
    if (resultado === 75) {
    
        paragrafo.textContent = "ACERTOU👌";
        imagem.style.display = "block";
    }

    else {
        paragrafo.textContent = "ERROU😢";
        imagem.style.display = "none";
    }

});

