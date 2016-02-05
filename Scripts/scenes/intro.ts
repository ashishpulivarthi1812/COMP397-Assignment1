// INTRO SCENE
module scenes {
    export class Intro extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _introImage: createjs.Bitmap;
        private _leftCaveButton: objects.Button;
        private _rightCaveButton: objects.Button;
        private _gameLabel:createjs.Text;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/introimage.jpg");
            this.addChild(this._introImage);
            
            this._gameLabel = new createjs.Text("You are thrown in a place where there are full zombiee,You need to find a way to go home", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X +190;
            this._gameLabel.y = config.Screen.CENTER_Y -200;
            this.addChild(this._gameLabel);
            
            // add the LEFTZONE button to the MENU scene
            this._leftCaveButton = new objects.Button(
                "leftzone",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 160);
            this.addChild(this._leftCaveButton);
            
            // LEFT_CAVE Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            
            // add the RIGHTZONE button to the MENU scene
            this._rightCaveButton = new objects.Button(
                "Rightzoneimage",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 250);
            this.addChild(this._rightCaveButton);
            
            // LEFT_CAVE Button event listener
            this._rightCaveButton.on("click", this._rightCaveButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFTZONE Button click event handler
        private _leftCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFTZONE Scene
            scene = config.Scene.LEFTZONE;
            changeScene();
        }
        
        // LEFT_CAVE Button click event handler
        private _rightCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.RIGHTZONE;
            changeScene();
        }
    }
}