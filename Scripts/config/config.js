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
        Scene.NORTHEXIT1 = 5;
        Scene.NORTHEXIT2 = 6;
        Scene.SOUTHZONE = 7;
        Scene.SOUTHEXIT1 = 8;
        Scene.SOUTHEXIT2 = 9;
        Scene.EAST = 10;
        Scene.EASTEXIT1 = 11;
        Scene.EASTEXIT2 = 12;
        Scene.WEST = 13;
        Scene.WESTEXIT1 = 14;
        Scene.WESTEXIT2 = 15;
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