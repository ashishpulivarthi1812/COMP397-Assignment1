var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// WestExit2 SCENE
var scenes;
(function (scenes) {
    var WestExit2 = (function (_super) {
        __extends(WestExit2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function WestExit2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        WestExit2.prototype.start = function () {
            // add WestExit2 
            this._leftCaveImage = new createjs.Bitmap("../../Assets/images/WestExit2.jpg");
            this.addChild(this._leftCaveImage);
            this._gameLabel = new createjs.Text("You are dead you choosed a wrong route", "20px Consolas", "#008000");
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
        WestExit2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        WestExit2.prototype._startOverButtonClick = function (event) {
            // Switch to the Start Scene
            scene = config.Scene.START;
            changeScene();
        };
        return WestExit2;
    })(objects.Scene);
    scenes.WestExit2 = WestExit2;
})(scenes || (scenes = {}));
//# sourceMappingURL=WestExit2.js.map