class Obstacle{
    constructor(ctx, canvasW, canvasH){
        this.ctx = ctx;
        this.posX = canvasW;
        this.width = 150;
        this.gap = 300;
        this.height = canvasH;

        this.imageUp = new Image();
        this.imageUp.src = "images/obstacle_top.png";

        this.imageDown = new Image();
        this.imageDown.src = "images/obstacle_bottom.png";

        this.posUpY = this.randomInt(- this.height, - this.gap);
        this.posDownY = this.posUpY + this.height + this.gap;

        this.velX = 4;
    }
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      draw(){
        this.ctx.drawImage (this.imageUp, this.posX, this.posUpY, this.width, this.height);
        this.ctx.drawImage (this.imageDown, this.posX, this.posDownY, this.width, this.height);
      }
      move(){
          this.posX -= this.velX
      }
      
}