document.addEventListener("DOMContentLoaded", () => {
    //Llamamos a los ids
  const addMoney = document.getElementById("add-money-btn");
  const drawMoney = document.getElementById("draw-money-btn");
  const sendMoney = document.getElementById("send-money-btn");
  const changePassword = document.getElementById("change-password-btn");
  const exit = document.getElementById("exit");
  const moneyShow = document.getElementById("money");

  //Declaramos variables
  let money = 1000;
  let PIN_CORRECTO = 1234;
  let tryLogin = 3;

  /**
   * @function showMoneyScreen
   * Mostrar el dinero en el banco total.
   */
  const showMoneyScreen = () => {
    moneyShow.innerHTML = `El saldo actual es de: ${money.toFixed(2) + "€"}`;
    console.log(moneyShow);
  };
  /**
   * @function addMoneyScreen
   * Añadimos dinero en el banco.
   */
  const addMoneyScreen = () => {
    let addMoneyMore = parseFloat(prompt("Inserte el importe."));
    if (addMoneyMore < 0 || isNaN(addMoneyMore)) {
      alert("Inserte cantidad válida por favor.");
    } else {
      alert(
        `Se insertó correctamente el importe de ${addMoneyMore.toFixed(2)}`
      );
      money += addMoneyMore;
      showMoneyScreen();
    }
  };
  /**
   * @function drawMoneyScreen
   * Retiramos dinero de la cuenta
   */
  const drawMoneyScreen = () => {
    let drawMoneyMore = parseFloat(prompt("Inserte el importe."));
    if (drawMoneyMore < 0 || isNaN(drawMoneyMore) || drawMoneyMore > money) {
      alert("Inserte cantidad válida por favor.");
    } else {
      alert(`Se restó correctamente el importe de ${drawMoneyMore}`);
      money -= drawMoneyMore;
      showMoneyScreen();
    }
  };
  /**
   * @function sendMoneyScreen 
   * Tranferimos dinero a una cuenta bancaria
   */
  const sendMoneyScreen = () => {
    let monto = prompt("Inserta cantidad a transferir");
    if (monto < 0 || isNaN(monto) || monto > money) {
      alert("Inserte cantidad válida por favor.");
    } else {
      let account = prompt(`Inserta cuenta de destino`);
      if (expression(account)) {
        alert(`Se transferó ${monto.toFixed(2)} en la cuenta ${account}`);
    }
    else{
        alert(`Inserte una cuenta válida`)
       
    }
  };
};
  /**
   * @function expression
   * Expresion regular de la cuenta
   */
  const expression = (iban) => {
        return /[a-zA-Z]{2}[0-9]{20}$/g.test(iban);
  };
  /**
   * @function changePasswordScreen
   * Cambiar el PIN del iniciado de sesión
   */
  const changePasswordScreen = () => {
    let pin = parseInt(prompt("Cambie su PIN"));
    if (pin === PIN_CORRECTO || isNaN(pin)) {
      alert("Introduzca un valor válido");
    } else {
      alert(`Su nuevo PIN es ${pin}`);
      PIN_CORRECTO = pin;
      console.log(PIN_CORRECTO);
    }
  };
  /**
   * @function exitScreen
   * Salir del cajero
   */
  const exitScreen = () => {
    window.location.replace("templates/exit.html");
  };
  /**
   * @function loginScreen
   * Iniciar sesion en el cajero
   */
  const loginScreen = () => {
    let pin = parseInt(prompt("Inserte PIN"));
    while (pin !== PIN_CORRECTO && tryLogin > 1) {
      alert("Pin incorrecto");
      tryLogin--;
      alert(`Te quedan ${tryLogin}`);
      pin = parseInt(prompt("Inserte PIN"));
    }

    if (pin === PIN_CORRECTO) {
      alert("Has iniciado sesión correctamente");
      showMoneyScreen();
      return;
    } else {
      alert("Tu cajero ha sido bloqueado");
      window.location.replace("/templates/block.html");
    }
  };

  //Llamada a la funcion para que al iniciar la página, tengamos que poner el pin
  loginScreen();

    //Eventos que llaman a los botones
  addMoney.addEventListener("click", addMoneyScreen);
  drawMoney.addEventListener("click", drawMoneyScreen);
  sendMoney.addEventListener("click", sendMoneyScreen);
  changePassword.addEventListener("click", changePasswordScreen);
  exit.addEventListener("click", exitScreen);

});
