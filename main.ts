//  Functions Defined:
namespace robot {
    //% block
    export function moveForward() {
    
        direction = count % 4
        pause(100)
        if (direction == 0) {
            if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 0, -1))) {
                
            } else {
                grid.move(robot, 0, -1)
            }
            
        } else if (direction == 1) {
            if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 1, 0))) {
                
            } else {
                grid.move(robot, 1, 0)
            }
            
        } else if (direction == 2) {
            if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 0, 1))) {
                
            } else {
                grid.move(robot, 0, 1)
            }
            
        } else if (tiles.tileIsWall(grid.add(grid.getLocation(robot), -1, 0))) {
            
        } else {
            grid.move(robot, -1, 0)
        }
        
    }
       
        //% block
    export function  turnLeft() {
    
        direction = count % 4
        pause(500)
        if (direction == 0) {
            robot.setImage(assets.image`
                Robot Left
            `)
        } else if (direction == 1) {
            robot.setImage(assets.image`
                Robot Up
            `)
        } else if (direction == 2) {
            robot.setImage(assets.image`
                Robot Right
            `)
        } else {
            robot.setImage(assets.image`
                Robot Down
            `)
        }
        
        count += -1
        direction = count % 4
    }
    //%block
    export function turnRight() {
    
        direction = count % 4
        pause(500)
        if (direction == 0) {
            robot.setImage(assets.image`
                Robot Right
            `)
        } else if (direction == 1) {
            robot.setImage(assets.image`
                Robot Down
            `)
        } else if (direction == 2) {
            robot.setImage(assets.image`
                Robot Left
            `)
        } else {
            robot.setImage(assets.image`
                Robot Up
            `)
        }
        
        count += 1
        direction = count % 4
    }

    //%block
    function canMove(inputDir: string): boolean {
        if (inputDir == "left") {
            if (direction == 0) {
                if (tiles.tileIsWall(grid.add(grid.getLocation(robot), -1, 0))) {
                    return false
                } else {
                    return true
                }
                
            } else if (direction == 1) {
                if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 0, -1))) {
                    return false
                } else {
                    return true
                }
                
            } else if (direction == 2) {
                if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 1, 0))) {
                    return false
                } else {
                    return true
                }
                
            } else if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 0, 1))) {
                return false
            } else {
                return true
            }
            
        } else if (inputDir == "right") {
            if (direction == 0) {
                if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 1, 0))) {
                    return false
                } else {
                    return true
                }
                
            } else if (direction == 1) {
                if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 0, 1))) {
                    return false
                } else {
                    return true
                }
                
            } else if (direction == 2) {
                if (tiles.tileIsWall(grid.add(grid.getLocation(robot), -1, 0))) {
                    return false
                } else {
                    return true
                }
                
            } else if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 0, -1))) {
                return false
            } else {
                return true
            }
            
        } else if (inputDir == "forward") {
            if (direction == 0) {
                if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 0, -1))) {
                    return false
                } else {
                    return true
                }
                
            } else if (direction == 1) {
                if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 1, 0))) {
                    return false
                } else {
                    return true
                }
                
            } else if (direction == 2) {
                if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 0, 1))) {
                    return false
                } else {
                    return true
                }
                
            } else if (tiles.tileIsWall(grid.add(grid.getLocation(robot), -1, 0))) {
                return false
            } else {
                return true
            }
            
        } else if (inputDir == "backward") {
            if (direction == 0) {
                if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 0, 0))) {
                    return false
                } else {
                    return true
                }
                
            } else if (direction == 1) {
                if (tiles.tileIsWall(grid.add(grid.getLocation(robot), -1, 0))) {
                    return false
                } else {
                    return true
                }
                
            } else if (direction == 2) {
                if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 0, -1))) {
                    return false
                } else {
                    return true
                }
                
            } else if (tiles.tileIsWall(grid.add(grid.getLocation(robot), 1, 0))) {
                return false
            } else {
                return true
            }
            
        } else {
            return false
        }
        
    }
    //%block
    export function goalReached(): boolean {
        if (tiles.tileIs(grid.getLocation(robot), assets.tile`
            myTile1
        `)) {
            return true
        } else {
            return false
        }
    
    }
    //%block
    export function beginScreen() {
    
        count = 8000
        tiles.setTilemap(tilemap`
            level1
        `)
        robot = sprites.create(assets.image`
            Robot Up
        `, SpriteKind.Player)
        grid.place(robot, tiles.getTileLocation(1, 5))
    }
    
}






function botMover(n: number) {
    for (let index = 0; index < n; index++) {
        turnRight()
    }
    moveForward()
}





let robot : Sprite = null
let count = 0
let direction = 0
//  Call of Commands:
beginScreen()
moveForward()
turnLeft()
turnRight()
moveForward()
game.onUpdateInterval(100, function on_update_interval() {
    
    direction = count % 4
    if (goalReached()) {
        game.over(true)
    }
    
})
