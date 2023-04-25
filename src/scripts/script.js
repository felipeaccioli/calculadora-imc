function calcular(event) {
  event.preventDefault();

  let nomeInput = document.getElementById("nome").value;
  
  let alturaInput = document.getElementById("altura").value;

  let pesoInput = document.getElementById ("peso").value;

  let resultadoResult = document.getElementById("resultado");

  let textResult = document.getElementById("text-result");

  let calcular = (pesoInput / (alturaInput^2));

  if(calculo < 18.5) {
    textResult.innerHTML = "Abaixo do peso.";
    } else 
      if (calculo < 25) {
      textResult.innerHTML = "Peso normal.";
      } else 
      if (calculo < 30) {
      textResult.innerHTML = "Acima do peso.";
        } else
        if (calculo < 35) {
        textResult.innerHTML = "Obesidade grau I.";
          } else
          if (calculo < 40) {
          textResult.innerHTML = "Obesidade grau II.";
            } else
            if (calculo > 40.1) {
            textResult.innerHTML = "Obesidade grau III.";
            }
}