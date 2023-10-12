//All the default params of this app.
const DefaultParams = {
    DEFAULT_CAMERA_POSITION : {x: 0, y: 20, z: 50}, //The usualy default camera position when no object is focused.
    ON_START_CAMERA_POSITION: {x: 0, y: 20, z: 60}, //The position where the camera starts (To do a small movement effect at the start).
    UI_SOUND_VOLUME         : 0.5,                  //The volume of the UI sound (When clicking buttons).
    AMBIENT_VOLUME          : 1,                    //The volume of the ambient sound.
    BG_MUSIC_VOLUME         : 0.15,                 //The volume of the background music.
    MUSIC_ON_ICON           : "./UI/MusicOn.png",
    MUSIC_OFF_ICON          : "./UI/MusicOff.png",
}

export default DefaultParams;