//setTimeout(...); ili window.setTimeout(...);
let divResult = document.getElementById('result');

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
/*
btn1.addEventListener('click', () => {
    setTimeout(() => {
        console.log('Zdravo 1!');
    }, 1000 * 2);
    setTimeout(() => {
        console.log('Zdravo 2!');
    }, 1000 / 2);
});
- Asinhroni JS: Pozivaju se dva sata koji nezavisno otkucavaju vreme
- Svaki po zavrsetku svog vremena poziva callback funkciju
*/

// 0    0.2   0.4   0.6   0.8    1        1.2   1.4   1.6   1.8   2
// cl1        cl2                cl3,is1              is2         is3

let timer = null;

btn1.addEventListener('click', () => {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(timer === null) {
        timer = setTimeout(() => {
            divResult.innerHTML = `${sati}:${minuti}:${sekunde}`;
        }, 1000);
    }
});

btn2.addEventListener('click', () => {
    clearTimeout(timer);
    timer = null;
});

// 0          0.2     0.4          0.6   0.8     1     1.2   1.4   1.6   1.8   2
// timer=cl1          timer = cl2        reset   is1
//                                       cl2                          


let clock = setInterval(() => {
    let datum = new Date();
    let sekunde = datum.getSeconds();
    divResult.innerHTML = `Trenutni broj sekundi je: ${sekunde}`;
}, 500);

btn3.addEventListener('click', () => {
    clearInterval(clock);
});