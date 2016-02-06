var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Northimage SCENE
var scenes;
(function (scenes) {
    var northzone = (function (_super) {
        __extends(northzone, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function northzone() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        northzone.prototype.start = function () {
            // add north Image
            this._leftCaveImage = new createjs.Bitmap("../../Assets/images/NorthExit.jpg");
            this.addChild(this._leftCaveImage);
            this._gameLabel = new createjs.Text("Zombiee can sense you choose an exit between northexit1 and northexit2", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X + 190;
            this._gameLabel.y = config.Screen.CENTER_Y - 200;
            this.addChild(this._gameLabel);
            // add the NorthExit1 button to the MENU scene
            this._leftCaveButton = new objects.Button("NorthExit1Button", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 160);
            this.addChild(this._leftCaveButton);
            // NorthExit1 Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            // add the NorthExit2 button to the MENU scene
            this._rightCaveButton = new objects.Button("NorthExit2Button", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 250);
            this.addChild(this._rightCaveButton);
            // NorthExit2 Button event listener
            this._rightCaveButton.on("click", this._rightCaveButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        northzone.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NorthExit1 Button click event handler
        northzone.prototype._leftCaveButtonClick = function (event) {
            // Switch to the NorthExit1 Scene
            scene = config.Scene.NORTHEXIT1;
            changeScene();
        };
        // NorthExit2 Button click event handler
        northzone.prototype._rightCaveButtonClick = function (event) {
            // Switch to the NorthExit2 Scene
            scene = config.Scene.NORTHEXIT2;
            changeScene();
        };
        return northzone;
    })(objects.Scene);
    scenes.northzone = northzone;
})(scenes || (scenes = {}));
//# sourceMappingURL=northzone.js.map