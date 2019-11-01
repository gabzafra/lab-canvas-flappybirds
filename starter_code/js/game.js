const flappyGame = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  obstacles: [],
  keys: {
    SPACE: 32
  },
   init: function() {
     this.canvas= document.getElementById("my-canvas");
     this.ctx= this.canvas.getContext('2d');
     this.width= window.innerWidth*0.98;
     this.height= window.innerHeight*0.98;
     this.canvas.width = this.width;
     this.canvas.height= this.height;
     this.start()
  },
  start(){
    this.reset();
    this.interval= setInterval( () => { 
      this.framesCounter++;
      this.clear();

      this.drawAll();
      this.moveAll();

      this.generateObstacles();


    }, 1000/this.fps)
  },
  reset(){
    this.background = new Background (this.ctx,this.width,this.height);
    this.player = new Player (this.ctx,this.width,this.height, this.keys)
   },

   clear(){
    this.ctx.clearRect(0,0,this.width, this.height)
   },

   drawAll(){

    this.background.draw();
    this.player.draw();
    this.obstacles.forEach((obstacle) => {
      obstacle.draw();
    });
   },

   moveAll(){
     this.background.move();
     this.player.move();
     this.obstacles.forEach((obstacle) => {
      obstacle.move();
    });
     
   },
   generateObstacles() {
     if (this.framesCounter % 210 === 0){
       this.obstacles.push(new Obstacle(this.ctx,this.width,this.height));
     } console.log(this.obstacles)
   },

   clearObstacles() {
    //this.obstacles = this.obstacles.filter(obstacle => obstacle.)
   }
  
}