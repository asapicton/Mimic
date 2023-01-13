
function reload(level) {
    document.querySelector('#win').innerHTML = ''
    document.querySelector('#win').style.display = 'none'
    let player = level.player
    let mimic = level.mimic
    
    // resets grids
    for(var i = 0; i < player.grid.length; i++) {
        player.grid[i] = player.gridDefault[i].slice();
    }
    for(var i = 0; i < mimic.grid.length; i++) {
        mimic.grid[i] = mimic.gridDefault[i].slice();
    }
    

    // resets positions
    player.gridPosX = 0
    player.gridPosY = 0
    mimic.gridPosX = 0
    mimic.gridPosY = 0
    player.position = {x: PLAYER_START_X, y: PLAYER_START_Y}
    mimic.position = {x: MIMIC_START_X, y: MIMIC_START_Y}
}

/*
Stops game if both player and mimic are on their finishing
space of their grids at the same time
*/
function checkWinState(mimic, player) {
    if(player.onFinish && mimic.onFinish && notMoving(player, mimic)) {
        player.onFinish = false
        mimic.onFinish = false
        return true
    } else {
        return false
    }
}


/*
Updates grid for a sprite
0 = grid position sprite cannot move to (barrier)
1 = grid position sprite can move to 
2 = sprites current grid position
3 = finishing space
*/
function updateGrid(sprite, direction, numSpaces) {
    if(direction === "right") {

        /*
        checks if sprite is currently on finish line, sets previous space to
        a 3 instead of a 1 if it is
        */  
        if(sprite.onFinish) {
            sprite.grid[sprite.gridPosY][sprite.gridPosX] = 3
            sprite.grid[sprite.gridPosY][sprite.gridPosX + numSpaces] = 2
            sprite.onFinish = false
        } else {

            // sets previous grid space back to 1, current to 2
            sprite.grid[sprite.gridPosY][sprite.gridPosX] = 1

            //updates onFinish property
            if (sprite.grid[sprite.gridPosY][sprite.gridPosX + numSpaces] === 3) {
                sprite.onFinish = true
            }
            sprite.grid[sprite.gridPosY][sprite.gridPosX + numSpaces] = 2
        }
        sprite.gridPosX += numSpaces   
        console.log(sprite.grid)
    } else if (direction === "left") {
        if(sprite.onFinish) {
            sprite.grid[sprite.gridPosY][sprite.gridPosX] = 3
            sprite.grid[sprite.gridPosY][sprite.gridPosX - numSpaces] = 2
            sprite.onFinish = false
        } else {
            sprite.grid[sprite.gridPosY][sprite.gridPosX] = 1
            if(sprite.grid[sprite.gridPosY][sprite.gridPosX - numSpaces] === 3) {
                sprite.onFinish = true
            }
            sprite.grid[sprite.gridPosY][sprite.gridPosX - numSpaces] = 2
        }
        sprite.gridPosX -= numSpaces
        console.log(sprite.grid)

    } else if (direction === "down") {
        if(sprite.onFinish) {
            sprite.grid[sprite.gridPosY][sprite.gridPosX] = 3
            sprite.grid[sprite.gridPosY + numSpaces][sprite.gridPosX] = 2
            sprite.onFinish = false
        } else {
            sprite.grid[sprite.gridPosY][sprite.gridPosX] = 1
            if(sprite.grid[sprite.gridPosY + numSpaces][sprite.gridPosX] === 3) {
                sprite.onFinish = true
            }
            sprite.grid[sprite.gridPosY + numSpaces][sprite.gridPosX] = 2
        }
        sprite.gridPosY += numSpaces
        console.log(sprite.grid)
  
    } else {
        if(sprite.onFinish) {
            sprite.grid[sprite.gridPosY][sprite.gridPosX] = 3
            sprite.grid[sprite.gridPosY - numSpaces][sprite.gridPosX] = 2
            sprite.onFinish = false
        } else {
            sprite.grid[sprite.gridPosY][sprite.gridPosX] = 1
            if(sprite.grid[sprite.gridPosY - numSpaces][sprite.gridPosX] === 3) {
                sprite.onFinish = true
            }
            sprite.grid[sprite.gridPosY - numSpaces][sprite.gridPosX] = 2
        }
        sprite.gridPosY -= numSpaces
        console.log(sprite.grid)
    }
}


/*
Makes sure that neither player or mimic is moving before allowing
another keypress
*/
function notMoving(sprite1, sprite2) {
    return ((
        sprite1.velocity.x === 0 &&
        sprite1.velocity.y === 0 &&
        sprite2.velocity.x === 0 &&
        sprite2.velocity.y === 0
    ))
}

