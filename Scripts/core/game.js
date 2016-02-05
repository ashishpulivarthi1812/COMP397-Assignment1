/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var Start;
var intro;
var LeftZone;
var RightZone;
var northzone;
var southzone;
var East;
var West;
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.START;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.START:
            // show the MENU scene
            stage.removeAllChildren();
            Start = new scenes.Start();
            currentScene = Start;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.INTRO:
            // show the MENU scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.LEFTZONE:
            // show the PLAY scene
            stage.removeAllChildren();
            LeftZone = new scenes.LeftZone();
            currentScene = LeftZone;
            console.log("Starting LeftZone Scene");
            break;
        case config.Scene.RIGHTZONE:
            // show the game OVER scene
            stage.removeAllChildren();
            RightZone = new scenes.RightZone();
            currentScene = RightZone;
            console.log("Starting RightZone Scene");
            break;
        case config.Scene.NORTHZONE:
            // ENTER NORTHZONE scene
            stage.removeAllChildren();
            northzone = new scenes.northzone();
            currentScene = northzone;
            console.log("Starting northzone Scene");
            break;
        case config.Scene.SOUTHZONE:
            // ENTER SOUTHZONE SCENE
            stage.removeAllChildren();
            southzone = new scenes.southzone();
            currentScene = southzone;
            console.log("Starting southzone Scene");
            break;
        case config.Scene.EAST:
            // ENTER SOUTHZONE SCENE
            stage.removeAllChildren();
            East = new scenes.East();
            currentScene = East;
            console.log("Starting southzone Scene");
            break;
        case config.Scene.WEST:
            // ENTER SOUTHZONE SCENE
            stage.removeAllChildren();
            West = new scenes.West();
            currentScene = West;
            console.log("Starting southzone Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map