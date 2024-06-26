import * as THREE from 'three';
import Experience from '../Experience.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

export default class Model {
  constructor(name) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.items = this.experience.resources.items;

    // Resource
    this.resource = this.resources.items[name];
    if (name === 'unoModel') {
      this.experience.world.environment.sunLight.intensity = 1.4;
    } else if (name === 'bellModel') {
      console.log(name);
      this.experience.world.environment.sunLight.intensity = 1.4;
    }

    this.isMoving = false;

    this.initialPinchDistance = 0;
    this.initialScale = new THREE.Vector3();

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);

    // Add event listeners
    window.addEventListener('touchstart', this.onTouchStart.bind(this));
    window.addEventListener('touchmove', this.onTouchMove.bind(this));
    window.addEventListener('touchend', this.onTouchEnd.bind(this));

    this.touchStartPosition = new THREE.Vector2();

    this.setModel();
  }

  setModel() {
    this.model =
      SkeletonUtils.clone(this.resource.scene) ||
      SkeletonUtils.clone(this.resource.scene.children[0]);
    this.mixer = new THREE.AnimationMixer(this.model);

    this.resource.animations.forEach((clip) => {
      const action = this.mixer.clipAction(clip);
      action.play();
    });

    this.model.scale.set(1.5, 1.5, 1.5);
    this.model.position.set(0, 2, 0);
    this.model.rotation.set(0, 0, 0);
    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.name = 'model';

        child.material.depthWrite = !child.material.transparent;
        this.experience.clickedObject.push(child);
      }
    });
    this.experience.clickedObject.push(this.model);
  }

  onTouchStart(event) {
    if (this.isMoving) {
      this.touchStartPosition.set(
        event.touches[0].clientX,
        event.touches[0].clientY,
      );
    }
    if (event.touches.length === 2 && this.isMoving) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      this.initialPinchDistance = Math.sqrt(dx * dx + dy * dy);
      this.initialScale.copy(this.model.scale);
    }
  }

  onTouchMove(event) {
    if (this.isMoving) {
      const deltaX = event.touches[0].clientX - this.touchStartPosition.x;
      const deltaY = event.touches[0].clientY - this.touchStartPosition.y;

      const factor = 0.015;
      this.model.position.x += deltaX * factor;
      this.model.position.y -= deltaY * factor;

      const rotationFactor = 0.002; // Adjust this value to change rotation sensitivity
      this.model.rotation.y -= deltaX * rotationFactor;
      this.model.rotation.x -= deltaY * rotationFactor;

      this.touchStartPosition.set(
        event.touches[0].clientX,
        event.touches[0].clientY,
      );

      if (event.touches.length === 2 && this.isMoving) {
        const dx = event.touches[0].clientX - event.touches[1].clientX;
        const dy = event.touches[0].clientY - event.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const scale = distance / this.initialPinchDistance;
        this.model.scale.copy(this.initialScale).multiplyScalar(scale);
      }
    }
  }

  onTouchEnd() {
    this.isMoving = false;
  }

  update() {
    this.mixer && this.mixer.update(this.time.delta * 0.001);
  }
}
