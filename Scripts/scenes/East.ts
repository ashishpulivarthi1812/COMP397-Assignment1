// East SCENE
module scenes {
    export class East extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _leftCaveImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
        private _gameLabel:createjs.Text;
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Eastimage Image
            
            this._leftCaveImage = new createjs.Bitmap("../../Assets/images/Eastimage.jpg");
            this.addChild(this._leftCaveImage);
            
            this._gameLabel = new createjs.Text("You are dead you choosed a wrong route", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X +190;
            this._gameLabel.y = config.Screen.CENTER_Y -200;
            this.addChild(this._gameLabel);
            
            // add the startover button to the OVER scene
            this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
           
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}