var c = 0;
var aiPos = 0;

function tick() {
    c++;
    document.getElementById('stepsDone').value = c;
    moveWall() //move wall to the left
    checkCollision();
}

var tickInterval;


function runSim(state) {

    if (state == 1) //run simulation
    {

        if (c > 100) {
            runSim('0'); //force stop

        } else {
            tickInterval = setInterval('tick()', 100);
        }

    } else {
        //stop simulation
        clearInterval(tickInterval);
        c = 0;
        document.getElementById('stepsDone').value = c;
        document.getElementById('wall').style.left = null;
        document.getElementById('wall').style.right = '0px';
        document.getElementById('ai').style.marginTop = '0px';
        aiPos = 0;
    }

}

function moveWall() {
    var getWallX = document.getElementById('wall').offsetLeft;
    var getWallY = document.getElementById('wall').offsetTop;
    document.getElementById('debugTextArea').innerHTML += "[" + c + "] Wall PosX: " + getWallX + "| Wall PosY: " + getWallY + "\n";
    document.getElementById('debugTextArea').scrollTop =
        document.getElementById('debugTextArea').scrollHeight;

    if (getWallX <= 0) {

        document.getElementById('wall').style.left = null;
        document.getElementById('wall').style.right = '0px';
    } else {
        getWallX = getWallX - 40;
        document.getElementById('wall').style.left = getWallX + "px";
    }

}

function moveCar(direction) {
    if (aiPos < 0) {
        aiPos = 0;
    }
    if (aiPos > 250) {
        aiPos = 250;
    }


    if (direction == "down") {
        aiPos = aiPos + 10;
    } else {
        aiPos = aiPos - 10;
    }

    document.getElementById('ai').style.marginTop = aiPos + 'px';
}

function checkCollision() {


    var getWallX = document.getElementById('wall').offsetLeft;
    var getWallY = document.getElementById('wall').offsetTop + 100;

    var getAIX = document.getElementById('sensor_2').offsetLeft + 500;
    var getAIY = document.getElementById('ai').offsetTop;

    if (getWallX < getAIX && getAIY < getWallY) {

        moveCar('down');
    }
}