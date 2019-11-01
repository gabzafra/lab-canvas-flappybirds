class Player {
    constructor(ctx,w,h,keys){
        this.ctx = ctx;
        this.gameWidth = w;
        this.gameHeight = h;

        this.keys = keys;
        this.image = new Image();
        this.image.src = "images/flappy.png";

        this.width = 125;
        this.height = 75;
        this.posX = this.gameWidth / 2 -this.width/2;
        this.posY = this.gameHeight/ 2 -this.height/2;

        this.posY0 = this.gameHeight - this.height;
        this.velY = 1;

        this.setListeners() 


    }

    setListeners(){
        document.onkeydown = e => {
            if(e.keyCode === this.keys.SPACE) {
                if(this.posY > 10){
                    this.posY -= 30;
                    this.velY -=10;
                }
            }
        }
    }

    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    move(){
        let gravity = 0.4;
            this.posY += this.velY;
            this.velY += gravity;

    }
}