import * as THREE from 'three';
import Experience from '../Experience.js';

export default class AudioClass {
    constructor(audioName) {
        this.experience = new Experience();
        this.resources = this.experience.resources;

        this.audioName = audioName;
        this.audioListener = new THREE.AudioListener();
        this.sound = new THREE.Audio(this.audioListener);

        this.setAudio();
        this.fadeOut = false
        this.fadeIn = false
    }

    setAudio() {
        if (this.resources.items[this.audioName]) {
            this.sound.setBuffer(this.resources.items[this.audioName]);
        } else {
            console.error(`Audio resource ${this.audioName} not found!`);
        }
    }

    play() {
        if (!this.sound.isPlaying) {
            this.sound.play();
            this.loop();
        }
    }

    pause() {
        if (this.sound.isPlaying) {
            this.sound.pause();
        }
    }

    stop() {
        if (this.sound.isPlaying) {
            this.sound.stop();
        }
    }
    loop(){
        this.sound.setLoop(true);
    }

    setVolume(volume) {
        this.sound.setVolume(volume);
    } 
    dispose(){
      
        this.sound.stop()
    }

    update() {
        if(this.fadeOut){
            this.sound.setVolume(this.sound.getVolume()-0.05)
            if(this.sound.getVolume()<=0){
                this.fadeOut = false
                this.setVolume(0.4)
             
            }
        }
        if(this.fadeIn){
            this.sound.setVolume(this.sound.getVolume()+0.1)
            if(this.sound.getVolume()>=0.2){
                this.fadeIn = false
                this.setVolume(2)
             
            }
        }

    }
}