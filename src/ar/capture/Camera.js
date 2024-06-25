import * as THREE from 'three';
import Experience from './Experience.js';
import { DeviceOrientationControls } from '../../js/DeviceOrientationControls.js';

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(50, this.sizes.width / this.sizes.height, 0.1, 1000);
    this.instance.position.set(0, 2.3, 8);
    this.scene.add(this.instance);
  }

  setControls() {
    this.controls = new DeviceOrientationControls(this.instance);
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    if (this.controls) {
      this.controls.update();
    }
  }

  bindMethods() {
    window.captureImage = this.captureImage.bind(this);
  }

  captureScene() {
    const renderer = this.experience.renderer.instance;
    const width = 2160;
    const height = 3240;

    const rt = new THREE.WebGLRenderTarget(width, height, {
      format: THREE.RGBAFormat,
      colorSpace: THREE.SRGBColorSpace,
    });
    renderer.setRenderTarget(rt);
    renderer.render(this.scene, this.instance);

    const gl = renderer.getContext();
    const pixels = new Uint8Array(4 * width * height);
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    const imageData = new ImageData(width, height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = y * (4 * width) + x * 4;
        const flipIndex = (height - y - 1) * (4 * width) + x * 4;
        imageData.data[flipIndex] = pixels[index];
        imageData.data[flipIndex + 1] = pixels[index + 1];
        imageData.data[flipIndex + 2] = pixels[index + 2];
        imageData.data[flipIndex + 3] = pixels[index + 3];
      }
    }
    renderer.setRenderTarget(null); // Reset render target
    return imageData;
  }

  async captureImage() {
    const data = this.captureScene();
    const canvas = document.createElement('canvas');
    canvas.width = data.width;
    canvas.height = data.height;
    const ctx = canvas.getContext('2d');
    ctx.putImageData(data, 0, 0);

    const frameImageElement = document.querySelector('.frame img');
    if (frameImageElement.complete) {
      ctx.drawImage(frameImageElement, 0, 0, canvas.width, canvas.height);
    } else {
      await new Promise((resolve) => {
        frameImageElement.onload = () => {
          ctx.drawImage(frameImageElement, 0, 0, canvas.width, canvas.height);
          resolve();
        };
      });
    }
    const image = canvas.toDataURL('image/png');
    frameImageElement.src = image;
    this.experience.saveImage(image);

    return image;
  }
}
