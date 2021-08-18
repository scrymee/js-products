const game = document.getElementById('game');

var grid = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

let arrowDown = false;
let arrowUp = false;
let arrowLeft = false;
let arrowRight = false;

let teto = undefined;

class Teto {

    constructor() {
        this.w = 5;
        this.h = 0;    
        this.setPosition(5,0);
    }

    reset() {

    }
    
    getPosition() {

    }
    setPosition(w,h) {
        grid[h][w] = 1;
        this.w = w;
        this.h = h;
        return;
    }
    moveRight() {
        console.log(this.w,this.h)
        const new_w = this.w + 1;
        if(new_w < grid[0].length) {
            grid[this.h][this.w] = 0;
            grid[this.h][new_w] = 1;
            this.w = new_w;
        }
    }
    fall() {
        var new_h =this.h + 1;
        if(new_h < grid.length){
            grid[this.h][this.w] = 0;
            grid[new_h][this.w] = 1;
            this.h = new_h;
            return;

        }
    }
}

//drawGame();

function startTeto() {
    teto = new Teto();

}

startTeto();

setInterval(active, 300);

function drawGame() {
    game.innerHTML = '';
    for(let h = 0; h < grid.length; h++) {
        for(let w = 0; w < grid[h].length; w++){
            drawBlock(w,h);
        }
    }    
}

function drawBlock(w, h) {
    let pos = grid[h][w];
    const div = document.createElement('div');
    div.classList.add('block');
    if(pos == 0){

    } else if (pos == 1) {
        div.style.backgroundColor = "#111";
    }
    game.append(div);

}


function active() {
    fall();
    if(teto == undefined) {
        teto = new Teto();
    }
}

function fall() {

    let newGrid = JSON.parse(JSON.stringify(grid));
    for(let h = 0; h < grid.length; h++) {
        for(let w = 0; w < grid[h].length; w++){
            // h + 1 が存在＋0かを判定
            if(grid[h][w] == 0) continue;
            if( checkFall(w,h) ) {
                newGrid[h][w] = 0;
                newGrid[h+1][w] = 1;   
            } else {
                newGrid[h][w] = grid[h][w];
            }
            //if h + 1 ;

        }
    }    
    grid = JSON.parse(JSON.stringify(newGrid));
    drawGame();
        teto.fall();
    if(checkAllFalled()){
        teto = undefined;
    }
}

function checkFall(w,h) {
    if(grid[h][w] == 0) return false;
    let new_h = h + 1;
    if(new_h < grid.length && grid[new_h][w] == 0) {
        return true;
    }
    return false;
}

function checkAllFalled() {
    for(let h = 0; h < grid.length; h++) {
        for(let w = 0; w < grid[h].length; w++){
            if (checkFall(w,h)) {
                return false;
            }
        }
    }    
    return true;

}

function keydown(e){
    if(e.keyCode==38){arrowUp=true;}
    if(e.keyCode==40){arrowDown=true;}
    if(e.keyCode==39){arrowRight=true;}
    if(e.keyCode==37){arrowLeft=true;}
  }
function keyup(e){
    if(e.keyCode==38){arrowUp=false;}
    if(e.keyCode==40){arrowDown=false;}
    if(e.keyCode==39){arrowRight=false;}
    if(e.keyCode==37){arrowLeft=false;}
  }


  document.addEventListener('keydown', (e)=> {
    keydown(e);
    teto.moveRight();

  })