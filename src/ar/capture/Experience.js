import * as THREE from 'three';

import Debug from './Utils/Debug.js';
import Sizes from './Utils/Sizes.js';
import Time from './Utils/Time.js';
import Camera from './Camera.js';
import Renderer from './Renderer.js';
import World from './World/World.js';
import Resources from './Utils/Resources.js';

import sources from './sources.js';

let instance = null;

export default class Experience {
  constructor(_canvas, saveImageCallback) {
    // Singleton
    if (instance) {
      return instance;
    }
    instance = this;

    // Global access
    window.experience = this;

    // Options
    this.canvas = _canvas;

    // Setup
    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.clickedObject = [];
    this.textureKeys = [];

    if (this.canvas) {
      this.canvas.addEventListener(
        'touchstart',
        this._checkForModelClick.bind(this),
        { passive: true },
      );
    }

    this.bindMethods();

    this.saveImageCallback = saveImageCallback;

    // Resize event
    this.sizes.on('resize', () => {
      this.resize();
    });

    // Time tick event
    this.time.on('tick', () => {
      this.update();
    });
  }
  bindMethods() {
    this.camera.bindMethods();
    this.renderer.bindMethods();
    this.resources.bindMethods();
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }

  init() {
    instance = null;
  }

  saveImage(image) {
    if (this.saveImageCallback) {
      this.saveImageCallback(image);
    }
  }
  dispose() {
    this.world.dispose();
    this.renderer.instance.dispose();
    if (this.camera.controls) {
      this.camera.controls.dispose();
    }
  }

  destroy() {
    this.sizes.off('resize');
    this.time.off('tick');

    // Traverse the whole scene
    this.scene.traverse((child) => {
      // Test if it's a mesh
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();

        // Loop through the material properties
        for (const key in child.material) {
          const value = child.material[key];

          // Test if there is a dispose function
          if (value && typeof value.dispose === 'function') {
            value.dispose();
          }
        }
      }
    });

    this.renderer.dispose();

    if (this.debug.active) this.debug.ui.destroy();
  }
  _checkForModelClick(event) {
    if (event.type === 'click') {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    } else if (event.type === 'touchstart' && event.touches.length > 0) {
      this.mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
    }

    this.raycaster.setFromCamera(this.mouse, this.camera.instance);

    const intersects = this.raycaster.intersectObjects(
      this.scene.children,
      true,
    ); // recursive search through all children

    for (let i = 0; i < intersects.length; i++) {
      for (let j = 0; j < this.clickedObject.length; j++) {
        if (
          this._isObjectChildOf(intersects[i].object, this.clickedObject[j])
        ) {
          if (intersects[i].object.name === 'stickers') {
            this.world.sticker.isMoving = true;
          }
          if (intersects[i].object.name === 'model') {
            this.world.model.isMoving = true;
          }
        }
      }
    }
  }

  _isObjectChildOf(child, parent) {
    while (child) {
      if (child === parent) return true;
      child = child.parent;
    }
    return false;
  }
}
