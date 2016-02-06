// INTRO SCENE
module scenes {
    export class Start extends objects.Scene {
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
            // add startgame Image
            this._introImage = new createjs.Bitmap("../../Assets/images/StartGame.jpg");
            this.addChild(this._introImage);
            
            this._gameLabel = new createjs.Text(" Can you Escape Zombie world", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X +190;
            this._gameLabel.y = config.Screen.CENTER_Y -200;
            this.addChild(this._gameLabel);
            
            // add the StartButton button to the MENU scene
            this._leftCaveButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 160);
            this.addChild(this._leftCaveButton);
            
            // StartButton Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            
            
            
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
            scene = config.Scene.INTRO;
            changeScene();
        }
        
      
    }
}