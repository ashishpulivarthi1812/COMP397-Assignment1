module config {

    // Scene Constants
    export class Scene {
        public static START: number = 0;
        public static INTRO: number = 1;
        public static LEFTZONE: number = 2;
        public static RIGHTZONE: number = 3;
        public static NORTHZONE: number = 4;
        public static SOUTHZONE: number = 5;
        public static EAST: number = 6;
        public static WEST: number = 7;
       
       
        
        
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