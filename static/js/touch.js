document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

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
        // console.log('ArrowLeft');
      // Mengubah pergerakan ke kiri menjadi event.key "ArrowLeft"
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" }));
    } else {
        // console.log('ArrowRight');
      // Mengubah pergerakan ke kanan menjadi event.key "ArrowRight"
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
    }
  } else {
    if (yDiff > 0) {
        // console.log('ArrowUp');
      // Mengubah pergerakan ke atas menjadi event.key "ArrowUp"
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
    } else {
        // console.log('ArrowDown');
      // Mengubah pergerakan ke bawah menjadi event.key "ArrowDown"
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
    }
  }

  // Mengatur xDown dan yDown menjadi null agar tidak mempengaruhi sentuhan berikutnya
  xDown = null;
  yDown = null;
}