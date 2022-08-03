const c = document.querySelector("canvas")
const ctx = c.getContext("2d")

class Fish {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.size = {
            x:20,
            y:10
        }

        this.vel = {
            x:0,
            y:0
        }

        this.health = 100;
        this.hunger = 10;

        this.age = 0;
        this.condition = 'healthy';
    }

    draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.size.x, this.size.y);
    }

    healthbar() {
        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, this.health, 10) 
        
    }

    update() {
        this.healthbar()
        const choice =  Math.floor(Math.random() * 150);
        if (choice == 1) {
            this.vel.x = 1;
        }
        if (choice == 2) {
            this.vel.y = 1;
        }
        if (choice == 3) {
            this.vel.x = -1;
        }
        if (choice == 4) {
            this.vel.y = -1;
        }
        if (choice == 5) {
            this.vel.x = 0;
        }
        if (choice == 6) {
            this.vel.y = 0;
        }



        this.draw();
        this.x += this.vel.x
        this.y += this.vel.y

        if (this.x <= 0) {
            this.vel.x = -this.vel.x
        }
        if (this.x >= c.width) {
            this.vel.x = -this.vel.x
        }
        if (this.y <= 0) {
            this.vel.y = -this.vel.y
        }
        if (this.y >= c.height) {
            this.vel.y = -this.vel.y
        }
    }
}

class Plant {
    constructor(x, y, spriteIndex) {
        this.x = x;
        this.y = y;

        this.size = {
            x:0,
            y:0
        }

        this.spriteIndex = spriteIndex

        this.age = 0
    }

    draw() {
        ctx.fillStyle = 'black';
        if (this.spriteIndex == 0) {
            this.size.x = 10
            this.size.y = -50
        }
        if (this.spriteIndex == 1) {
            this.size.x = 50
            this.size.y = -20
        }
        if (this.spriteIndex == 2) {
            this.size.x = 4
            this.size.y = -80
        }
        ctx.fillRect(this.x, this.y, this.size.x, this.size.y)
    }

    update() {
        this.draw()
    }
}

const plantArr = [];
const fish = new Fish(c.width/2, c.height/2);

for (let i=0; i<4; i++) {
    var posx = Math.floor(Math.random() * c.width);
    var spriteIndex = Math.floor(Math.random() * 3)
    const plant = new Plant(posx, c.height, spriteIndex)
    plantArr.push(plant)
}

function gameLoop() {
    window.requestAnimationFrame(gameLoop);


    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, c.width, c.height);

    //drawing the areas for the health and hunger meter
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.rect(10, 10, 100, 10);
    ctx.stroke();
    fish.update();

    for (let i=0; i<plantArr.length; i++) {
        plantArr[i].update()
    }
    
}

function feed() {
    console.log('clicked')
}


gameLoop()
