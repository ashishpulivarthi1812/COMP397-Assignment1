// southzone SCENE
module scenes {
    export class southzone extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _leftCaveImage: createjs.Bitmap;
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
            // add southzone Image
            
            this._leftCaveImage = new createjs.Bitmap("../../Assets/images/SouthExitImage.jpg");
            this.addChild(this._leftCaveImage);
            
            this._gameLabel = new createjs.Text("Zombiee saw you try to escape choose an exit between Southexit1 and Southexit2", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X +190;
            this._gameLabel.y = config.Screen.CENTER_Y -200;
            this.addChild(this._gameLabel);
            
             // add the SOUTHEXIT1 button to the MENU scene
            this._leftCaveButton = new objects.Button(
                "SouthExitButton1",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 160);
            this.addChild(this._leftCaveButton);
            
            // SOUTHEXIT1 Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            
            // add the SouthExit2Button button to the MENU scene
            this._rightCaveButton = new objects.Button(
                "SouthExit2Button",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 250);
            this.addChild(this._rightCaveButton);
            
            // SouthExit2Button Button event listener
            this._rightCaveButton.on("click", this._rightCaveButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // SOUTHEXIT1 Button click event handler
        private _leftCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the SOUTHEXIT1 Scene
            scene = config.Scene.SOUTHEXIT1;
            changeScene();
        }
        
        // SOUTHEXIT2 Button click event handler
        private _rightCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the SOUTHEXIT2 Scene
            scene = config.Scene.SOUTHEXIT2;
            changeScene();
        }
    }
}