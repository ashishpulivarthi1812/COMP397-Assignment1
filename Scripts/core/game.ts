/// <reference path = "_reference.ts" />

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var Start: scenes.Start;
var intro: scenes.Intro;
var LeftZone: scenes.LeftZone;
var RightZone: scenes.RightZone;
var northzone:scenes.northzone;
var NorthExit1:scenes.NorthExit1;
var NorthExit2:scenes.NorthExit2;
var southzone:scenes.southzone;
var SouthExit1:scenes.SouthExit1;
var SouthExit2:scenes.SouthExit2;
var East:scenes.East;
var EastExit1:scenes.EastExit1;
var EastExit2:scenes.EastExit2;
var West:scenes.West;
var WestExit1:scenes.WestExit1;
var WestExit2:scenes.WestExit2;


function init(): void {
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
function gameLoop(event: createjs.Event): void {
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
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
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
            // show the intro scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.LEFTZONE:
            // show the leftzone scene
            stage.removeAllChildren();
            LeftZone = new scenes.LeftZone();
            currentScene = LeftZone;
            console.log("Starting LeftZone Scene");
            break;
        case config.Scene.RIGHTZONE:
            // show the rightzone scene
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
         case config.Scene.NORTHEXIT1:
            // ENTER NORTHEXIT1 scene
            stage.removeAllChildren();
            NorthExit1 = new scenes.NorthExit1();
            currentScene = NorthExit1;
            console.log("Starting NorthExit1 Scene");
            break;
         case config.Scene.NORTHEXIT2:
            // ENTER NorthExit2 scene
            stage.removeAllChildren();
            NorthExit2 = new scenes.NorthExit2();
            currentScene = NorthExit2;
            console.log("Starting NorthExit2 Scene");
            break;
        case config.Scene.SOUTHZONE:
            // ENTER SOUTHZONE SCENE
            stage.removeAllChildren();
            southzone = new scenes.southzone();
            currentScene = southzone;
            console.log("Starting southzone Scene");
            break;
            case config.Scene.SOUTHEXIT1:
            // ENTER SouthExit1 scene
            stage.removeAllChildren();
            SouthExit1 = new scenes.SouthExit1();
            currentScene = SouthExit1;
            console.log("Starting SouthExit1 Scene");
            break;
            case config.Scene.SOUTHEXIT2:
            // ENTER SouthExit2 scene
            stage.removeAllChildren();
            SouthExit2 = new scenes.SouthExit2();
            currentScene = SouthExit2;
            console.log("Starting SouthExit2 Scene");
            break;
        case config.Scene.EAST:
            // ENTER EAST SCENE
            stage.removeAllChildren();
            East = new scenes.East();
            currentScene = East;
            console.log("Starting EAST Scene");
            break;
            case config.Scene.EASTEXIT1:
            // ENTER EastExit1 SCENE
            stage.removeAllChildren();
            EastExit1 = new scenes.EastExit1();
            currentScene = EastExit1;
            console.log("Starting EastExit1 Scene");
            break;
            case config.Scene.EASTEXIT2:
            // ENTER EastEXIT2 SCENE
            stage.removeAllChildren();
            EastExit2 = new scenes.EastExit2();
            currentScene = EastExit2;
            console.log("Starting EastEXIT2 Scene");
            break;
         case config.Scene.WEST:
            // ENTER WEST SCENE
            stage.removeAllChildren();
            West = new scenes.West();
            currentScene = West;
            console.log("Starting WEST Scene");
            break;
            case config.Scene.WESTEXIT1:
            // ENTER WESTExit1 SCENE
            stage.removeAllChildren();
            WestExit1 = new scenes.WestExit1();
            currentScene = WestExit1;
            console.log("Starting WestExit1 Scene");
            break;
            case config.Scene.WESTEXIT2:
            // ENTER WESTExit2 SCENE
            stage.removeAllChildren();
            WestExit2 = new scenes.WestExit2();
            currentScene = WestExit2;
            console.log("Starting WestExit2 Scene");
            break;
    }

    console.log(currentScene.numChildren);
}