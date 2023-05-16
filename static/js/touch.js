// JavaScript
var touchArea = document.getElementById("touch-area");

// Menangani event sentuhan
touchArea.addEventListener("touchstart", handleTouchStart, false);
touchArea.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(event) {
    xDown = event.touches[0].clientX;
    yDown = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = event.touches[0].clientX;
    var yUp = event.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            console.log("ArrowLeft");

            // Mengubah sentuhan ke kiri menjadi event.key "ArrowLeft"
            var simulatedKeyEvent = new KeyboardEvent("keydown", {
                key: "ArrowLeft",
                bubbles: true,
                cancelable: true,
            });

            // Men-trigger event keydown
            document.dispatchEvent(simulatedKeyEvent);
        } else {
            console.log("ArrowRight");

            // Mengubah sentuhan ke kanan menjadi event.key "ArrowRight"
            var simulatedKeyEvent = new KeyboardEvent("keydown", {
                key: "ArrowRight",
                bubbles: true,
                cancelable: true,
            });

            // Men-trigger event keydown
            document.dispatchEvent(simulatedKeyEvent);
        }
    } else {
        if (yDiff > 0) {
            console.log("ArrowUp");
            
            // Mengubah sentuhan ke atas menjadi event.key "ArrowUp"
            var simulatedKeyEvent = new KeyboardEvent("keydown", {
                key: "ArrowUp",
                bubbles: true,
                cancelable: true,
            });

            // Men-trigger event keydown
            document.dispatchEvent(simulatedKeyEvent);
        }
    }

    // Mengatur xDown dan yDown menjadi null agar tidak mempengaruhi sentuhan berikutnya
    xDown = null;
    yDown = null;
}