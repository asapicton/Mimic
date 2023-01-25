// canvas setup
const canvas = document.querySelector('canvas')
const draw = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576 

// Sprite constants
var player;
var mimic;

// Used to stop animation frames
let requestId;

/*
Main function, called once per level or per reset
*/
function playLevel(level) {
    player = level.player
    mimic = level.mimic
    // resets animation loop and win state from previous level
    window.cancelAnimationFrame(requestId)
    document.querySelector('#next').style.display = 'none'
    document.querySelector('#win-game').style.display = 'none'

    let blur = false


    // animates game frames
    function animate() {
        requestId = window.requestAnimationFrame(animate)


        draw.fillStyle = 'black'
        draw.fillRect(0, 0, canvas.width, canvas.height)
        
        // constantly updates player movements
        level.update()
        player.update()
        mimic.update()
        level.updateBarrier()
        
        if(blur) {
            level.blur()
        }
    

        // moves player/mimic with move function if directional key has been pressed
        if(player.moveUp) {
            movePlayer(player, "up")
        }
        if(mimic.moveUp) {
            moveMimic(mimic, "up")
        }
        if(player.moveDown) {
            movePlayer(player, "down")
        }
        if(mimic.moveDown) {
            moveMimic(mimic, "down")
        }
        if(player.moveLeft) {
            movePlayer(player, "left")
        }
        if(mimic.moveLeft) {
            moveMimic(mimic, "left")
        }
        if(mimic.moveRight) {
            moveMimic(mimic, "right")
        }
        if(player.moveRight) {
            movePlayer(player, "right")
        }

        
        // checks if both player and mimic are on winning positions
        if(checkWinState(mimic, player)) {
            // displays win on screen
            level.won = true
            document.querySelector('#level' + level.levelNum).style.background = '#3c8144'
            blur = true
            if(level.levelNum === 8) {
                document.querySelector('#win-game').style.display = 'inline'
            } else {
                document.querySelector('#next').style.display = 'inline'
            }
        }
    }


    // checks for keypresses to allow player movement control
    window.addEventListener('keydown', (event) => {
        if(notMoving(player, mimic) && !level.won) {
            switch (event.key) {

                // moves sprite right
                case 'ArrowRight':
                    if(allowMovement(mimic, "right") || allowOddMovement(mimic, "right")) {
                        mimic.startX = mimic.position.x
                        mimic.moveRight = true
                    }
                    if(allowMovement(player, "right")) {
                        player.startX = player.position.x
                        player.moveRight = true
                    }
                    break

                // moves sprite left 
                case 'ArrowLeft':
                    if(allowMovement(mimic, "left") || allowOddMovement(mimic, "left")) {
                        mimic.moveLeft = true
                        mimic.startX = mimic.position.x
                    }
                    if(allowMovement(player, "left")) {
                        player.moveLeft = true
                        player.startX = player.position.x
                    }
                    break

                // moves sprite up 
                case 'ArrowUp':
                    if(allowMovement(mimic, "up") || allowOddMovement(mimic, "up")) {
                        mimic.moveUp = true
                        mimic.startY = mimic.position.y
                    } 
                    if(allowMovement(player, "up")) {
                        player.moveUp = true
                        player.startY = player.position.y
                    }
                    break

                // moves sprite down
                case 'ArrowDown':
                    if(allowMovement(mimic, "down") || allowOddMovement(mimic, "down")) {
                        mimic.moveDown = true
                        mimic.startY = mimic.position.y
                    }
                    if(allowMovement(player, "down")) {
                        player.moveDown = true
                        player.startY = player.position.y
                    }
                    break
            }
        }
    })
    animate()
}
