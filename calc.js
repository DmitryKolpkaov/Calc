let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']; //числа и точка(использвуется с числами)
const action = ['-', '+', 'x', '/', '%']; //действия

const out = document.querySelector('.calc-display p');// класс + тег, потому что с ещё одним классом не работает

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = '0';
}

function percent() {
    a = a / 100;
    sign = '';
    out.textContent = '';
}

function minusBeforeText() {
    a = '';
    sign = '';
    out.textContent = 'Ошибка!'
}

// document.querySelector('.ac').onclick = clearAll();
// document.querySelector('.percent').onclick = percent();
// document.querySelector('.plus-minus').onclick = minusBeforeText();

document.querySelector('.buttons').onclick = (event)=> {
        if(!event.target.classList.contains('but')) return;
        if(event.target.classList.contains('ac')) return;
        if(event.target.classList.contains('plus-minus')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if(digit.includes(key)) {
        if(b === '' && sign === '') {
            a += key;
            console.log(a, b, sign);
            out.textContent = a;
        }else if(a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    if(action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }


    if(key === '=') {
        if(b === '')
            b = a;
        switch (sign) {
            case "+" :
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "/":
                a = a / b;
                break;
            case "%":
                a = a / 100;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }

}

