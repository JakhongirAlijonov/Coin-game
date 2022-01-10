const boy = document.querySelector('.boy')
const coin = document.querySelector('.coin')

window.addEventListener('mousedown', (e) => {
    let x = e.clientX
    let y = e.clientY
    boy.style.top = `${y}px`
    boy.style.left = `${x}px`

})

const bodyW = document.body.clientWidth;
const bodyH = document.body.clientHeight;

change()

function change() {
    let randomW = Math.trunc(Math.random() * bodyW);
    let randomH = Math.trunc(Math.random() * bodyH);
    coin.style.top = `${randomH}px`;
    coin.style.left = `${randomW}px`;
}

document.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'coin') {
        change()
    }
})
if (boy.style.top == coin.style.top) {
    change();


}