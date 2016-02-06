var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// EastExit1 SCENE
var scenes;
(function (scenes) {
    var EastExit1 = (function (_super) {
        __extends(EastExit1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function EastExit1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        EastExit1.prototype.start = function () {
            // add Eastexit1Image 
            this._leftCaveImage = new createjs.Bitmap("../../Assets/images/EastExit1.jpg");
            this.addChild(this._leftCaveImage);
            this._gameLabel = new createjs.Text("You Fell in the pit and died", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X + 190;
            this._gameLabel.y = config.Screen.CENTER_Y - 200;
            this.addChild(this._gameLabel);
            // add the StartOverButton button to the OVER scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        EastExit1.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        EastExit1.prototype._startOverButtonClick = function (event) {
            // Switch to the Start Scene
            scene = config.Scene.START;
            changeScene();
        };
        return EastExit1;
    })(objects.Scene);
    scenes.EastExit1 = EastExit1;
})(scenes || (scenes = {}));
//# sourceMappingURL=EastExit1.js.map