/* 
allows sprites to be moved, called when arrow key is pressed
checks if movement would cause sprite to be out of bounds, to 
move in two directions at once, or to land on a barrier
*/
function allowMovement(sprite, direction) {
    
    switch(direction) {
        case "right":
            var bounds = sprite.position.x + (sprite.spaceWidth * sprite.range) 
            if(bounds > (sprite.gridWidth + sprite.offsetX)) {
                return false
            }
            var oneAway = sprite.grid[sprite.gridPosY][sprite.gridPosX + 1]
            var twoAway = sprite.grid[sprite.gridPosY][sprite.gridPosX + sprite.range]
            return(
                    (twoAway === 1 || twoAway === 3) &&
                    (oneAway === 1 || oneAway === 3)
                  )
        case "left":
            var bounds = sprite.position.x - (sprite.spaceWidth * sprite.range) 
            if(bounds < sprite.offsetX) {
                return false
            }
            var oneAway = sprite.grid[sprite.gridPosY][sprite.gridPosX - 1]
            var twoAway = sprite.grid[sprite.gridPosY][sprite.gridPosX - sprite.range]
            return(
                    (twoAway === 1 || twoAway === 3) &&
                    (oneAway === 1 || oneAway === 3)
                  )
        case "down":
            var bounds = sprite.position.y + (sprite.spaceHeight * sprite.range) 
            if(bounds > (sprite.gridHeight + sprite.offsetY)) {
                return false
            }
            var oneAway = sprite.grid[sprite.gridPosY + 1][sprite.gridPosX]
            var twoAway = sprite.grid[sprite.gridPosY + sprite.range][sprite.gridPosX]
            return(
                    (twoAway === 1 || twoAway === 3) &&
                    (oneAway === 1 || oneAway === 3)
                  )
        case "up":
            var bounds = sprite.position.y - (sprite.spaceHeight * sprite.range)
            if(bounds < sprite.offsetY) {
                return false
            }
            var oneAway = sprite.grid[sprite.gridPosY - 1][sprite.gridPosX]
            var twoAway = sprite.grid[sprite.gridPosY - sprite.range][sprite.gridPosX]
            return(
                    (twoAway === 1 || twoAway === 3) &&
                    (oneAway === 1 || oneAway === 3)
                  )
    }
}

/*
allows mimic to be moved only 1 space instead of 2, happens when
2 spaces in direction of movement is a barrier or the end of the grid, 
but 1 space is free, causing mimic to be put onto odd spaces of the grid
*/
function allowOddMovement(mimic, direction) {
    let gridX = mimic.gridPosX
    let gridY = mimic.gridPosY
    switch(direction) {
        case "right":
            if((mimic.grid[gridY][gridX + 1]) && (gridX + 2 >= 7 || !(mimic.grid[gridY][gridX + 2]))) {
                return true
            } else {
                return false
            }
        case "left":
            if(mimic.grid[gridY][gridX - 1] && (gridX - 2 < 0 || !(mimic.grid[gridY][gridX - 2]))) {
                return true
            } else {
                return false
            }
        case "up":
            if(gridY === 0) {
                return false
            } else if(mimic.grid[gridY - 1][gridX] && (gridY - 2 < 0 || !(mimic.grid[gridY - 2][gridX]))) {
                return true
            } else {
                return false
            }
        case "down":
            if(gridY === 6) {
                return false
            } else if(mimic.grid[gridY + 1][gridX] && (gridY + 2 >= 7 || !(mimic.grid[gridY + 2][gridX]))) {
                return true
            } else {
                return false
            }
    }
}

