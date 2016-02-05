var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var RightZone = (function (_super) {
        __extends(RightZone, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function RightZone() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        RightZone.prototype.start = function () {
            // add LeftCave Image
            this._rightCaveImage = new createjs.Bitmap("../../Assets/images/RightZone.jpg");
            this.addChild(this._rightCaveImage);
            this._gameLabel = new createjs.Text("You have to choose a route between east or west to  go home", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X + 190;
            this._gameLabel.y = config.Screen.CENTER_Y - 200;
            this.addChild(this._gameLabel);
            // add the LEFT_CAVE button to the MENU scene
            this._leftCaveButton = new objects.Button("East", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftCaveButton);
            // LEFT_CAVE Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._rightCaveButton = new objects.Button("West", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._rightCaveButton);
            // LEFT_CAVE Button event listener
            this._rightCaveButton.on("click", this._rightCaveButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        RightZone.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        RightZone.prototype._leftCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.EAST;
            changeScene();
        };
        // LEFT_CAVE Button click event handler
        RightZone.prototype._rightCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.WEST;
            changeScene();
        };
        return RightZone;
    })(objects.Scene);
    scenes.RightZone = RightZone;
})(scenes || (scenes = {}));
//# sourceMappingURL=RightZone.js.map