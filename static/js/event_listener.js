const jump = new Audio("../../static/music/jump.mp3")
const enterDoor = new Audio("../../static/music/enter-door.mp3")

window.addEventListener('keydown', (event) => {
    // console.log(event.key);
    move(event.key)
    // if (!player.preventInput) {
    //     const key = event.key;

    //     // jump
    //     if (key === 'w' || key === 'ArrowUp') {

    //         jump.play();

    //         if (player.velocity.y === 0) {
    //             player.velocity.y = -25;
    //         }
    //     } else if (key === 'a' || key === 'ArrowLeft') {
    //         keys.a.pressed = true;
    //     } else if (key === 'd' || key === 'ArrowRight') {
    //         keys.d.pressed = true;
    //     } else {
    //         for (let i = 0; i < doors.length; i++) {
    //             const door = doors[i];

    //             if (player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width && player.hitbox.position.x >= door.position.x && player.hitbox.position.y + player.hitbox.height >= door.position.y && player.hitbox.position.y <= door.position.y + door.height) {
    //                 // console.log('arrive');
    //                 enterDoor.play();

    //                 player.velocity.x = 0;
    //                 player.velocity.y = 0;
    //                 player.preventInput = true;
    //                 player.switchSprite('enterDoor');
    //                 door.play();
    //                 return
    //             }
    //         }
    //     }
    // }
});

window.addEventListener('keyup', (event) => {
    // console.log(event.key);
    stop(event.key);
});

function move(way) {
    if (!player.preventInput) {
        const key = way;

        // jump
        if (key === 'w' || key === 'ArrowUp') {

            jump.play();

            if (player.velocity.y === 0) {
                player.velocity.y = -25;
            }
        } else if (key === 'a' || key === 'ArrowLeft') {
            keys.a.pressed = true;
        } else if (key === 'd' || key === 'ArrowRight') {
            keys.d.pressed = true;
        } else {
            for (let i = 0; i < doors.length; i++) {
                const door = doors[i];

                if (player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width && player.hitbox.position.x >= door.position.x && player.hitbox.position.y + player.hitbox.height >= door.position.y && player.hitbox.position.y <= door.position.y + door.height) {
                    // console.log('arrive');
                    enterDoor.play();

                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    player.preventInput = true;
                    player.switchSprite('enterDoor');
                    door.play();
                    return
                }
            }
        }
    }
}

function stop(way) {
    if (way === 'a' || way === 'ArrowLeft') {
        keys.a.pressed = false;
    } else if (way === 'd' || way === 'ArrowRight') {
        keys.d.pressed = false;
    }
}

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

    var way = "none"

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            // console.log('ArrowLeft');
            // left
            way = 'ArrowLeft';
        } else {
            // console.log('ArrowRight');
            // right
            way = 'ArrowRight';
        }
    } else {
        if (yDiff > 0) {
            // console.log('ArrowUp');
            // Jump
            way = 'ArrowUp';
        } else {
            // console.log('ArrowDown');
            // Enter
            way = 'ArrowDown';
        }
    }

    move(way);

    document.addEventListener("touchend", function () {
        // console.log("end");
        stop(way);
    });

    xDown = null;
    yDown = null;
}