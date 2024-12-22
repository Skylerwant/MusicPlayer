let cra;

let voi;

let button;

let button2;

let button3;

let button4;

let buttonpc;

let buttonpv;

let buttonj;

let buttonj2;

let vol;

let amp;

var slider;

let silderPan;
let silderRate;

function preload() {
  soundFormats("m4a", "ogg");
  cra = loadSound("taste.m4a");
  voi = loadSound("1to13.m4a");
}

function setup() {
  createCanvas(640, 1280);

  amp = new p5.Amplitude();

  vol = 0.5;

  button = createButton("play1");
  button.position(20, 660);

  button.mousePressed(playMusic1);

  //   button2 = createButton("-");

  //   button2.mousePressed(minusVol);

  //   button3 = createButton("+");

  //   button3.mousePressed(plusVol);

  button4 = createButton("play2");

  button4.mousePressed(playMusic2);

  buttonpc = createButton("pause1");

  buttonpc.mousePressed(pauseMusic1);

  buttonpv = createButton("pause2");

  buttonpv.mousePressed(pauseMusic2);

  buttonj = createButton("jump1");

  buttonj.mousePressed(jumpSong1);

  buttonj2 = createButton("jump2");

  buttonj2.mousePressed(jumpSong2);

  slider = createSlider(0, 2, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
  sliderRate = createSlider(0, 2, 1, 0.1);
}


function playMusic1() {
  if (!cra.isPlaying()) {
    cra.play();
    button.html("stop1");
  } else {
    cra.stop();
    button.html("play1");
  }
}

function playMusic2() {
  if (!voi.isPlaying()) {
    voi.play();
    button4.html("stop2");
  } else {
    voi.stop();
    button4.html("play2");
  }
}

function pauseMusic1() {
  {
    if (cra.isPlaying()) cra.pause();
    button.html("play1");
  }
}

function pauseMusic2() {
  {
    if (voi.isPlaying()) voi.pause();
    button4.html("play2");
  }
}

function draw() {
  
  
 
  background(220);
  cra.setVolume(vol);
  voi.setVolume(vol);

  cra.pan(sliderPan.value());
  voi.pan(sliderPan.value());

  cra.rate(sliderRate.value());
  voi.rate(sliderRate.value());

  vol = slider.value();

  console.log(amp.getLevel() * 10000);

  fill(255, 255, 255);
  ellipse(100, 100, 50, 50);
  ellipse(300, 100, 50, 50);
  fill(250, 0, 100);
  rect(70, 150, amp.getLevel() * 10000, amp.getLevel() * 10000);


  checkStopConditions();
}

function checkStopConditions() {
  if (!cra.isPlaying() && button.html() === "stop1") {
    button.html("play1");
  }

  if (!voi.isPlaying() && button4.html() === "stop2") {
    button4.html("play2");
  }
}


function minusVol() {
  vol = vol - 0.1;
}

function plusVol() {
  vol = vol + 0.1;
}

function jumpSong1() {
  let currentTime = cra.currentTime();
  let newTime = currentTime + 30;

  if (newTime > cra.duration()) {
    newTime = cra.duration();
  }

  cra.jump(newTime);
}

function jumpSong2() {
  let currentTime = voi.currentTime();
  let newTime = currentTime + 30;

  if (newTime > voi.duration()) {
    newTime = voi.duration();
  }

  voi.jump(newTime);
}
