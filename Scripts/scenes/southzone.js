var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// southzone SCENE
var scenes;
(function (scenes) {
    var southzone = (function (_super) {
        __extends(southzone, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function southzone() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        southzone.prototype.start = function () {
            // add southzone Image
            this._leftCaveImage = new createjs.Bitmap("../../Assets/images/SouthExitImage.jpg");
            this.addChild(this._leftCaveImage);
            this._gameLabel = new createjs.Text("Zombiee saw you try to escape choose an exit between Southexit1 and Southexit2", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X + 190;
            this._gameLabel.y = config.Screen.CENTER_Y - 200;
            this.addChild(this._gameLabel);
            // add the SOUTHEXIT1 button to the MENU scene
            this._leftCaveButton = new objects.Button("SouthExitButton1", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 160);
            this.addChild(this._leftCaveButton);
            // SOUTHEXIT1 Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            // add the SouthExit2Button button to the MENU scene
            this._rightCaveButton = new objects.Button("SouthExit2Button", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 250);
            this.addChild(this._rightCaveButton);
            // SouthExit2Button Button event listener
            this._rightCaveButton.on("click", this._rightCaveButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        southzone.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // SOUTHEXIT1 Button click event handler
        southzone.prototype._leftCaveButtonClick = function (event) {
            // Switch to the SOUTHEXIT1 Scene
            scene = config.Scene.SOUTHEXIT1;
            changeScene();
        };
        // SOUTHEXIT2 Button click event handler
        southzone.prototype._rightCaveButtonClick = function (event) {
            // Switch to the SOUTHEXIT2 Scene
            scene = config.Scene.SOUTHEXIT2;
            changeScene();
        };
        return southzone;
    })(objects.Scene);
    scenes.southzone = southzone;
})(scenes || (scenes = {}));
//# sourceMappingURL=southzone.js.map