let text = document.getElementById('text');
let count = 0;

function plus() {
    count += 1;
    text.innerText = count;

    if (count == 10) {
        count = -1;
    }
}