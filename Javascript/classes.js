// Sprite class, used for drawing images to screen
class Sprite {

    constructor({
        imageSrc, 
        position = {x: 0, y: 0}, 
        velocity = {x: 0, y: 0},
        grid, 
        gridDefault,
        range,
        gridWidth,
        gridHeight,
        numRows,
        spaceWidth  = gridWidth / numRows,
        spaceHeight = gridHeight / numRows,
        offsetX,
        offsetY
    }) {
        // sprite image
        this.imageSrc      = imageSrc
        this.image         = new Image()
        this.image.src     = imageSrc

        // x and y position and velocity in terms of pixels 
        this.position      = position
        this.startX        = 0
        this.startY        = 0
        this.velocity      = velocity
        
        // x and y position in terms of grid spaces
        this.gridPosX = 0
        this.gridPosY = 0

        // dimensions of the grid the sprite moves in 
        this.grid = grid // changes during movement
        this.gridDefault = gridDefault// used to reset back to original
        this.gridWidth = gridWidth
        this.gridHeight = gridHeight
        this.spaceWidth = spaceWidth
        this.spaceHeight = spaceHeight
        this.range = range
        this.offsetX = offsetX
        this.offsetY = offsetY

        // up to date directions to allow movement
        this.moveRight = false,
        this.moveLeft = false,
        this.moveUp = false,
        this.moveDown = false

        // determines if sprite is on finishing square
        this.onFinish = false
    }

    // draws to screen based on top left corner x, y position
    drawSprite() {
        draw.drawImage(this.image, this.position.x, this.position.y)
    }

    // updates via animation loop
    update() {
        this.drawSprite()
        
        //updates velocity
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

// level class for each individual levels layout
class Level {

    constructor({imageSrc, position = {x: 0, y: 0}, levelMap, player, mimic}) {
        this.levelMap = levelMap
        this.position = position
        this.imageSrc = imageSrc
        this.image = new Image()
        this.image.src = imageSrc
        this.level = new Sprite(imageSrc)

        this.player = player
        this.mimic = mimic
    }

    loadLevel() {
        draw.drawImage(this.image, this.position.x, this.position.y)
    }

    update() {
        this.loadLevel()
    }

}
