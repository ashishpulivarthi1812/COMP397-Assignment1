var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Start = (function (_super) {
        __extends(Start, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Start() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Start.prototype.start = function () {
            // add startgame Image
            this._introImage = new createjs.Bitmap("../../Assets/images/StartGame.jpg");
            this.addChild(this._introImage);
            this._gameLabel = new createjs.Text(" Can you Escape Zombie world", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X + 190;
            this._gameLabel.y = config.Screen.CENTER_Y - 200;
            this.addChild(this._gameLabel);
            // add the StartButton button to the MENU scene
            this._leftCaveButton = new objects.Button("StartButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 160);
            this.addChild(this._leftCaveButton);
            // StartButton Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Start.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFTZONE Button click event handler
        Start.prototype._leftCaveButtonClick = function (event) {
            // Switch to the LEFTZONE Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Start;
    })(objects.Scene);
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map