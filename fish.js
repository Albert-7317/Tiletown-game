const canvass = document.querySelector("canvas")
const ctx = canvass.getContext("2d")

class Wall {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
    }

    draw() {
        ctx.fillStyle = 'black'
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    update() {
        this.draw()
    }
}

class egg {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, 10, 10);
    }

    update() {
        this.draw()
    }
}

class fish {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vel = {
            x: 5,
            y: 0
        }
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, 20, 10)
    }

    update() {
        this.draw();
        this.x += 10
    }
}


const bottomWall = new Wall(10, 140, canvass.width-20, 10/5);
const leftWall = new Wall(10, 140, 10/5, -75);
const rightWall = new Wall(canvass.width-10, 142, 10/5, -75);
const Egg = new egg(40, 130)
const Fish = new fish(10, 10)


var counter = 0

while (counter != 10) {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvass.width, canvass.height)
    bottomWall.update();
    leftWall.update();
    rightWall.update();
    Egg.update()
    Fish.update()
    counter ++
    
}



