var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// EASTEXIT2 SCENE
var scenes;
(function (scenes) {
    var EastExit2 = (function (_super) {
        __extends(EastExit2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function EastExit2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        EastExit2.prototype.start = function () {
            // add Eastexit2Image 
            this._leftCaveImage = new createjs.Bitmap("../../Assets/images/EastExit2.jpg");
            this.addChild(this._leftCaveImage);
            this._gameLabel = new createjs.Text("Zombiee trapped you You are dead ", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X + 190;
            this._gameLabel.y = config.Screen.CENTER_Y - 200;
            this.addChild(this._gameLabel);
            // add the start button to the OVER scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        EastExit2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        EastExit2.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.START;
            changeScene();
        };
        return EastExit2;
    })(objects.Scene);
    scenes.EastExit2 = EastExit2;
})(scenes || (scenes = {}));
//# sourceMappingURL=EastExit2.js.map