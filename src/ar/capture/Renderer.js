import * as THREE from 'three';
import Experience from './Experience.js';

export default class Renderer {
  constructor() {
    const exp = new Experience();
    this.instance = null;
    this.video = null;
    Object.assign(this, exp);
    this.currentFacingMode = 'environment';
    this.setInstance();
    this.setWebcamBackground();
  }

  bindMethods() {
    window.switchCamera = this.switchCamera.bind(this);
  }

  async getCameraStream(facingMode = this.currentFacingMode) {
    this.stopCurrentVideo();
    return navigator.mediaDevices.getUserMedia({
      video: {
        facingMode,
        width: { ideal: this.sizes.height * 2 },
        height: { ideal: this.sizes.width * 2 },
      },
    });
  }

  stopCurrentVideo() {
    if (this.video?.srcObject) {
      const tracks = this.video.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }
  }

  async handleVideoMetadata(resolve) {
    this.video.play();
    this.updateBackgroundTexture();
    resolve();
  }

  async setWebcamBackground() {
    this.scene.background = null;
    this.video = document.createElement('video');
    this.video.setAttribute('playsinline', 'true');
    this.video.setAttribute('autoplay', 'true');
    this.video.setAttribute('muted', 'false');

    const stream = await this.getCameraStream();
    this.video.srcObject = stream;
    return new Promise((resolve) => {
      this.video.onloadedmetadata = () => this.handleVideoMetadata(resolve);
    });
  }

  updateBackgroundTexture() {
    const videoTexture = new THREE.VideoTexture(this.video);
    videoTexture.minFilter = THREE.NearestFilter;
    videoTexture.magFilter = THREE.NearestFilter;
    videoTexture.format = THREE.RGBAFormat;
    videoTexture.colorSpace = THREE.SRGBColorSpace;
    videoTexture.wrapS = THREE.RepeatWrapping;
    videoTexture.wrapT = THREE.RepeatWrapping;

    if (this.currentFacingMode === 'user') {
      videoTexture.matrixAutoUpdate = false;
      videoTexture.matrix.scale(-1, 1);
    }

    this.scene.background = videoTexture;
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: false,
      webgl2: true,
    });
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
    Object.assign(this.instance, {
      punctualLights: true,
      toneMapping: THREE.LinearToneMapping,
      colorSpace: THREE.SRGBColorSpace,
      toneMappingExposure: Math.pow(2, 0),
    });
  }

  async switchCamera() {
    this.currentFacingMode =
      this.currentFacingMode === 'user' ? 'environment' : 'user';
    const stream = await this.getCameraStream();
    this.video.srcObject = stream;
    return new Promise((resolve) => {
      this.video.onloadedmetadata = () => this.handleVideoMetadata(resolve);
    });
  }

  async resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
    return this.setWebcamBackground();
  }

  dispose() {
    this.stopCurrentVideo();
    this.scene.background.dispose();
    this.instance.dispose();
  }

  update() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
