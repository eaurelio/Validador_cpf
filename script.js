console.log('Javascript no Jutsu!')

let sucesso = document.getElementById('success');
let erro = document.getElementById('error');


function validaCpf(cpf) {

  if (cpf.length != 11) {
    return false
  } else {
    let numeros = cpf.substring(0, 9)
    let digitos = cpf.substring(9)

    //Validação do primeiro dígito

    let soma = 0
    for (i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }
    console.log(soma)

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(0)) {
      return false
    }

    //Validação do segundo dígito

    soma = 0
    numeros = cpf.substring(0, 10)

    for(k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(1)) {
      return false
    }

    return true
  }
}


function validar() {
  erro.style.display = 'none'
  sucesso.style.display = 'none'
  
  console.log('Validar acionado')
  let cpf = document.getElementById('cpf').value;  
  let resultado = validaCpf(cpf);

  if (resultado) {
    sucesso.style.display = 'block'
  }
  else {
    erro.style.display = 'block'
  }
}