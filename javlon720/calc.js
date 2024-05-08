let a = ''; //first number
let b = ''; //secont number
let sign = '';//знак операции
let finish = false;

const digit = ['0', '1', '1', '3', '4', '5', '6', '7', '8', '9', '.',];
const action = ['-', '+', 'X', '/'];


//screen
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = ''; //first number result 
    b = ''; //second number 
    sign = ''; //знак
    finish = false;
    out.textContent = 0;
    Document.querySelector('ac').onclick = clearAll;

    document.querySelector('buttons').onclick = (Event) => {
        if (!Event.target.classList.contains('btn')) return;
        //not press button
        if (Event.target.classList.contains('ac'))
            //press button clearAll ac
            out.textContent = '';
        //give press button
        const key = Event.target.textContent;

        //if press buttons 0-9
        if (digit.includes(key)) {
            if (b === '' && sign === '') {
                a += key;

                out.textContent = a;
            }
            else if (a !== '' && b !== '' && finish) {

            }
            else {
                b += key;
                out.textContent = a;
            }
            console.log(a, b, sign);
            return;
        }

        //of press + - / *
        if (action.includes(key)) {
            sign = key;
            out.textContent = sign;
            console.log(sign);
            return;
        }
    }
    //press  = 
    if (key === '=') {
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                a = a / b;
               break
               case "%":
                a=a/100 ;
                
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }

}