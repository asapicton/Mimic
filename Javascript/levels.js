let nextLevel;
let prevLevel;
let numLevels = 8

// updates button style to show which level player is currently on
function updateButtons(num) {
    document.querySelector('#level' + num).style.border = '3px solid black'
    for(let i = 1; i <= numLevels; i++) {
        if(i !== num) {
            document.querySelector('#level' + i).style.border = '3px solid grey'
        }
    }
}

// Called after pressing start game from menu screen. Sets all level buttons
// to visible and starts the first level
function enterGame() {
    document.querySelector('#start').style.display = 'none'
    for(let i = 1; i <= numLevels; i++) {
        document.querySelector('#level' + i).style.display = 'inline'
    }
    startGame('level1')
}

function startGame(level = nextLevel) {
   
    // level 1
    const level1 = new Level({
        levelNum: 1,
        imageSrc: 'Img/level1-beta.png',
        barrierSrc: 'Img/level1-beta-barrier.png',
        position: {
            x: 0,
            y: 0
        },

        // player
        player: new Sprite ({
            imageSrc: 'Img/player-beta.png',
            position: {
                x: PLAYER_START_X,
                y: PLAYER_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the player grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            */
            grid: [
                [2,1,1,1],
                [1,1,1,1],
                [1,1,3,1],
                [1,1,1,1]
            ],
            range: 1,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 4,
            offsetX: GRID_MARGIN,
            offsetY: GRID_MARGIN,
            onFinish: false
        }),

        // mimic of player 
        mimic: new Sprite({
            imageSrc: 'Img/mimic-beta.png',
            position: {
                x: MIMIC_START_X,
                y: MIMIC_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the mimic grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            3 = finishing space
            */
            grid: [
                [2,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,3,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1]
            ],
            range: 2,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 7,
            offsetX: GRID_WIDTH + (GRID_MARGIN * 2),
            offsetY: GRID_MARGIN,
            onFinish: false
        })   
        
    })

    // level 2
    const level2 = new Level({
        levelNum: 2,
        imageSrc: 'Img/level2-beta.png',
        barrierSrc: 'Img/level2-beta-barrier.png',
        position: {
            x: 0,
            y: 0
        },
    
        // player
        player: new Sprite ({
            imageSrc: 'Img/player-beta.png',
            position: {
                x: PLAYER_START_X,
                y: PLAYER_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the player grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            */
            grid: [
                [2,1,1,3],
                [1,1,1,0],
                [1,1,1,1],
                [1,1,1,1]
            ],
            range: 1,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 4,
            offsetX: GRID_MARGIN,
            offsetY: GRID_MARGIN,
            onFinish: false
        }),

        // mimic of player 
        mimic: new Sprite({
            imageSrc: 'Img/mimic-beta.png',
            position: {
                x: MIMIC_START_X,
                y: MIMIC_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the mimic grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            3 = finishing space
            */
            grid: [
                [2,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,3]
            ],
            range: 2,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 7,
            offsetX: GRID_WIDTH + (GRID_MARGIN * 2),
            offsetY: GRID_MARGIN,
            onFinish: false
        })    
    })

    // level 2
    const level3 = new Level({
        levelNum: 3,
        imageSrc: 'Img/level3.png',
        barrierSrc: 'Img/level3-barrier.png',
        position: {
            x: 0,
            y: 0
        },
    
        // player
        player: new Sprite ({
            imageSrc: 'Img/player-beta.png',
            position: {
                x: PLAYER_START_X,
                y: PLAYER_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the player grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            */
            grid: [
                [2,1,1,1],
                [1,1,0,1],
                [1,1,1,1],
                [1,1,1,1]
            ],
            range: 1,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 4,
            offsetX: GRID_MARGIN,
            offsetY: GRID_MARGIN,
            onFinish: true
        }),

        // mimic of player 
        mimic: new Sprite({
            imageSrc: 'Img/mimic-beta.png',
            position: {
                x: MIMIC_START_X,
                y: MIMIC_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the mimic grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            3 = finishing space
            */
            grid: [
                [2,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [3,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1]
            ],
            range: 2,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 7,
            offsetX: GRID_WIDTH + (GRID_MARGIN * 2),
            offsetY: GRID_MARGIN,
            onFinish: false
        })    
    })

    // level 3
    const level4 = new Level({
        levelNum: 4,
        imageSrc: 'Img/level4-beta.png',
        barrierSrc: 'Img/level4-beta-barrier.png',
        position: {
            x: 0,
            y: 0
        },
    
        // player
        player: new Sprite ({
            imageSrc: 'Img/player-beta.png',
            position: {
                x: PLAYER_START_X,
                y: PLAYER_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the player grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            */
            grid: [
                [2,1,1,1],
                [1,3,1,1],
                [1,1,1,1],
                [1,1,1,1]
            ],
            range: 1,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 4,
            offsetX: GRID_MARGIN,
            offsetY: GRID_MARGIN,
            onFinish: false
        }),

        // mimic of player 
        mimic: new Sprite({
            imageSrc: 'Img/mimic-beta.png',
            position: {
                x: MIMIC_START_X,
                y: MIMIC_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the mimic grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            3 = finishing space
            */
            grid: [
                [2,1,1,1,1,1,1],
                [1,1,3,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,0,1,1,1,1]
            ],
            range: 2,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 7,
            offsetX: GRID_WIDTH + (GRID_MARGIN * 2),
            offsetY: GRID_MARGIN,
            onFinish: false
        })    
    })


    // level 4
    const level5 = new Level({
        levelNum: 5,
        imageSrc: 'Img/level5-beta.png',
        barrierSrc: 'Img/level5-beta-barrier.png',
        position: {
            x: 0,
            y: 0
        },
    
        // player
        player: new Sprite ({
            imageSrc: 'Img/player-beta.png',
            position: {
                x: PLAYER_START_X,
                y: PLAYER_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the player grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            */
            grid: [
                [2,0,0,0],
                [1,0,0,0],
                [1,1,1,3],
                [1,0,0,0]
            ],
            range: 1,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 4,
            offsetX: GRID_MARGIN,
            offsetY: GRID_MARGIN,
            onFinish: false
        }),

        // mimic of player 
        mimic: new Sprite({
            imageSrc: 'Img/mimic-beta.png',
            position: {
                x: MIMIC_START_X,
                y: MIMIC_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the mimic grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            3 = finishing space
            */
            grid: [
                [2,1,1,1,1,1,1],
                [0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0],
                [0,0,3,0,0,0,0],
                [0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0],
                [0,0,0,0,0,0,0]
            ],
            range: 2,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 7,
            offsetX: GRID_WIDTH + (GRID_MARGIN * 2),
            offsetY: GRID_MARGIN,
            onFinish: false
        })    
    })
     // level 4
     const level6 = new Level({
        levelNum: 6,
        imageSrc: 'Img/level6.png',
        barrierSrc: 'Img/level6-barrier.png',
        position: {
            x: 0,
            y: 0
        },
    
        // player
        player: new Sprite ({
            imageSrc: 'Img/player-beta.png',
            position: {
                x: PLAYER_START_X,
                y: PLAYER_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the player grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            */
            grid: [
                [2,1,1,1],
                [1,1,1,1],
                [1,1,1,1],
                [1,1,3,1]
            ],
            range: 1,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 4,
            offsetX: GRID_MARGIN,
            offsetY: GRID_MARGIN,
            onFinish: false
        }),

        // mimic of player 
        mimic: new Sprite({
            imageSrc: 'Img/mimic-beta.png',
            position: {
                x: MIMIC_START_X,
                y: MIMIC_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the mimic grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            3 = finishing space
            */
            grid: [
                [2,1,1,1,0,0,0],
                [0,0,0,1,0,0,0],
                [1,1,0,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,3,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1]
            ],
            range: 2,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 7,
            offsetX: GRID_WIDTH + (GRID_MARGIN * 2),
            offsetY: GRID_MARGIN,
            onFinish: false
        })    
    })

    // level 5
    const level7 = new Level({
        levelNum: 7,
        imageSrc: 'Img/level7-beta.png',
        barrierSrc: 'Img/level7-beta-barrier.png',
        position: {
            x: 0,
            y: 0
        },
    
        // player
        player: new Sprite ({
            imageSrc: 'Img/player-beta.png',
            position: {
                x: PLAYER_START_X,
                y: PLAYER_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the player grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            */
            grid: [
                [2,1,1,1],
                [1,1,1,1],
                [1,1,1,1],
                [3,0,1,1]
            ],
            range: 1,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 4,
            offsetX: GRID_MARGIN,
            offsetY: GRID_MARGIN,
            onFinish: false
        }),

        // mimic of player 
        mimic: new Sprite({
            imageSrc: 'Img/mimic-beta.png',
            position: {
                x: MIMIC_START_X,
                y: MIMIC_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the mimic grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            3 = finishing space
            */
            grid: [
                [2,1,1,1,1,1,0],
                [0,0,1,3,1,1,1],
                [0,0,0,0,0,0,0],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1]
            ],
            range: 2,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 7,
            offsetX: GRID_WIDTH + (GRID_MARGIN * 2),
            offsetY: GRID_MARGIN,
            onFinish: false
        })    
    })
    // level 6
    const level8 = new Level({
        levelNum: 8,
        imageSrc: 'Img/level8-beta.png',
        barrierSrc: 'Img/level8-beta-barrier.png',
        position: {
            x: 0,
            y: 0
        },
    
        // player
        player: new Sprite ({
            imageSrc: 'Img/player-beta.png',
            position: {
                x: PLAYER_START_X,
                y: PLAYER_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the player grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            */
            grid: [
                [2,1,1,1],
                [1,1,3,1],
                [1,1,1,1],
                [1,1,1,1]
            ],
            range: 1,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 4,
            offsetX: GRID_MARGIN,
            offsetY: GRID_MARGIN,
            onFinish: false
        }),

        // mimic of player 
        mimic: new Sprite({
            imageSrc: 'Img/mimic-beta.png',
            position: {
                x: MIMIC_START_X,
                y: MIMIC_START_Y
            },

            /* 
            2D levelMap array corresponds to each space in the mimic grid. 

            0 = a space the player is not allowed to move to
            1 = a space the player cannot move to
            2 = the player's position
            3 = finishing space
            */
            grid: [
                [2,1,1,1,1,1,1],
                [1,1,1,1,1,1,3],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,0,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1]
            ],
            range: 2,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 7,
            offsetX: GRID_WIDTH + (GRID_MARGIN * 2),
            offsetY: GRID_MARGIN,
            onFinish: false
        })    
    })


// starts game based on level clicked on 
    if(level === "level1") {
        //updates button styles for current level and completed levels
        updateButtons(1)

        document.querySelector('#menu').style.display = 'none'
        document.querySelector('#tutorial1').style.display = 'inline'
        nextLevel = 'level2'
        playLevel(level1)
    } else if(level === "level2") {
        updateButtons(2)
        document.querySelector('#tutorial2').style.display = 'inline'
        nextLevel = 'level3'
        playLevel(level2)
    } else if(level === "level3") {
        updateButtons(3)
        nextLevel = 'level4'
        playLevel(level3)
    } else if(level === "level4") {
        updateButtons(4)
        document.querySelector('#tutorial3').style.display = 'inline'
        nextLevel = 'level5'
        playLevel(level4)
    } else if(level === "level5") {
        updateButtons(5)
        nextLevel = 'level6'
        playLevel(level5)
    } else if(level === "level6") {
        updateButtons(6)
        document.querySelector('#tutorial4').style.display = 'inline'
        nextLevel = 'level7'
        playLevel(level6)
    } else if (level === 'level7') {
        updateButtons(7)
        nextLevel = 'level8'
        playLevel(level7)
    } else if (level === 'level8') {
        updateButtons(8)
        playLevel(level8)
    }
}


