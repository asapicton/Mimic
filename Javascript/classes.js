// Sprite class, used for drawing images to screen
class Sprite {

    constructor({
        imageSrc, 
        position = {x: 0, y: 0}, 
        velocity = {x: 0, y: 0},
        grid, 
        range,
        gridWidth,
        gridHeight,
        numRows,
        spaceWidth  = gridWidth / numRows,
        spaceHeight = gridHeight / numRows,
        offsetX,
        offsetY,
        onFinish
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
        this.onFinish = onFinish
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

    constructor({levelNum, imageSrc, barrierSrc, position = {x: 0, y: 0}, player, mimic}) {
        this.position = position
        
        // background grid with finishing spaces
        this.imageSrc = imageSrc
        this.image = new Image()
        this.image.src = imageSrc

        //bariers overlayed on top of player and mimic
        this.barrierSrc = barrierSrc
        this.barrierImg = new Image()
        this.barrierImg.src = barrierSrc
        

        // blurs background to show menu screen
        this.blurImg = new Image()
        this.blurImg.src = "Img/blur.png"

        // logo
        this.logo = new Image()
        this.logo.src = "Img/logo.jpg"


        this.level = new Sprite(imageSrc)
        this.player = player
        this.mimic = mimic
        this.levelNum = levelNum
        this.won = false
    }

    loadLevel() {
        draw.drawImage(this.image, this.position.x, this.position.y)
    }
    blur() {
        draw.drawImage(this.blurImg, this.position.x, this.position.y)
    }
    menu() {
        draw.drawImage(this.logo, this.position.x, this.position.y)
    }
    updateBarrier() {
        draw.drawImage(this.barrierImg, this.position.x, this.position.y)
    }

    update() {
        this.loadLevel()
    }

}
