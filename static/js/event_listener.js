const jump = new Audio("../../static/music/jump.mp3")
const enterDoor = new Audio("../../static/music/enter-door.mp3")

window.addEventListener('keydown', (event) => {
    // console.log(event.key);
    if (!player.preventInput) {
        const key = event.key;

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
});

window.addEventListener('keyup', (event) => {
    // console.log(event.key);
    switch(event.key) {
        // Move Left
        case 'a':
            keys.a.pressed = false;
        break
        // Move Right
        case 'd':
            keys.d.pressed = false;
        break
        
        // Move Left
        case 'ArrowLeft':
            keys.a.pressed = false;
        break
        // Move Right
        case 'ArrowRight':
            keys.d.pressed = false;
        break
    }
});