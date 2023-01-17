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
    document.querySelector('#win').innerHTML = ''
    document.querySelector('#win').style.display = 'none'
    document.querySelector('#next-level').style.display = 'none'



    // animates game frames
    function animate() {
        requestId = window.requestAnimationFrame(animate)

        draw.fillStyle = 'black'
        draw.fillRect(0, 0, canvas.width, canvas.height)
        
        // constantly updates player movements
        level.update()
        player.update()
        mimic.update()
        


        // moves player/mimic with move function if directional key has been pressed
        if(player.moveUp) {
            movePlayer(player, "up")

            // checks if both player and mimic are on winning positions
            if(checkWinState(mimic, player)) {

                // displays win on screen
                level.won = true
                document.querySelector('#win').style.display = 'flex'
                document.querySelector('#next-level').style.display = 'flex'
                document.querySelector('#win').innerHTML = 'LEVEL COMPLETE'
            }
        }
        if(mimic.moveUp) {
            moveMimic(mimic, "up")
            if(checkWinState(mimic, player)) {
                level.won = true
                document.querySelector('#win').style.display = 'flex'
                document.querySelector('#next-level').style.display = 'flex'
                document.querySelector('#win').innerHTML = 'LEVEL COMPLETE'
            }
        }
        if(player.moveDown) {
            movePlayer(player, "down")
            if(checkWinState(mimic, player)) {
                level.won = true
                document.querySelector('#win').style.display = 'flex'
                document.querySelector('#next-level').style.display = 'flex'
                document.querySelector('#win').innerHTML = 'LEVEL COMPLETE'
            }
        }
        if(mimic.moveDown) {
            moveMimic(mimic, "down")
            if(checkWinState(mimic, player)) {
                level.won = true
                document.querySelector('#win').style.display = 'flex'
                document.querySelector('#next-level').style.display = 'flex'
                document.querySelector('#win').innerHTML = 'LEVEL COMPLETE'
            }
        }
        if(player.moveLeft) {
            movePlayer(player, "left")
            if(checkWinState(mimic, player)) {
                level.won = true
                document.querySelector('#win').style.display = 'flex'
                document.querySelector('#next-level').style.display = 'flex'
                document.querySelector('#win').innerHTML = 'LEVEL COMPLETE'
            }
        }
        if(mimic.moveLeft) {
            moveMimic(mimic, "left")
            if(checkWinState(mimic, player)) {
                level.won = true
                document.querySelector('#win').style.display = 'flex'
                document.querySelector('#next-level').style.display = 'flex'
                document.querySelector('#win').innerHTML = 'LEVEL COMPLETE'
            }
        }
        if(mimic.moveRight) {
            moveMimic(mimic, "right")
            if(checkWinState(mimic, player)) {
                level.won = true
                document.querySelector('#win').style.display = 'flex'
                document.querySelector('#next-level').style.display = 'flex'
                document.querySelector('#win').innerHTML = 'LEVEL COMPLETE'
            }
        }
        if(player.moveRight) {
            movePlayer(player, "right")
            if(checkWinState(mimic, player)) {
                level.won = true
                document.querySelector('#win').style.display = 'flex'
                document.querySelector('#next-level').style.display = 'flex'
                document.querySelector('#win').innerHTML = 'LEVEL COMPLETE'
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
