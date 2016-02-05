// LEFT_CAVE SCENE
module scenes {
    export class RightZone extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _rightCaveImage: createjs.Bitmap;
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
            // add LeftCave Image
            this._rightCaveImage = new createjs.Bitmap("../../Assets/images/RightZone.jpg");
            this.addChild(this._rightCaveImage);
            
             this._gameLabel = new createjs.Text("You have to choose a route between east or west to  go home", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X +190;
            this._gameLabel.y = config.Screen.CENTER_Y -200;
            this.addChild(this._gameLabel);

            // add the LEFT_CAVE button to the MENU scene
            this._leftCaveButton = new objects.Button(
                "East",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._leftCaveButton);
            
            // LEFT_CAVE Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            
            // add the LEFT_CAVE button to the MENU scene
            this._rightCaveButton = new objects.Button(
                "West",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._rightCaveButton);
            
            // LEFT_CAVE Button event listener
            this._rightCaveButton.on("click", this._rightCaveButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT_CAVE Button click event handler
        private _leftCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.EAST;
            changeScene();
        }
        
        // LEFT_CAVE Button click event handler
        private _rightCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.WEST;
            changeScene();
        }
    }
}