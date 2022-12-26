function calculadora() {
  const operacao = Number(
    prompt(
      "Escolha uma operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)"
    )
  );
  // se operação for maior ou igual a 7 aparece mensagem de erro e chama calculadora novamente
  if (!operacao || operacao >= 7) {
    alert("Erro - Operação Inválida!");
    calculadora();
  } else {
    // Number altera o valor do tipo string para números
    let n1 = Number(prompt("Insira o primeiro valor"));
    let n2 = Number(prompt("Insira o segundo valor"));
    let resultado;

    if (!n1 || !n2) {
      alert("Erro - parâmetros inválidos!");
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperação();
      }

      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperação();
      }

      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperação();
      }

      function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperação();
      }

      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperação();
      }

      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
        novaOperação();
      }

      function novaOperação() {
        let opcao = prompt("Deseja fazer outra operação:\n 1- Sim\n 2 - Não");

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert("Até mais!");
        } else {
          alert("Digite uma opção válida!");
          novaOperação();
        }
      }
    }

    // O switch vai tratar os casos de uma única entrada. Veja que cada case se refere diretamente ao num. O if não te restringe a quantas entradas serão avaliadas. Você pode comparar diretamente duas ou mais condições dentro de um único if.

    // if (operacao == 1) {
    //   soma();
    // } else if (operacao == 2) {
    //   subtracao();
    // } else if (operacao == 3) {
    //   multiplicacao();
    // } else if (operacao == 4) {
    //   divisaoReal();
    // } else if (operacao == 5) {
    //   divisaoInteira();
    // } else if (operacao == 6) {
    //   potenciacao();
    // }

    switch (operacao) {
      case 1:
        soma();
        break;
      case 2:
        subtracao();
        break;
      case 3:
        multiplicacao();
        break;
      case 4:
        divisaoReal();
        break;
      case 5:
        divisaoInteira();
        break;
      case 6:
        potenciacao();
    }
  }
}

calculadora();
