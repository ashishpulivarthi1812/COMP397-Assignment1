var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Intro = (function (_super) {
        __extends(Intro, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Intro() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Intro.prototype.start = function () {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/introimage.jpg");
            this.addChild(this._introImage);
            this._gameLabel = new createjs.Text("You are thrown in a place where there are full zombiee,You need to find a way to go home", "20px Consolas", "#008000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X + 190;
            this._gameLabel.y = config.Screen.CENTER_Y - 200;
            this.addChild(this._gameLabel);
            // add the LEFTZONE button to the MENU scene
            this._leftCaveButton = new objects.Button("leftzone", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 160);
            this.addChild(this._leftCaveButton);
            // EFTZONE Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            // add the RIGHTZONE button to the MENU scene
            this._rightCaveButton = new objects.Button("Rightzoneimage", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 250);
            this.addChild(this._rightCaveButton);
            // RIGHTZONE Button event listener
            this._rightCaveButton.on("click", this._rightCaveButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Intro.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFTZONE Button click event handler
        Intro.prototype._leftCaveButtonClick = function (event) {
            // Switch to the LEFTZONE Scene
            scene = config.Scene.LEFTZONE;
            changeScene();
        };
        // RIGHTZONE Button click event handler
        Intro.prototype._rightCaveButtonClick = function (event) {
            // Switch to the RIGHTZONE Scene
            scene = config.Scene.RIGHTZONE;
            changeScene();
        };
        return Intro;
    })(objects.Scene);
    scenes.Intro = Intro;
})(scenes || (scenes = {}));
//# sourceMappingURL=intro.js.map