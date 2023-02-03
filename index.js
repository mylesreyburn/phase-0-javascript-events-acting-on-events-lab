// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
    else if (e.key === "ArrowUp"){
        moveDodgerUp();
    }
    else if (e.key === "ArrowDown"){
        moveDodgerDown();
    }
  });

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }

function moveDodgerUp(){
    const upNumbers = dodger.style.up.replace("px", "");
    const up = parseInt(upNumbers, 10);
  
    if (up < 400) {
      dodger.style.left = `${up + 1}px`;
    }
  }

function moveDodgerDown(){
    const upNumbers = dodger.style.up.replace("px", "");
    const up = parseInt(upNumbers, 10);
  
    if (up > 0) {
      dodger.style.up = `${up + 1}px`;
    }
  }