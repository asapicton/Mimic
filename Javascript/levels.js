let nextLevel;
function startGame(level = nextLevel) {
    // level 1
    const level1 = new Level({
        levelNum: 1,
        imageSrc: 'Img/level1-beta.png',
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
            offsetY: GRID_MARGIN
        })   
        
    })

    // level 2
    const level2 = new Level({
        levelNum: 2,
        imageSrc: 'Img/level2-beta.png',
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
            offsetY: GRID_MARGIN
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
            offsetY: GRID_MARGIN
        })    
    })

    // level 3
    const level3 = new Level({
        levelNum: 3,
        imageSrc: 'Img/level3-beta.png',
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
                [3,1,1,1],
                [1,1,1,1]
            ],
            range: 1,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 4,
            offsetX: GRID_MARGIN,
            offsetY: GRID_MARGIN
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
                [3,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [0,1,1,1,1,1,1]
            ],
            range: 2,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 7,
            offsetX: GRID_WIDTH + (GRID_MARGIN * 2),
            offsetY: GRID_MARGIN
        })    
    })


    // level 4
    const level4 = new Level({
        levelNum: 4,
        imageSrc: 'Img/level4-beta.png',
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
                [0,0,0,0]
            ],
            range: 1,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 4,
            offsetX: GRID_MARGIN,
            offsetY: GRID_MARGIN
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
            offsetY: GRID_MARGIN
        })    
    })

    // level 5
    const level5= new Level({
        levelNum: 5,
        imageSrc: 'Img/level5-beta.png',
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
                [3,1,1,1],
                [1,0,1,1]
            ],
            range: 1,
            gridWidth: 482,
            gridHeight: 536,
            numRows: 4,
            offsetX: GRID_MARGIN,
            offsetY: GRID_MARGIN
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
                [0,1,1,3,1,1,1],
                [1,1,1,0,1,1,1],
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
            offsetY: GRID_MARGIN
        })    
    })
    // level 6
    const level6 = new Level({
        levelNum: 6,
        imageSrc: 'Img/level6-beta.png',
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
            offsetY: GRID_MARGIN
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
            offsetY: GRID_MARGIN
        })    
    })


// starts game based on level clicked on 
    if(level === "level1") {
        document.querySelector('#start').style.display = 'none'
        document.querySelector('#start-game').style.display = 'none'
        document.querySelector('#level1').style.display = 'inline'
        nextLevel = 'level2'
        playLevel(level1)
    } else if(level === "level2") {
        document.querySelector('#level2').style.display = 'inline'
        nextLevel = 'level3'
        playLevel(level2)
    } else if(level === "level3") {
        document.querySelector('#level3').style.display = 'inline'
        nextLevel = 'level4'
        playLevel(level3)
    } else if(level === "level4") {
        document.querySelector('#level4').style.display = 'inline'
        nextLevel = 'level5'
        playLevel(level4)
    } else if(level === "level5") {
        document.querySelector('#level5').style.display = 'inline'
        nextLevel = 'level6'
        playLevel(level5)
    } else if(level === "level6") {
        document.querySelector('#level6').style.display = 'inline'
        playLevel(level6)
    } 
}


