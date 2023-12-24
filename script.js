const theTwoPI = 2 * Math.PI;

// let theContext = document.getElementById("canvas").getContext("2d");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const theWIdth = 1000;
const theHeight = 700;

const theRadius = 300;
const theDots = 580;
let theAngle = theTwoPI / theDots;

let theCof = 0.5;

let typeCoord = (theDotNum) => {
  let theX = Math.cos(theAngle * theDotNum) * theRadius;
  let theY = Math.sin(theAngle * theDotNum) * theRadius;
  return { theX, theY };
};
canvas.width = theWIdth;
canvas.height = theHeight;

let toggle = false;
let theR = 1;
let theRr = 250;
let yy = 300;
let q=true
ctx.translate(300, 300);
// ctx.translate(xx,yy)
// ctx.setTransform(1, 0, 0, 1, 0, 0);
// ctx.fillRect(0, 0, 80, 80);
// ctx.fillRect(0, 0, 100, 100);

let doFarme = () => {
  ctx.clearRect(-300, -300, theWIdth, theHeight);
  // ctx.strokeStyle = `rgba(${55}, 0, 155, 0.9)`;
  ctx.strokeStyle = `rgba(${!toggle ? theR : theRr}, 0, 155, 0.9)`;
  ctx.beginPath();
  ctx.lineWidth = 1;
  for (let theI = 0; theI < theDots; theI++) {
    let theDotX = theI;
    let theDotY = theDotX * theCof;

    let { theX: startX, theY: startY } = typeCoord(theDotX);
    let { theX: endX, theY: endY } = typeCoord(theDotY);
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
  }
  ctx.stroke();
  theCof += 0.007;
  if (!toggle) {
    theR += 1;
    if (theR >= 250) {
      toggle = !toggle;
      theR = 1;
    }
  } else {
    theRr -= 1;
    if (theRr <= 0) {
      toggle = !toggle;
      theRr = 250;
    }
  }
//   q+=1
  if(q){
      cancelAnimationFrame(true);
    }else {

        requestAnimationFrame(doFarme);
    }
};
doFarme();
// x = cos ( 360 / n ) * radius
// y = sin ( 360 / n ) * radius
// let requestId;

document.getElementById("startButton").addEventListener("click", function () {
    if (q) {
        console.log("true", q);
        q=false
        requestAnimationFrame(doFarme);
        // Если анимация не запущена, начать анимацию
        animate();
        this.innerText = "Stop Animation";
    } else {
        console.log("false", q);
        q=true
    // Если анимация запущена, остановить её
    cancelAnimationFrame(requestId);
    requestId = undefined;
    this.innerText = "Start Animation";
  }
});
