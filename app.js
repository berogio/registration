const input = document.querySelector(`.phone-nummber`);
const keys = document.querySelector(`.keys`)
const one = document.querySelector(`.key1`)
const two = document.querySelector(`.key2`)
const three = document.querySelector(`.key3`)
const four = document.querySelector(`.key4`)
const five = document.querySelector(`.key5`)
const six = document.querySelector(`.key6`)
const seven = document.querySelector(`.key7`)
const eight = document.querySelector(`.key8`)
const nine = document.querySelector(`.key9`)
const zero = document.querySelector(`.key11`)
const remove = document.querySelector(`.key10`)


one.onclick = function write() {
    const h2 = document.querySelector(".nummber-input");
    let number = `1`;
    h2.insertAdjacentHTML(`beforeend`, number);
}

two.onclick = function write() {
    const h2 = document.querySelector(".nummber-input");
    let number = "2";
    h2.insertAdjacentHTML(`beforeend`, number);
}

three.onclick = function write() {
    const h2 = document.querySelector(".nummber-input");
    let number = "3";
    h2.insertAdjacentHTML(`beforeend`, number);
}
four.onclick = function write() {
    const h2 = document.querySelector(".nummber-input");
    let number = "4";
    h2.insertAdjacentHTML(`beforeend`, number);
}
five.onclick = function write() {
    const h2 = document.querySelector(".nummber-input");
    let number = "5";
    h2.insertAdjacentHTML(`beforeend`, number);
}
six.onclick = function write() {
    const h2 = document.querySelector(".nummber-input");
    let number = "6";
    h2.insertAdjacentHTML(`beforeend`, number);
}
seven.onclick = function write() {
    const h2 = document.querySelector(".nummber-input");
    let number = "7";
    h2.insertAdjacentHTML(`beforeend`, number);
}
eight.onclick = function write() {
    const h2 = document.querySelector(".nummber-input");
    let number = "8";
    h2.insertAdjacentHTML(`beforeend`, number);
}
nine.onclick = function write() {
    const h2 = document.querySelector(".nummber-input");
    let number = "9";
    h2.insertAdjacentHTML(`beforeend`, number);
}
zero.onclick = function write() {
    const h2 = document.querySelector(".nummber-input");
    let number = "0";
    h2.insertAdjacentHTML(`beforeend`, number);
}
remove.onclick = function write() {
    remove.addEventListener('click', () => {
        document.location.reload();
    });
}