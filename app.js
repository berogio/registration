const input = document.querySelector(`.phone-nummber`);
const keys = document.querySelector(`.keys`)
const one = document.querySelector(`.key1`)
const two = document.querySelector(`.key2`)
const three = document.querySelector(`.key3`)

one.onclick = function write() {

    input.placeholder = `1`;
}

two.onclick = function write() {
    input.placeholder = `2`;
}

three.onclick = function write() {
    input.placeholder = `3`;
}