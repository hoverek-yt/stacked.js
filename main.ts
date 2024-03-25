import Helpers from './stacked/helpers';
import Stacked from './stacked/stacked';

const cnv = document.createElement('canvas');
const ctx = cnv.getContext('2d')!;
document.body.appendChild(cnv);

const stacked = new Stacked();

let pointerX: number = -1;
let pointerY: number = -1;

cnv.addEventListener('mousemove', e => {
  pointerX = e.offsetX;
  pointerY = e.offsetY;
});

cnv.addEventListener('click', e => {
  pointerX = e.offsetX;
  pointerY = e.offsetY;

  const hitResult = stacked.hitTest(cnv, pointerX, pointerY);

  if (hitResult) {
    console.log(hitResult);
  }
});

const color1 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
  Math.random() * 255
})`;
const color2 = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
  Math.random() * 255
})`;

let angle = 0;

requestAnimationFrame(draw);
function draw() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  stacked.clearPaths();

  const rect = stacked.createPath();
  rect.transformedPath2d.roundRect(25, 25, 100, 100, 20);
  rect.transform({
    rotationX: Helpers.centerOf(25, 25, 100, 100).x,
    rotationY: Helpers.centerOf(25, 25, 100, 100).y,
    rotationAngle: angle,
  });
  ctx.fillStyle = color1;
  ctx.fill(rect.path2d);
  //@ts-ignore
  rect.id = `back`;

  const rectOver = stacked.createPath();
  rectOver.transformedPath2d.roundRect(50, 50, 100, 100, 20);
  ctx.fillStyle = color2;
  ctx.fill(rectOver.path2d);
  //@ts-ignore
  rectOver.id = `over`;

  if (stacked.hitTest(cnv, pointerX, pointerY)) {
    cnv.style.cursor = 'pointer';
  } else {
    cnv.style.cursor = 'default';
  }

  angle += 0.1;

  requestAnimationFrame(draw);
}
