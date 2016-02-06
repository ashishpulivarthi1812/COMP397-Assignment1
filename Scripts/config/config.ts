module config {

    // Scene Constants
    export class Scene {
        public static START: number = 0;
        public static INTRO: number = 1;
        public static LEFTZONE: number = 2;
        public static RIGHTZONE: number = 3;
        public static NORTHZONE: number = 4;
        public static NORTHEXIT1: number = 5;
        public static NORTHEXIT2: number = 6;
        public static SOUTHZONE: number = 7;
        public static SOUTHEXIT1: number = 8;
        public static SOUTHEXIT2: number = 9;
        public static EAST: number = 10;
        public static EASTEXIT1: number = 11;
        public static EASTEXIT2: number = 12;
        public static WEST: number = 13;
        public static WESTEXIT1: number = 14;
        public static WESTEXIT2: number = 15;
       
       
        
        
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 700;
        public static HEIGHT: number = 500;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}