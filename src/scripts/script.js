function calcular(event) {
  event.preventDefault();

  let nomeInput = document.getElementById("nome").value;
  
  let alturaInput = document.getElementById("altura").value;

  let pesoInput = document.getElementById ("peso").value;

  let resultado = document.getElementById("resultado");

  let textResult = document.getElementById("text-result");

  let calculo = (pesoInput / (alturaInput * alturaInput));

  if(calculo < 18.5) {
    textResult.innerHTML = "O IMC é de "+ calculo.toFixed(2) +". "+ nomeInput +" está abaixo do peso.";
    } else if (calculo < 25) {
      textResult.innerHTML = "O IMC é de "+ calculo.toFixed(2) +". "+ nomeInput +" está com o peso normal.";
      } else if (calculo < 30) {
        textResult.innerHTML = "O IMC é de "+ calculo.toFixed(2) +". "+ nomeInput +" está acima do peso.";
        } else if (calculo < 35) {
          textResult.innerHTML = "O IMC é de "+ calculo.toFixed(2) +". "+ nomeInput +" está com obesidade grau I.";
          } else if (calculo < 40) {
            textResult.innerHTML = "O IMC é de "+ calculo.toFixed(2) +". "+ nomeInput +" está com obesidade grau II.";
            } else if (calculo > 40.1) {
              textResult.innerHTML = "O IMC é de "+ calculo.toFixed(2) +". "+ nomeInput +" está com obesidade grau III.";
            }
}