var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var LeftZone = (function (_super) {
        __extends(LeftZone, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function LeftZone() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        LeftZone.prototype.start = function () {
            // add LeftZone Image
            this._leftCaveImage = new createjs.Bitmap("../../Assets/images/northsouth.png");
            this.addChild(this._leftCaveImage);
            this._gameLabel = new createjs.Text("You have to select a route north or south to escape from zombie", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X + 190;
            this._gameLabel.y = config.Screen.CENTER_Y - 200;
            this.addChild(this._gameLabel);
            // add the NORTHZONE button to the MENU scene
            this._leftCaveButton = new objects.Button("NORTH", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftCaveButton);
            // LEFT_CAVE Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            // add the LEFTZONE button to the MENU scene
            this._rightCaveButton = new objects.Button("SouthButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._rightCaveButton);
            // LEFT_CAVE Button event listener
            this._rightCaveButton.on("click", this._rightCaveButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        LeftZone.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        LeftZone.prototype._leftCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.NORTHZONE;
            changeScene();
        };
        // LEFT_CAVE Button click event handler
        LeftZone.prototype._rightCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.SOUTHZONE;
            changeScene();
        };
        return LeftZone;
    })(objects.Scene);
    scenes.LeftZone = LeftZone;
})(scenes || (scenes = {}));
//# sourceMappingURL=LeftZone.js.map