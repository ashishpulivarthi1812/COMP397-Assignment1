var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.START = 0;
        Scene.INTRO = 1;
        Scene.LEFTZONE = 2;
        Scene.RIGHTZONE = 3;
        Scene.NORTHZONE = 4;
        Scene.SOUTHZONE = 5;
        Scene.EAST = 6;
        Scene.WEST = 7;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 700;
        Screen.HEIGHT = 500;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map