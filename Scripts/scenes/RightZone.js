var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// RightZone SCENE
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
            // add RightZone Image
            this._rightCaveImage = new createjs.Bitmap("../../Assets/images/RightZone.jpg");
            this.addChild(this._rightCaveImage);
            this._gameLabel = new createjs.Text("You have to choose a route  to  go home", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X + 190;
            this._gameLabel.y = config.Screen.CENTER_Y - 200;
            this.addChild(this._gameLabel);
            // add the East button to the MENU scene
            this._leftCaveButton = new objects.Button("East", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftCaveButton);
            // East Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            // add the EastExit1Button button to the MENU scene
            this._EastExit1Button = new objects.Button("EastExit1Button", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y - 100);
            this.addChild(this._EastExit1Button);
            // EastExit1Button event listener
            this._EastExit1Button.on("click", this._EastExit1ButtonClick, this);
            // add the EastExit2Button to the MENU scene
            this._EastExit2Button = new objects.Button("EastExit2Button", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 30);
            this.addChild(this._EastExit2Button);
            // EastExit2Button event listener
            this._EastExit2Button.on("click", this._EastExit2ButtonClick, this);
            // add the West button to the MENU scene
            this._rightCaveButton = new objects.Button("West", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._rightCaveButton);
            // West Button event listener
            this._rightCaveButton.on("click", this._rightCaveButtonClick, this);
            // add the WestExit1Button to the MENU scene
            this._WestExit1Button = new objects.Button("WestExit1Button", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y - 100);
            this.addChild(this._WestExit1Button);
            // WestExit1Button event listener
            this._WestExit1Button.on("click", this._WestExit1ButtonClick, this);
            // add the WestExit2button to the MENU scene
            this._WestExit2Button = new objects.Button("WestExit2button", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 30);
            this.addChild(this._WestExit2Button);
            // WestExit2button event listener
            this._WestExit2Button.on("click", this._WestExit2ButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        RightZone.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // EAST Button click event handler
        RightZone.prototype._leftCaveButtonClick = function (event) {
            // Switch to the EAST Scene
            scene = config.Scene.EAST;
            changeScene();
        };
        // EastExit1Button click event handler
        RightZone.prototype._EastExit1ButtonClick = function (event) {
            // Switch to the EastExit1 Scene
            scene = config.Scene.EASTEXIT1;
            changeScene();
        };
        // EastExit2Button click event handler
        RightZone.prototype._EastExit2ButtonClick = function (event) {
            // Switch to the EastExit2 Scene
            scene = config.Scene.EASTEXIT2;
            changeScene();
        };
        // WestExit1Button click event handler
        RightZone.prototype._WestExit1ButtonClick = function (event) {
            // Switch to the WestExit Scene
            scene = config.Scene.WESTEXIT1;
            changeScene();
        };
        // WestExit2Button click event handler
        RightZone.prototype._WestExit2ButtonClick = function (event) {
            // Switch to the WestExit2 Scene
            scene = config.Scene.WESTEXIT2;
            changeScene();
        };
        // WEST Button click event handler
        RightZone.prototype._rightCaveButtonClick = function (event) {
            // Switch to the WEST Scene
            scene = config.Scene.WEST;
            changeScene();
        };
        return RightZone;
    })(objects.Scene);
    scenes.RightZone = RightZone;
})(scenes || (scenes = {}));
//# sourceMappingURL=RightZone.js.map