/*
moves player in direction specified by keydown event, is called continuously within
animation loop until it sets specified direction key back to false
*/
function movePlayer(player, direction) {
    switch(direction) {
        case "right":
            player.velocity.x = PLAYER_VELOCITY
            // checks distance travelled against distance needed to be covered to
            // get to the next square 
    
            if(player.position.x - player.startX >= PLAYER_SPACE_WIDTH) {

                // puts player in exact right spot
                player.position.x = player.startX + PLAYER_SPACE_WIDTH
                player.velocity.x = 0
                player.moveRight = false
                updateGrid(player, direction, 1)
            }
            console.log(player.velocity.x)
            break
        case "left":
            player.velocity.x = -PLAYER_VELOCITY
            if(player.startX - player.position.x >= PLAYER_SPACE_WIDTH) {

                // puts player in exact right spot
                player.position.x = player.startX - PLAYER_SPACE_WIDTH

                player.velocity.x = 0
                player.moveLeft = false
                updateGrid(player, direction, 1)
            }
            console.log(player.velocity.x)
            break
        case "up":
            player.velocity.y = -PLAYER_VELOCITY
            if(player.startY - player.position.y > PLAYER_SPACE_HEIGHT) {
                // puts player in exact right spot
                player.position.y = player.startY - PLAYER_SPACE_HEIGHT

                player.velocity.y = 0
                player.moveUp = false
                updateGrid(player, direction, 1)
            }
            console.log(player.velocity.y)
            break
        case "down":
            player.velocity.y = PLAYER_VELOCITY
            if(player.position.y - player.startY > PLAYER_SPACE_HEIGHT) {

                // puts player in exact right spot
                player.position.y = player.startY + PLAYER_SPACE_HEIGHT
                player.velocity.y = 0
                player.moveDown = false
                updateGrid(player, direction, 1)
            }
            console.log(player.velocity.y)
            break
    }
} 

/*
moves player in direction specified by keydown event, is called continuously within
animation loop until setting specified direction key back to false
*/
function moveMimic(mimic, direction) {
    switch(direction) {
        case "right":
            mimic.velocity.x = PLAYER_VELOCITY - 10

            // checks distance travelled against distance needed to be covered to
            // get to the next square 
            if(allowOddMovement(mimic, direction)) {
                if(mimic.position.x - mimic.startX >= mimic.spaceWidth) {
                    mimic.velocity.x = 0
                    mimic.moveRight = false
                    // puts mimic in exact right spot
                    mimic.position.x = mimic.startX + (mimic.spaceWidth)
                    updateGrid(mimic, direction, 1)
                }
            } else {
                if(mimic.position.x - mimic.startX >= mimic.spaceWidth) {
                    mimic.velocity.x = 0
                    mimic.moveRight = false
                    // puts mimic in exact right spot
                    mimic.position.x = mimic.startX + (mimic.spaceWidth * 2)
                    updateGrid(mimic, direction, 2)
                }
            }
            break
        case "left":
            mimic.velocity.x = -PLAYER_VELOCITY + 10
            if(allowOddMovement(mimic, direction)) {
                if(mimic.startX - mimic.position.x >= mimic.spaceWidth) {

                    // puts mimic in exact right spot
                    mimic.position.x = mimic.startX - (mimic.spaceWidth)
                    mimic.velocity.x = 0
                    mimic.moveLeft = false
                    updateGrid(mimic, direction, 1)
                }
            } else {
                if(mimic.startX - mimic.position.x >= mimic.spaceWidth) {

                    // puts mimic in exact right spot
                    mimic.position.x = mimic.startX - (mimic.spaceWidth * 2)
                    mimic.velocity.x = 0
                    mimic.moveLeft = false
                    updateGrid(mimic, direction, 2)
                }
            }
            break
        case "up":
            mimic.velocity.y = -PLAYER_VELOCITY + 10
            if(allowOddMovement(mimic, direction)) {
                if(mimic.startY - mimic.position.y > mimic.spaceHeight) {
                    // puts mimic in exact right spot
                    mimic.position.y = mimic.startY - (mimic.spaceHeight)
                    mimic.velocity.y = 0
                    mimic.moveUp = false
                    updateGrid(mimic, direction, 1)
                }
            } else {
                if(mimic.startY - mimic.position.y > mimic.spaceHeight) {
                    // puts mimic in exact right spot
                    mimic.position.y = mimic.startY - (mimic.spaceHeight * 2)
                    mimic.velocity.y = 0
                    mimic.moveUp = false
                    updateGrid(mimic, direction, 2)
                }
            }
            break
        case "down":
            mimic.velocity.y = PLAYER_VELOCITY - 10
            if(allowOddMovement(mimic, direction)) {
                if(mimic.position.y - mimic.startY > mimic.spaceHeight) {

                    // puts mimic in exact right spot
                    mimic.position.y = mimic.startY + (mimic.spaceHeight)
                    mimic.velocity.y = 0
                    mimic.moveDown = false
                    updateGrid(mimic, direction, 1)
                } 
            } else {
                if(mimic.position.y - mimic.startY > mimic.spaceHeight) {

                    // puts mimic in exact right spot
                    mimic.position.y = mimic.startY + (mimic.spaceHeight * 2)
                    mimic.velocity.y = 0
                    mimic.moveDown = false
                    updateGrid(mimic, direction, 2)
                }
            }
            break
    }
} 

