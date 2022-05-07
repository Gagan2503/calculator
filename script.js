let scr = document.getElementById('screen');
    let btn = document.querySelectorAll('button');
    let screenvalue = '';
    for (const item of btn) {
      item.addEventListener('click', (e) =>{
        btnText = e.target.innerText;
        if ( btnText== 'X' ) {
          btnText = '*';
          screenvalue +=btnText;
          scr.value = screenvalue;
          
        }
        else if (btnText == 'C') {
          screenvalue ="";
          scr.value = screenvalue;          
        }
        else if (item.id == "backspace") {
          screenvalue ="";
          scr.value = scr.value.slice(0, - 1);
    }
        else if (btnText == '=') {
         
          scr.value = eval(screenvalue)
          
        }
        else{
          screenvalue += btnText;
          scr.value = screenvalue
        }
      })
      
    }