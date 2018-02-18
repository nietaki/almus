function setup() {
	createCanvas(windowWidth, windowHeight);
  midX = windowWidth / 2;
  midY = windowHeight / 2;
  console.log(PI);
  console.log(sin(PI / 2));
  multi = 50;

  phi = 0;
  step = 0.02;

  R = 7 * multi;
  r = 2.4 * multi;
  d = 3.4 * multi;
}

function draw() {
  var c = color('magenta');
  fill(c);
  dot(midX, midY);

  x = hypoX(phi, R, r, d);
  y = hypoY(phi, R, r, d);
  dot(midX + x, midY + y);

  phi += step;
}

function dot(x, y) {
  ellipse(x, y, 8, 8);
}

function hypoX(phi, R, r, d) {
  return (R - r) * cos(phi) + d * cos((R - r) * phi / r);
}

function hypoY(phi, R, r, d) {
  return (R - r) * sin(phi) - d * sin((R - r) * phi / r);
}
