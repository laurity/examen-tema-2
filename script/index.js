
    const addMoney = document.getElementById("add-money-btn");
    const drawMoney = document.getElementById("draw-money-btn");
    const sendMoney = document.getElementById("send-money-btn");
    const changePassword = document.getElementById("change-password-btn");
    const changePasswordInput = document.getElementById("change-password-input");
    const exit = document.getElementById("exit");
    const moneyShow = document.getElementById("money");

    let money = 1000;
    let PIN_CORRECTO = 1234;
    let tryLogin = 3;
    

    const showMoneyScreen = () =>{
        moneyShow.innerHTML = `El saldo actual es de: ${money.toFixed(2)+"€"}`;
        console.log(moneyShow);
    }

    const addMoneyScreen = () =>{
        let addMoneyMore = parseFloat(prompt('Inserte el importe.'));
        if(addMoneyMore <0 || isNaN(addMoneyMore)){
            alert('Inserte cantidad válida por favor.');
        }
        else{
            alert(`Se insertó correctamente el importe de ${addMoneyMore.toFixed(2)}`);
            money += addMoneyMore;
            showMoneyScreen();
        }
    }

    const drawMoneyScreen = () =>{
        let drawMoneyMore = parseFloat(prompt('Inserte el importe.'));
        if(drawMoneyMore <0 || isNaN(drawMoneyMore) || drawMoneyMore > money){
            alert('Inserte cantidad válida por favor.');
        }
        else{
            alert(`Se restó correctamente el importe de ${drawMoneyMore}`);
            money -= drawMoneyMore;
            showMoneyScreen();
        }
    }

    const sendMoneyScreen = () => {
        let monto = prompt('Inserta cantidad a transferir');
        if (monto < 0 || isNaN(monto) || monto>money){
            alert('Inserte cantidad válida por favor.');
        }
        else{
            let account = prompt(`Inserta cuenta de destino`);
        }
    }
    const expression = (iban) =>{
        ff
    }
    const changePasswordScreen = () =>{
       let pin = parseInt(prompt('Cambie su PIN'));
       if(pin === PIN_CORRECTO || isNaN(pin)){
        alert('Introduzca un valor válido')
       }
       else{
        alert(`Su nuevo PIN es ${pin}`);
        PIN_CORRECTO = pin;
        console.log(PIN_CORRECTO);
       }
    }
     const exitScreen = () =>{
        window.location.replace("templates/exit.html");
    }
    const loginScreen = () => {

        let pin = parseInt(prompt('Inserte PIN'));
        alert(pin);
            while (pin !== PIN_CORRECTO && tryLogin > 1) {  
                alert('Pin incorrecto');
                tryLogin--;
                alert(tryLogin)
                alert("aaaaaaaa");
                pin = parseInt(prompt('Inserte PIN'));
        };

        if(pin === PIN_CORRECTO){
            alert('Has iniciado sesión correctamente');
            showMoneyScreen();
            return
        }
        else{
            alert('Tu cajero ha sido bloqueado');
            window.location.replace('/templates/block.html');   
        }
    }


    loginScreen();
    
    addMoney.addEventListener('click', addMoneyScreen);
    drawMoney.addEventListener('click', drawMoneyScreen);
    sendMoney.addEventListener('click', sendMoneyScreen);
    changePassword.addEventListener('click', changePasswordScreen);
    exit.addEventListener('click', exitScreen);








