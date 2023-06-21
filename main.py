# Functions Defined:
def moveForward():
    global direction
    direction = count % 4
    pause(100)
    if direction == 0:
        if tiles.tile_is_wall(grid.add(grid.get_location(robot), 0, -1)):
            pass
        else:
            grid.move(robot, 0, -1)
    elif direction == 1:
        if tiles.tile_is_wall(grid.add(grid.get_location(robot), 1, 0)):
            pass
        else:
            grid.move(robot, 1, 0)
    elif direction == 2:
        if tiles.tile_is_wall(grid.add(grid.get_location(robot), 0, 1)):
            pass
        else:
            grid.move(robot, 0, 1)
    elif tiles.tile_is_wall(grid.add(grid.get_location(robot), -1, 0)):
        pass
    else:
        grid.move(robot, -1, 0)
def turnLeft():
    global direction, count
    direction = count % 4
    pause(500)
    if direction == 0:
        robot.set_image(assets.image("""
            Robot Left
        """))
    elif direction == 1:
        robot.set_image(assets.image("""
            Robot Up
        """))
    elif direction == 2:
        robot.set_image(assets.image("""
            Robot Right
        """))
    else:
        robot.set_image(assets.image("""
            Robot Down
        """))
    count += -1
    direction = count % 4
def turnRight():
    global direction, count
    direction = count % 4
    pause(500)
    if direction == 0:
        robot.set_image(assets.image("""
            Robot Right
        """))
    elif direction == 1:
        robot.set_image(assets.image("""
            Robot Down
        """))
    elif direction == 2:
        robot.set_image(assets.image("""
            Robot Left
        """))
    else:
        robot.set_image(assets.image("""
            Robot Up
        """))
    count += 1
    direction = count % 4
def canMove(inputDir: str):
    if inputDir == "left":
        if direction == 0:
            if tiles.tile_is_wall(grid.add(grid.get_location(robot), -1, 0)):
                return False
            else:
                return True
        elif direction == 1:
            if tiles.tile_is_wall(grid.add(grid.get_location(robot), 0, -1)):
                return False
            else:
                return True
        elif direction == 2:
            if tiles.tile_is_wall(grid.add(grid.get_location(robot), 1, 0)):
                return False
            else:
                return True
        elif tiles.tile_is_wall(grid.add(grid.get_location(robot), 0, 1)):
            return False
        else:
            return True
    elif inputDir == "right":
        if direction == 0:
            if tiles.tile_is_wall(grid.add(grid.get_location(robot), 1, 0)):
                return False
            else:
                return True
        elif direction == 1:
            if tiles.tile_is_wall(grid.add(grid.get_location(robot), 0, 1)):
                return False
            else:
                return True
        elif direction == 2:
            if tiles.tile_is_wall(grid.add(grid.get_location(robot), -1, 0)):
                return False
            else:
                return True
        elif tiles.tile_is_wall(grid.add(grid.get_location(robot), 0, -1)):
            return False
        else:
            return True
    elif inputDir == "forward":
        if direction == 0:
            if tiles.tile_is_wall(grid.add(grid.get_location(robot), 0, -1)):
                return False
            else:
                return True
        elif direction == 1:
            if tiles.tile_is_wall(grid.add(grid.get_location(robot), 1, 0)):
                return False
            else:
                return True
        elif direction == 2:
            if tiles.tile_is_wall(grid.add(grid.get_location(robot), 0, 1)):
                return False
            else:
                return True
        elif tiles.tile_is_wall(grid.add(grid.get_location(robot), -1, 0)):
            return False
        else:
            return True
    elif inputDir == "backward":
        if direction == 0:
            if tiles.tile_is_wall(grid.add(grid.get_location(robot), 0, 0)):
                return False
            else:
                return True
        elif direction == 1:
            if tiles.tile_is_wall(grid.add(grid.get_location(robot), -1, 0)):
                return False
            else:
                return True
        elif direction == 2:
            if tiles.tile_is_wall(grid.add(grid.get_location(robot), 0, -1)):
                return False
            else:
                return True
        elif tiles.tile_is_wall(grid.add(grid.get_location(robot), 1, 0)):
            return False
        else:
            return True
    else:
        return False
def botMover(n: number):
    for index in range(n):
        turnRight()
    moveForward()
def goalReached():
    if tiles.tile_is(grid.get_location(robot), assets.tile("""
        myTile1
    """)):
        return True
    else:
        return False
def beginScreen():
    global count, robot
    count = 8000
    tiles.set_tilemap(tilemap("""
        level1
    """))
    robot = sprites.create(assets.image("""
        Robot Up
    """), SpriteKind.player)
    grid.place(robot, tiles.get_tile_location(1, 5))
robot: Sprite = None
count = 0
direction = 0
# Call of Commands:
beginScreen()
moveForward()
turnLeft()
turnRight()
moveForward()

def on_update_interval():
    global direction
    direction = count % 4
    if goalReached():
        game.over(True)
game.on_update_interval(100, on_update_interval)
