let position = 0;

function startAnimation() {
    const box = document.getElementById("box");
    position = 0;

    const interval = setInterval(() => {
        if (position >= 300) {
            clearInterval(interval);
        } else {
            position += 5;
            box.style.left = position + "px";
        }
    }, 20);
}
