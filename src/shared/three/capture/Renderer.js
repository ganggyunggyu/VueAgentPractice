export default class Rnderer {
  constructor() {}

  async getCameraStream(facingMode) {
    if (this.video && this.video.srcObject) {
      let tracks = this.video.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }

    return await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: facingMode,
        width: { ideal: this.sizes.height },
        height: { ideal: this.sizes.width },
      },
    });
  }

  async setWebcamBackground() {
    this.video = document.createElement("video");
    this.video.setAttribute("playsinline", "true");
    this.video.setAttribute("autoplay", "true");
    this.video.setAttribute("muted", "false");

    const stream = await this.getCameraStream(this.currentFacingMode);
    this.video.srcObject = stream;
    return new Promise((resolve) => {
      this.video.onloadedmetadata = () => {
        this.video.play();

        const videoTexture = new THREE.VideoTexture(this.video);
        videoTexture.minFilter = THREE.NearestFilter;
        videoTexture.magFilter = THREE.NearestFilter;
        videoTexture.format = THREE.RGBAFormat;
        videoTexture.colorSpace = THREE.SRGBColorSpace;
        videoTexture.wrapS = THREE.RepeatWrapping;
        videoTexture.wrapT = THREE.ClampToEdgeWrapping;

        this.scene.background = videoTexture;

        resolve();
      };
    });
  }
}
